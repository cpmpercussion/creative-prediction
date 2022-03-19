---
layout: crepre-reveal
type: research
title: Performing with a Generative Electronic Music Controller
summary:
center: true
width: 1280
height: 800
margin: 0.04
theme: assets/revealthemes/reveal/moon.scss
---

{% include slides/research-title.html %}

{% include slides/welcometocountry.html %}

## Outline

1. Introduction: An embodied approach to music generation
2. The Instrument: An 8-channel mixing controller
3. The generative AI System
4. Performances and Experiences

{% include slides/background-video.html
id="impsxtouch"
video="assets/predictive-models-in-interactive-music/imps-xtouch-loop.mp4"
muted="true"
%}

## Interacting with Musical Predictions

![]({% link assets/imps/predictive-interaction-motivation-hires.png %})

## Mixture Density Recurrent Neural Network

![]({% link assets/imps/mdn-motivation.png %})

## What to do with predictions?

![]({% link assets/imps/predictive-interactions.png%}){:style="width:50%"}

1. Call-and-Response: Continue gestures when performer stops
2. Layered predictions: Always predict next move from current gesture
3. Duet: Two interdependent processes

# Embodied Music Generation

{% include slides/background-image.html
image="assets/performing-generative-controller/charles_art/02_table.jpg"
bgcol="#000000"
bgsize="contain"
%}

{% include slides/background-image.html
image="assets/performing-generative-controller/charles_art/03_strike.jpg"
bgcol="#000000"
bgsize="contain"
%}

# Behringer xTouch Mini

{% include slides/background-image.html
id="xtouch"
image="assets/performing-generative-controller/xtouch-annotated.jpg"
bgcol="#000000"
bgsize="contain"
%}

## Behringer xTouch Mini

- 8 knobs with LED light ring indicators
- 16 buttons with LEDs
- one big fader
- MIDI output to get interactions
- MIDI input to control lights

## Generative AI System

- gestural predictions are made by a Mixture Density Recurrent Neural Network

- this is an extension of common LSTM/RNN designs to allow expressive predictions of multiple continuous variables.

- MDRNN specs: 2 32-unit LSTM layers, 9-dimensional mixture density layer (8 knobs + time)

**Small** model!

## Putting it together


{% include slides/background-image.html
id="xtouch"
image="assets/performing-generative-controller/xtouch-imps-1.jpg"
bgcol="#000000"
bgsize="cover"
%}

{% include slides/background-image.html
id="xtouch"
image="assets/performing-generative-controller/xtouch-imps-2.jpg"
bgcol="#000000"
bgsize="cover"
%}

{% include slides/background-image.html
id="xtouch"
image="assets/performing-generative-controller/xtouch-imps-3.jpg"
bgcol="#000000"
bgsize="cover"
%}

{% include slides/background-image.html
id="xtouch"
image="assets/performing-generative-controller/xtouch-imps-4.jpg"
bgcol="#000000"
bgsize="cover"
%}



## Performances and Experiences

- deployed in performance since 2019
- so it works! and it's practical!

but does is it better than a **random walk generator?**

## Influence and Co-Creation

can be steered (a little bit) by performer's gestures

- tends to continue adjusting knobs the performer last used

interesting behaviours learned from data

- changing one knob
- changing multiple knobs simultaneously
- pausing in between interactions
- making continual changes

learned "for free" (as opposed to programmed in)

## Small Data and Co-Adaptation

- interactions from each performance are saved

- some of these have been incorporated into training datasets

- co-adaptive: system grows and changes along with the performer

(yet to be studied rigorously)

## Roles and Interplay

- Who is driving the bus?

- Added envelope control and extra synth voice after initial performances

- Gives performer a different-level task to work on.

- Also important to allow performer to "just listen"

<!-- Neurofeedback 2020 video  -->
{% include slides/youtube.html id="WumtMGHAuV8" %}
<!-- https://youtu.be/WumtMGHAuV8 -->

## Thanks! {#thanks}

![]({% link assets/charlesgif.gif %}){:style="width:25%;"} 

- IMPS on [GitHub](https://github.com/cpmpercussion/imps)
- creative ML: [creativeprediction.xyz](https://creativeprediction.xyz/)
- Twitter/Github: [@cpmpercussion](https://www.twitter.com/cpmpercussion)
- Homepage: [charlesmartin.com.au](https://charlesmartin.com.au)

