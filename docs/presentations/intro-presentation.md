---
layout: reveal
title:  Making Predictive NIMEs with Neural Networks
permalink: /presentations/intro/
---

{% include slides/title.html %}

<section data-markdown>
<textarea data-template>

### What kinds of neural networks are useful in NIMEs?

### How do recurrent neural networks work? <!-- .element: class="fragment" -->

### How can we use them to generate creative data? <!-- .element: class="fragment" -->

### Is there a more convenient way to do this? <!-- .element: class="fragment" -->

</textarea>
</section>

<section data-markdown>
<textarea data-template>

### Focus on hands on experiments

### Focus on small data <!-- .element: class="fragment" -->

### Use widely available tools <!-- .element: class="fragment" -->

### Everybody will train a neural network (?) <!-- .element: class="fragment" -->

</textarea>
</section>

<section data-markdown>
<textarea data-template>
<!-- .slide: data-background="#000000" -->
# Rough Plan
</textarea>
</section>

<section data-markdown>
<textarea data-template>

- 9:00 Meeting, Intro, and Python Setup
- 9:15 [Overview of Deep Learning and Creativity]({{site.baseurl}}/nime/#overview-dl-creativity)
- 9:45 [Generating Text and Music with RNNs (practical)]({{site.baseurl}}/nime/#generating-sequences)
- 10:30 (coffee break)
- 10:45 Hack: inventing Star Trek episode titles
- 11:30 [Using Mixture Density Networks (MDNs)]({{site.baseurl}}/nime/#mixture-density)
- 13:00 Lunch (90 minutes)
- 14:30 [Making Predictive Musical Interactions with the IMPS system]({{site.baseurl}}/nime/#making-predictive)
- 16:00 (coffee break)
- 16:15 [Future directions for creative neural networks at NIME and beyond]({{site.baseurl}}/nime/#future-directions)

</textarea>
</section>

<section data-markdown>
<textarea data-template>
## Learning to Predict Sequences

![]({{site.baseurl}}/assets/sequence-learning.png)
</textarea>
</section>

<section data-markdown>
<textarea data-template>
## Recurrent Neural Networks and LSTM Units

![]({{site.baseurl}}/assets/charRNN-arch.png)
</textarea>
</section>


<section data-markdown>
<textarea data-template>

## Mixture Density RNNs

![]({{site.baseurl}}/assets/imps/mdn-examples.jpg)

</textarea>
</section>

<section data-markdown>
<textarea data-template>
## Interacting with Musical Predictions

![]({{site.baseurl}}/assets/imps/predictive-interaction-motivation-hires.png)
</textarea>
</section>

<section data-markdown>
<textarea data-template>
## Starting a community

![]({{site.baseurl}}/assets/imps/imps-nimes-examples.jpg)
</textarea>
</section>

<section data-markdown>
<textarea data-template>
<!-- .slide: data-background="#000000" -->
# Predictions
</textarea>
</section>

<section data-markdown>
<textarea data-template>
## Musical Predictions

![]({{site.baseurl}}/assets/intro/musical-performance-predictions.jpg)
</textarea>
</section>

<section data-markdown>
<textarea data-template>
## What are predictions?

![]({{site.baseurl}}/assets/intro/predictive-models-overview.png)
</textarea>
</section>

<section data-markdown>
<textarea data-template>
## Where can they fit into a NIME?

![]({{site.baseurl}}/assets/intro/interactive-music-model-rowe.png)
</textarea>
</section>

<section data-markdown>
<textarea data-template>
## Where can they fit into a performance?

![]({{site.baseurl}}/assets/intro/prediction-location.png)
</textarea>
</section>

<section data-markdown>
<textarea data-template>
## Example: Wekinator-style NIMEs

![]({{site.baseurl}}/assets/wekinator-example.jpg)

[Source: FlowerPowa74 (YouTube Video)](https://youtu.be/tcQpnV4ajLY)
</textarea>
</section>

<section data-markdown>
<textarea data-template>
## Example: RoboJam

![]({{site.baseurl}}/assets/robojam-interaction.png)

[RoboJam Demo](https://youtu.be/n2xSHoB2_uY)
</textarea>
</section>

<section data-markdown>
<textarea data-template>
## Example: Neural iPad Ensemble

![]({{site.baseurl}}/assets/neural-ipad-band-demo.jpg)

[YouTube Video](https://youtu.be/FpQCAd0zKiU)
</textarea>
</section>

<section class="talk-box" data-markdown data-background-color="#aef4e6">
<textarea data-template>
## talk

what kinds of predictions would you like a NIME to make?
</textarea>
</section>

<section data-markdown>
<textarea data-template>
<!-- .slide: data-background="#000000" -->
# Tools
</textarea>
</section>

<section data-markdown>
<textarea data-template>
## Python is powerful.

![](https://imgs.xkcd.com/comics/python.png)

We can all be Python superheroes! <!-- .element: class="fragment" -->
</textarea>
</section>

<section data-markdown>
<textarea data-template>
## Python setup can be hard.

![](https://imgs.xkcd.com/comics/python_environment.png)

(Sorry) <!-- .element: class="fragment" -->
</textarea>
</section>

<section data-markdown>
<textarea data-template>
## Colab to the Rescue?

![]({{site.baseurl}}/assets/colab.png)

</textarea>
</section>

<section data-markdown>
<textarea data-template>

## extra tools

![Processing](https://processing.org/img/processing3-logo.png) <!-- .element: width="10%" -->

[Processing](https://processing.org)

![Pure Data](https://fr.flossmanuals.net/puredata/choisir-entre-pd-extended-et-pd-vanilla/static/puredata_fr-logo_pd_extended-fr-old.png) <!-- .element: width="10%" -->

[Pure Data](https://puredata.info/downloads/pure-data)

Or use whatever computer music environment you want (needs to send and receive OSC messages).

</textarea>
</section>


<section class="info-box" data-markdown data-background-color="#b6daf2">
<textarea data-template>
## get your tools together

Now's the time to look at the [setup]({{site.baseurl}}/setup) page
on [creativeprediction.xyz](https://creativeprediction.xyz).

This course works best with Python, Keras, and Jupyter on your computer, but you
can use (online) Google Colab Notebooks as well for most of the
examples.
</textarea>
</section>
