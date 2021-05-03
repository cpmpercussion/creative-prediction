---
layout: page
title: Presentations
permalink: /presentations/
hidden: true
---

Here's some presentations about neural networks and creative prediction:

{% for pres in site.presentations %}
    {% if pres.hidden != true %}
- [{{pres.title}}]({{pres.url}})
    {% endif %}
{% endfor %}
