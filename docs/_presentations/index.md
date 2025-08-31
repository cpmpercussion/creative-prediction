---
layout: page
title: Presentations
permalink: /presentations/
hidden: true
---

Here's some presentations about neural networks and creative prediction:

### Teaching

{% for pres in site.presentations %}
    {% if pres.hidden != true and pres.type == "teaching" %}
- [{{pres.title}}]({% pres.url | prepend: site.baseurl%})
    {% endif %}
{% endfor %}

### Research

{% for pres in site.presentations %}
    {% if pres.hidden != true and pres.type == "research" %}
- [{{pres.title}}]({% pres.url | prepend: site.baseurl%})
    {% endif %}
{% endfor %}

### All

{% include basic_collection_list.html items=site.presentations %}
