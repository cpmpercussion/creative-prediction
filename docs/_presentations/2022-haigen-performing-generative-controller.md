---
layout: crepre-reveal
type: research
title: Performing with a Generative Electronic Music Controller
summary:
center: false
width: 1280
height: 800
margin: 0.04
theme: assets/revealthemes/reveal/moon.scss
---

<!-- theme: assets/revealthemes/crepre-dark.scss -->

{% include slides/research-title.html %}

{% include slides/welcometocountry.html %}

{% comment %}
## Outline

1. Introduction: An embodied approach to music generation
2. The Instrument: An 8-channel mixing controller
3. The generative AI System
4. Performances and Experiences
{% endcomment %}

{% include slides/background-video.html
id="impsxtouch"
video="assets/predictive-models-in-interactive-music/imps-xtouch-loop.mp4"
muted="true"
%}

{% include slides/background-image.html
image="assets/lectures/all-demo.jpg"
bgcol="#000000"
bgsize="cover"
opacity="0.4"
heading="Embodied Music Generation"
%}

- **Note Generation**: generate "symbolic" music---notes (A, B, C, half-note, quaver, etc.). Abstract version of sounds created by _some_ musical instruments.

- **Embodied Gesture Generation**: generate the _movements_ a performer makes to operate a particular musical instrument.

This project explores **Embodied Gesture Generation** in an improvised electronic music context!

{% include slides/background-image.html
id="xtouch"
image="assets/performing-generative-controller/xtouch-imps-4.jpg"
bgcol="#000000"
bgsize="cover"
opacity="0.4"
heading="Why do this?"
%}

- Lots of musical instruments **don't use "notes"**

- e.g., turntable, mixer, modular synthesiser, effects pedal, etc

- what does "intelligence" look like in these instruments?

- Can we incorporate generative AI into a longer-term performance practice?

{% include slides/background-image.html
id="xtouch"
image="assets/performing-generative-controller/xtouch-annotated.jpg"
bgcol="#000000"
bgsize="contain"
%}

{% include slides/background-image.html
id="xtouch"
image="assets/performing-generative-controller/xtouch-imps-3.jpg"
bgcol="#000000"
opacity=0.4
bgsize="cover"
heading="Sound Design"
%}

- 8 synthesiser voices, each mapped to one knob

- 2 sound options for each voice: sine-tone or looped sample player

- turning knob "tunes" that voice, and also turns it's volume up momentarily!

- sounds (usually) only happen when knobs are moving

- buttons trigger envelope (volume), or turn voice on continuously

<!-- Not something for pop music, but not unfamiliar in experimental, electronic, contemporary classical world. -->

## Generative AI System

- gestural predictions are made by a Mixture Density Recurrent Neural Network

- this is an extension of common LSTM/RNN designs to allow expressive predictions of multiple continuous variables.

- MDRNN specs: 2 32-unit LSTM layers, 9-dimensional mixture density layer (8 knobs + time)

{% include slides/background-image.html
id="xtouch"
image="assets/imps/mdn-motivation.png"
bgcol="#FFFFFF"
bgsize="contain"
%}

## Data Collection / Training / Interactions

- This project applies the ["Interactive Music Prediction System" (IMPS)](https://creativeprediction.xyz/imps/)

- IMPS: A CLI Python program that provides MDRNN, data collection, training and interaction features.

- Communicates with music software over OSC (Open Sound Control)

- In this case, MDRNN is configured for **"call-and-response"** interaction (or **"continuation"**)

{% include slides/background-image.html
id="xtouch"
image="assets/performing-generative-controller/xtouch-imps-2.jpg"
bgcol="#000000"
bgsize="cover"
%}

{% include slides/background-image.html
id="xtouch"
image="assets/performing-generative-controller/xtouch-imps-1.jpg"
bgcol="#000000"
bgsize="contain"
%}

## Performances and Experiences

- deployed in performance since 2019

- so it works! and it's practical!

- but is it better than a **random walk generator?**

{% include slides/background-image.html
id="xtouch"
image="assets/performing-generative-controller/xtouch-imps-3.jpg"
bgcol="#000000"
opacity=0.4
bgsize="cover"
heading="Influence and Co-Creation"
%}

- can be steered (a little bit) by performer's gestures

- tends to continue adjusting knobs the performer last used

- learns interesting behaviours from data (moving one vs multiple knobs, pauses, continuous changes)

{% include slides/background-image.html
image="assets/lectures/all-demo.jpg"
bgcol="#000000"
bgsize="cover"
opacity="0.4"
heading="Small Data and Co-Adaptation"
%}

- interactions from each performance are saved

- some of these have been incorporated into training datasets

- co-adaptive: system grows and changes along with the performer (yet to be studied rigorously)

{% include slides/background-video.html
id="impsxtouch"
video="assets/predictive-models-in-interactive-music/imps-xtouch-loop.mp4"
muted="true"
opacity="0.4"
heading="Roles and Interplay"
%}

- Who's driving the bus?

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


{% comment %}

## Interacting with Musical Predictions

![]({% link assets/imps/predictive-interaction-motivation-hires.png %})


## What to do with predictions?

![]({% link assets/imps/predictive-interactions.png%}){:style="width:50%"}

1. Call-and-Response: Continue gestures when performer stops
2. Layered predictions: Always predict next move from current gesture
3. Duet: Two interdependent processes

{% endcomment %}
