---
layout: reveal-larger
title: An Interactive Musical Prediction System with MDRNNs
permalink: /presentations/imps/
---

{% include slides/title.html %}

<section data-markdown>
<textarea data-template>
<!-- .slide: data-background="#000000" -->
# What is this?
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
## Interacting with Musical Predictions

![]({{site.baseurl}}/assets/imps/predictive-interaction-motivation-hires.png)
</textarea>
</section>

<section data-markdown>
<textarea data-template>

## Why is this needed?

| Creative Deep Learning Systems             | NIMEs                                         |
|--------------------------------------------|-----------------------------------------------|
| Focus on MIDI data (e.g., Magenta Studio)  | Yes MIDI, but also many custom sensors        |
| Focus on digital audio                     | Focus on performer gestures                   |
| Focus on composition/artefact generation   | Focus on interaction                          |
| Rhythm on 16th note grid                   | Complex or no rhythm                          |
| Focus on categorical data                  | Continuous data more interesting              |

![]({{site.baseurl}}/assets/imps/imps-nimes-examples.jpg)

</textarea>
</section>


{% include slides/youtube.html id="Kdmhrp2dfHw" %}

<section data-markdown>
<textarea data-template>

## IMPS: Interactive Musial Prediction System

![]({{site.baseurl}}/assets/imps/demonic_imps.jpg)

<!-- TODO: make fragments -->
- An opinionated deep learning model for NIMEs <!-- .element: class="fragment" -->
- An environment for making NIMEs that play themselves <!-- .element: class="fragment" -->
- "Wekinator" for deep learning? <!-- .element: class="fragment" -->

</textarea>
</section>

<section data-markdown>
<textarea data-template>
<!-- .slide: data-background="#000000" -->
# How does it work?
</textarea>
</section>

<section data-markdown>
<textarea data-template>
## Mixture Density Recurrent Neural Network

![]({{site.baseurl}}/assets/imps/mdn-motivation.png)
</textarea>
</section>

<section data-markdown>
<textarea data-template>

## Mixture Density RNN

![]({{site.baseurl}}/assets/imps/mdn-examples.jpg)

Good at predicting creative, continuous, multi-dimensional data: handwriting, sketches... musical gestures?

</textarea>
</section>

<section data-markdown>
<textarea data-template>

## What to do with predictions?

![]({{site.baseurl}}/assets/imps/predictive-interactions.png) <!-- .element: width="50%" -->

1. Call-and-Response: Continue gestures when performer stops
2. Layered predictions: Always predict next move from current gesture
3. Duet: Two interdependent processes

</textarea>
</section>

<section data-markdown>
<textarea data-template>
<!-- .slide: data-background="#000000" -->
# Ok, how do I _use_ it?
</textarea>
</section>

{% include slides/background-image.html
image="/assets/imps/IMPS_connection_example_hires.png"
bgsize="contain"
%}

<section data-markdown>
<textarea data-template>
## Three easy steps...

<ol>

<li class="fragment">
<b>Collect some data:</b> IMPS logs interactions automatically to build up a dataset
</li>

<li class="fragment">
<b>Train an MDRNN:</b> IMPS includes good presets, no need to train for days/weeks
</li>

<li class="fragment">
<b>Perform!</b> IMPS includes three interaction modes, scope to extend in future!
</li>

</ol>

</textarea>
</section>

<section data-markdown>
<textarea data-template>
<!-- .slide: data-background="#000000" -->
# Is this even _practical_?
</textarea>
</section>

<section data-markdown>
<textarea data-template>

## Deep Learning in NIMEs??

- Is it practical for real-time use?
- How do the MDRNN parameters affect time per prediction?
- What are "good defaults" for training parameters?
- Do you need a powerful/expensive computer?

</textarea>
</section>

<section data-markdown>
<textarea data-template>

## Test Systems

![Test computers]({{site.baseurl}}/assets/imps/imps-test-computers.jpg)

</textarea>
</section>

<section data-markdown>
<textarea data-template>

## Results: Time per prediction

![Time per prediction vs LSTM units]({{site.baseurl}}/assets/imps/prediction_time_against_units.png)

Time per prediction (ms) with different sizes of LSTM layers.

</textarea>
</section>

<section data-markdown>
<textarea data-template>

## Results: Time per prediction

![Time per prediction vs MDN dimension]({{site.baseurl}}/assets/imps/prediction_time_against_dimension_64units.png)

Time per prediction (ms) with different MDN output dimensions. (64
LSTM units)

</textarea>
</section>

<section data-markdown>
<textarea data-template>

## Results: Training Error vs Validation Set Error

![]({{site.baseurl}}/assets/imps/training_loss_12K_lightpad_model.png)

12K sample dataset (15 minutes of performance)

Takeaway: **Smallest model best for small datasets.** Don't bother training for
too long.

</textarea>
</section>


<section data-markdown>
<textarea data-template>

## Results: Training Error vs Validation Set Error

![]({{site.baseurl}}/assets/imps/training_loss_100K_lightpad_model.png)

100K sample dataset (15 minutes of performance)

Takeaway: **64- and 128-unit model still best!**

</textarea>
</section>

<section>

<h2>Results: Exploring Generation</h2>

<img src="{{site.baseurl}}/assets/imps/robojam_temperature_sampling_0.png" width="50%">

<p>Takeaway: Make Gaussians <b>less diverse</b>, make categorical <b>more diverse</b>.</p>

</section>

<section data-markdown>
<textarea data-template>

## Try it out!

<img src="{{site.baseurl}}/assets/imps/imps-github.png" style="float:right;width:45%;">

- Available on [GitHub](https://github.com/cpmpercussion/imps)
- Try with your NIMEs!
- Hack if you want!
- Add an issue with problems/results!

Twitter: [@cpmpercussion](https://www.twitter.com/cpmpercussion)

Website: [creativeprediction.xyz/imps](https://creativeprediction.xyz/imps)


</textarea>
</section>
