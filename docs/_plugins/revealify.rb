# (c) Ben Swift 2018, MIT Licence
# ben.swift@anu.edu.au

# a liquid filter for turning regular md output into the <section>-enclosed
# chunks required by reveal.js

require 'jekyll'
require 'nokogiri'

module Jekyll

  module Revealify

    def revealify(html)

      # parse content
      content = Nokogiri::HTML.fragment(html)

      # create an empty node
      reveal_div = Nokogiri::HTML.fragment('<div class="reveal"><div class="slides"></div></div>', 'UTF-8')
      slides_div = reveal_div.search('.slides').first

      content.xpath("*").each do |element|

        # <section> elements should be passed through as-is
        if element.matches? "section"
          slides_div.add_child(element.dup)

        else
          # on "split" elements (<h1>, <h2>, <hr>)
          if element.matches? "h1,h2,hr"
            current_section = slides_div.add_child("<section>").first
            # hoist all the header's attributes up to the wrapper element
            # not sure if this will always work, but here goes...
            element.keys.each do |attribute|
              # relies on the fact that the "current" wrapper node is the last child in ret
              current_section[attribute] = element[attribute]
              # element.delete attribute
            end
          end

          # add the element to the current <section> (i.e. the current slide)
          # unless it's just an <hr> (which are used for splitting only)
          current_section = slides_div.last_element_child
          current_section.add_child(element.dup) unless element.matches? "hr"
        end

      end

      reveal_div.to_html
    end

  end

end

Liquid::Template.register_filter(Jekyll::Revealify)
