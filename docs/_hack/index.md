---
layout: page
title: Hacking on Creative Prediction
permalink: /hack/
hidden: true
---

Here's some exercises/projects/tutorials, to get you started with
creative prediction.

Remember to check out the [setup](../setup) page to get your
Python/Keras/Jupyter tools running.

{% for hack in site.hack %}
    {% if hack.hidden != true %}
1. [{{hack.title}}]({{hack.url}})
    {% endif %}
{% endfor %}


### Tutorials/Demos

- **Generating Creative Sequences**
    - Generating Text with a CharRNN; inventing Star Trek episode titles. {% include notebooks.html notebook="1-star-trek-titles-RNN-basic.ipynb" %}
    - Advanced CharRNN techniques. {% include notebooks.html notebook="2-star-trek-titles-advanced.ipynb" %}
    - Continuing musical sequences. {% include notebooks.html notebook="3-zeldic-musical-RNN.ipynb" %}
    - Combining multiple sequences in a CharRNN with "Gesture-RNN" (not working right now..). {% include notebooks.html notebook="4-gesture-rnn.ipynb" %}

- **RNNs for continuous-valued data: Mixture Density Layers (MDNs)**
    - Mixture distribution examples {% include notebooks.html notebook="mdn-talk-examples.ipynb" %}
    - Introduction to Mixture Density Layers  {% include notebooks.html notebook="5-mdn-sine-prediction.ipynb" %}
    - Predicting sketching: Kanji generation with a Mixture Density RNN. {% include notebooks.html notebook="6-MDN-RNN-kanji-generation.ipynb" %}
    - Predicting time and place - musical scribbles with RoboJam. {% include notebooks.html notebook="7-MDN-Robojam-touch-generation.ipynb" %}

- **VAE, GAN, and World Models**
    - DoomVAE example {% include notebooks.html notebook="9-DoomVAE.ipynb" %}
    - Doom World Model example (not done yet!)
    - MicroGAN example {% include notebooks.html notebook="8-LittleGAN.ipynb" %}
