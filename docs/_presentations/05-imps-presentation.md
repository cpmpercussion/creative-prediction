---
layout: reveal
type: research
title: An Interactive Musical Prediction System with MDRNNs
permalink: /presentations/imps/
theme:  assets/revealthemes/reveal/white.scss
center: true
margin: 0.04
---

{% include slides/research-title.html %}


# What is this?


## Learning to Predict Sequences

![]({% link assets/sequence-learning.png %})


## Interacting with Musical Predictions

![]({% link assets/imps/predictive-interaction-motivation-hires.png %})


## Why is this needed?

![]({% link assets/imps/imps-nimes-examples.jpg %})

| Creative Deep Learning Systems             | NIMEs                                         |
|--------------------------------------------|-----------------------------------------------|
| Focus on MIDI data (e.g., Magenta Studio)  | Yes MIDI, but also many custom sensors        |
| Focus on digital audio                     | Focus on performer gestures                   |
| Focus on composition/artefact generation   | Focus on interaction                          |
| Rhythm on 16th note grid                   | Complex or no rhythm                          |
| Focus on categorical data                  | Continuous data more interesting              |


{% include slides/youtube.html id="Kdmhrp2dfHw" %}


## IMPS: Interactive Musial Prediction System

![]({% link assets/imps/demonic_imps.jpg %})

{:.fragment}
- An opinionated deep learning model for NIMEs
- An environment for making NIMEs that play themselves
- "Wekinator" for deep learning?


# How does it work?


## Mixture Density Recurrent Neural Network

![]({% link assets/imps/mdn-motivation.png %})


## Mixture Density RNN

![]({% link assets/imps/mdn-examples.jpg %})

Good at predicting creative, continuous, multi-dimensional data: handwriting, sketches... musical gestures?


## What to do with predictions?

![]({% link assets/imps/predictive-interactions.png%}){:style="width:50%"}

1. Call-and-Response: Continue gestures when performer stops
2. Layered predictions: Always predict next move from current gesture
3. Duet: Two interdependent processes


# Ok, how do I _use_ it?


{% include slides/background-image.html
image="/assets/imps/IMPS_connection_example_hires.png"
bgsize="contain"
%}

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


# Is this even _practical_?


## Deep Learning in NIMEs??

- Is it practical for real-time use?
- How do the MDRNN parameters affect time per prediction?
- What are "good defaults" for training parameters?
- Do you need a powerful/expensive computer?


## Test Systems

![Test computers]({% link assets/imps/imps-test-computers.jpg %})


## Results: Time per prediction

![Time per prediction vs LSTM units]({% link assets/imps/prediction_time_against_units.png %})

Time per prediction (ms) with different sizes of LSTM layers.


## Results: Time per prediction

![Time per prediction vs MDN dimension]({% link assets/imps/prediction_time_against_dimension_64units.png %})

Time per prediction (ms) with different MDN output dimensions. (64
LSTM units)


## Results: Training Error vs Validation Set Error

![]({% link assets/imps/training_loss_12K_lightpad_model.png %})

12K sample dataset (15 minutes of performance)

Takeaway: **Smallest model best for small datasets.** Don't bother training for
too long.


## Results: Training Error vs Validation Set Error

![]({% link assets/imps/training_loss_100K_lightpad_model.png %})

100K sample dataset (120 minutes of performance)

Takeaway: **64- and 128-unit model still best!**


## Results: Exploring Generation

![]({% link assets/imps/robojam_temperature_sampling_0.png %}){:style="width:50%"}

Takeaway: Make Gaussians **less diverse**, make categorical **more diverse**.


## Try it out!

<img src="{% link assets/imps/imps-github.png %}" style="float:right;width:45%;">

- Available on [GitHub](https://github.com/cpmpercussion/imps)
- Try with your NIMEs!
- Hack if you want!
- Add an issue with problems/results!

Twitter: [@cpmpercussion](https://www.twitter.com/cpmpercussion)

Website: <https://cpmpercussion.github.io/creative-prediction/>
