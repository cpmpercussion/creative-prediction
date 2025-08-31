---
layout: crepre-reveal
type: teaching
title:  Making Predictive NIMEs with Neural Networks
permalink: /presentations/intro/
---

{% include slides/title.html %}


## Outline

### What kinds of neural networks are useful in NIMEs?

### How do recurrent neural networks work? <!-- .element: class="fragment" -->

### How can we use them to generate creative data? <!-- .element: class="fragment" -->

### Is there a more convenient way to do this? <!-- .element: class="fragment" -->

## Outline

### Focus on hands on experiments

### Focus on small data <!-- .element: class="fragment" -->

### Use widely available tools <!-- .element: class="fragment" -->

### Everybody will train a neural network (?) <!-- .element: class="fragment" -->


## Rough Plan

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

## Learning to Predict Sequences

![]({{site.baseurl}}/assets/sequence-learning.png)


## Recurrent Neural Networks and LSTM Units

![]({{site.baseurl}}/assets/charRNN-arch.png)



## Mixture Density RNNs

![]({{site.baseurl}}/assets/imps/mdn-examples.jpg)

## Interacting with Musical Predictions

![]({{site.baseurl}}/assets/imps/predictive-interaction-motivation-hires.png)

## Starting a community

![]({{site.baseurl}}/assets/imps/imps-nimes-examples.jpg)

# Predictions

## Musical Predictions

![]({{site.baseurl}}/assets/intro/musical-performance-predictions.jpg)

## What are predictions?

![]({{site.baseurl}}/assets/intro/predictive-models-overview.png)

## Where can they fit into a NIME?

![]({{site.baseurl}}/assets/intro/interactive-music-model-rowe.png)

## Where can they fit into a performance?

![]({{site.baseurl}}/assets/intro/prediction-location.png)

## Example: Wekinator-style NIMEs

![]({{site.baseurl}}/assets/wekinator-example.jpg)

[Source: FlowerPowa74 (YouTube Video)](https://youtu.be/tcQpnV4ajLY)

## Example: RoboJam

![]({{site.baseurl}}/assets/robojam-interaction.png)

[RoboJam Demo](https://youtu.be/n2xSHoB2_uY)

## Example: Neural iPad Ensemble

![]({{site.baseurl}}/assets/neural-ipad-band-demo.jpg)

[YouTube Video](https://youtu.be/FpQCAd0zKiU)

## talk

what kinds of predictions would you like a NIME to make?

# Tools

## Python is powerful.

![](https://imgs.xkcd.com/comics/python.png)

We can all be Python superheroes! <!-- .element: class="fragment" -->

## Python setup can be hard.

![](https://imgs.xkcd.com/comics/python_environment.png)

(Sorry) <!-- .element: class="fragment" -->

## Colab to the Rescue?

![]({{site.baseurl}}/assets/colab.png)

## extra tools

[Processing](https://processing.org)

[Pure Data](https://puredata.info/downloads/pure-data)

Or use whatever computer music environment you want (needs to send and receive OSC messages).

## get your tools together

Now's the time to look at the [setup]({{site.baseurl}}/setup) page
on <https://cpmpercussion.github.io/creative-prediction/>.

This course works best with Python, Keras, and Jupyter on your computer, but you
can use (online) Google Colab Notebooks as well for most of the
examples.
