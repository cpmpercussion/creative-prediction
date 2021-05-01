# this code is originally from:
#   https://github.com/benswift/benswift.github.io/blob/b00343c352dcc83ffd75379b0287f1ccf15f3aa7/_plugins/revealify.rb
# 
# it's since been modified by the owners of this project. original license:
#   (c) Ben Swift 2017-2019, MIT Licence
#   ben.swift@anu.edu.au

# a liquid filter for turning regular md output into the <section>-enclosed
# chunks required by reveal.js

module Jekyll

  module Revealify

    def revealify(html)

      # parse content (wrapped in the reveal > slides divs)
      reveal_div = Nokogiri::HTML.fragment("<div class=\"reveal\"><div class=\"slides\">#{html}</div></div>", 'UTF-8')
      slides_div = reveal_div.search('.slides').first

      unless slides_div.first_element_child.matches? "section,h1,h2,hr"
        raise "reveal files must start with <section>, <h1>, <h2> or <hr>, not #{slides_div.first_element_child.name} (in \"#{@context.registers[:page]["path"]}\")"
      end

      slides_div.element_children.each do | element |

        # <section> elements should be passed through as-is
        if element.matches? "section"
          slides_div.add_child(element)

        else
          # on "split" elements (<h1>, <h2>, <hr>)
          if element.matches? "h1,h2,hr"
            current_section = slides_div.add_child("<section>").first
            # hoist all the header's attributes up to the wrapper element
            # not sure if this will always work, but here goes...
            element.keys.each do |attribute_name|
              # relies on the fact that the "current" wrapper node is the last child in ret
              current_section[attribute_name] = element[attribute_name]
              # so that we don't get duplicate attributes e.g. IDs
              element.remove_attribute(attribute_name)
            end
          end

          # add the element to the current <section> (i.e. the current slide)
          # unless it's just an <hr> (which are used for splitting only)
          if element.matches? "hr"
            element.unlink
          else
            slides_div.last_element_child.add_child(element)
          end
        end

      end

      reveal_div.to_html
    end

  end

end

Liquid::Template.register_filter(Jekyll::Revealify)
