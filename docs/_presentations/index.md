---
layout: page
title: Presentations
permalink: /presentations/
hidden: true
---

Here's some presentations about neural networks and creative prediction:

{% comment %}

- [Intro to Creative Prediction](intro)
- [Deep Dive on RNNs and LSTM](deep-dive-on-rnns)
- [Mixture Density RNNs](mixture-density-networks)
- [Deep Learning in the Cloud](deep-learning-on-cloud)
- [Using the IMPS System](imps)
- [Computing Practicalities for IN5490](crepreprac)
- [Creating Intelligent Instruments](creating-intelligent-instruments)
- [Creative ML with ml5.js](creml5js)

{% endcomment %}

{% for pres in site.presentations %}
    {% if pres.hidden != true %}
- [{{pres.title}}]({{pres.url}})
    {% endif %}
{% endfor %}
