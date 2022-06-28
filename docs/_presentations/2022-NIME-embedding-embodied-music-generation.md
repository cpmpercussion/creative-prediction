---
layout: crepre-reveal
type: research
title: Embedding Embodied Music Generation
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



1. introduction: an embodied approach to music generation
2. instrument: an 8-channel mixing controller
3. instrument: a Raspberry-Pi based instrument
3. the generative AI system
4. performances and experiences
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

- **note generation**: generate "symbolic" music---notes (A, B, C, half-note, quaver, etc.). Abstract version of sounds created by _some_ musical instruments.

- **embodied gesture generation**: generate the _movements_ a performer makes to operate a particular musical instrument.

this project explores **embodied gesture generation** in an improvised electronic music context!

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

- what does "intelligence" and "co-creation" look like in these instruments?

- can we incorporate generative AI into a longer-term performance practice?

<!-- EMPI -->

{% include slides/background-video.html
id="empititle"
video="assets/empi/empi-micro-demo.mp4"
loop="true"
opacity="0.7"
muted="true"
background="#000000"
heading="Embodied Predictive Musical Instrument (EMPI)"
%}


## Embodied Predictive Musical Instrument (EMPI) {#empidetails}

![]({% link assets/empi/EMPI-system-diagram.jpg %}){:style="width:50%;"}

- Predicts next movement and time, represents physically.
- Experiments with interaction mappings; mainly focussed on call-response
- Weird and confusing/fun?

{% comment %}

{% include slides/background-image.html
id="empihardware"
image="assets/empi/empi_open.jpg"
bgcol="#000000"
%}

<!-- How to build an EMPI -->

## How to build one {#empihardwaredetails}

- **Brain**: Raspberry Pi 3/4
- **Interface**: Arduino Pro Mini or similar
- **Amplifier**: Adafruit Mono 2.5W (PAM8302)
- **Speaker**: scavenged from monitor?
- **Case**: custom 3D print
- **Software**: [https://github.com/cpmpercussion/empi](https://github.com/cpmpercussion/empi)


## Software {#empisoftwaredetails}
  
  - **Sound**: Pure Data (pd) running in headless mode
  - **Predictions**: IMPS (running on RPi)
  - **Interface to MCU**: MIDI over USB

Software starts on boot on the RPi, can configure over a network.

{% include slides/background-image.html
id="empi2"
image="assets/empi/empi_2.jpg"
%}


{% include slides/background-image.html
id="empiproofofconcept"
image="assets/empi/empi_00.jpg"
%}

{% include slides/background-image.html
id="empi0"
image="assets/empi/empi_0.jpg"
%}

{% include slides/background-image.html
id="empi1"
image="assets/empi/empi_1.jpg"
%}

{% include slides/background-image.html
id="empicases"
image="assets/empi/empi_designs.jpg"
%}



{% include slides/background-image.html
id="empi3"
image="assets/empi/empi_3.jpg"
%}

{% endcomment %}


## Training Data

![Human Data]({% link assets/empi/training_human.png %})
![Sine Data]({% link assets/empi/training_sine.png %}){:style="width:24%" }
![Square Data]({% link assets/empi/training_square.png %}){:style="width:24%" }
![Saw Data]({% link assets/empi/training_saw.png %}){:style="width:24%" }
![Noise Data]({% link assets/empi/training_noise.png %}){:style="width:24%" }

## Generated Data

![Human Generation]({% link assets/empi/generation_human_4500points.png %}){:style="width:50%" }
![Synth Generation]({% link assets/empi/generation_synth.png %}){:style="width:50%" }
![Noise Generation]({% link assets/empi/generation_noise.png %}){:style="width:50%" }


{% include slides/background-video.html
id="empihuman"
video="assets/empi/empi-short-demo.mp4"
%}

{% include slides/background-video.html
id="empinoise"
video="assets/empi/empi_synth.mp4"
%}

{% include slides/background-video.html
id="empinoise"
video="assets/empi/empi_noise.mp4"
%}


{% include slides/background-image.html
id="empi-experiment"
image="assets/empi/study-image.jpg"
heading="Improvisations with EMPI"
bgcol="#000000"
opacity=0.4
%}

- 12 participants

- two independent factors: _model_ and _feedback_

- model: human, synthetic, noise

- feedback: motor on, motor off

## Results: Survey {#empi-survey}

![]({% link assets/empi/survey_boxplot_results.jpg %}){:style="width:80%;"}

Change of ML model had significant effect: Q2, Q4, Q5, Q6, Q7

## Results: Survey {#empi-survey-takeaway}

- human model most "related", noise was least

- human model most "musically creative"

- human model easiest to "influence"

- noise model not rated badly!

Participants generally preferred human or synth, but not always!

## Results: Performance Length {#empi-perf-length}

![]({% link assets/empi/performance_length.jpg %}){:style="width:80%;"}

Human and synth: **more range** of performance lengths with motor on.

Noise: **more range** with motor off.



## Takeaways

Studied self-contained intelligent instrument in **genuine performance**.

Physical representation could be **polarising**.

Performers work hard to **understand** and **influence** ML model.

Constrained, intelligent instrument can produce a **compelling experience**.

{% comment %}
ML model's training dataset affects how performers perceive the model's responses, the extent to which they are able to influence it and use it as a source of inspiration.
Different performers appreciate different models.
{% endcomment %}

<!-- what's next -->




{% include slides/background-image.html
id="xtouch"
image="assets/performing-generative-controller/xtouch-annotated.jpg"
bgcol="#000000"
bgsize="contain"
%}

{% comment %}

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

{% endcomment %}

## Generative AI System

- gestural predictions are made by a Mixture Density Recurrent Neural Network (implemented using ["Interactive Music Prediction System"---IMPS](https://creativeprediction.xyz/imps/))

- MDRNN: an extension of common LSTM/RNN designs to allow expressive predictions of multiple continuous variables.

- MDRNN specs: 2 32-unit LSTM layers, 9-dimensional mixture density layer (8 knobs + time)

- IMPS: A CLI Python program that provides MDRNN, data collection, training and interaction features.

- communicates with music software over OSC (Open Sound Control)

- in this case, MDRNN is configured for **"call-and-response"** interaction (or **"continuation"**)

{% include slides/background-image.html
id="xtouch"
image="assets/imps/mdn-motivation.png"
bgcol="#FFFFFF"
bgsize="contain"
%}

{% include slides/background-image.html
id="xtouch"
image="assets/performing-generative-controller/xtouch-imps-2.jpg"
bgcol="#000000"
bgsize="cover"
opacity=0.6
heading="Performances and Experiences"
%}

- deployed in performance since 2019

- so it works! and it's practical!

- but is it better than a **random walk generator?**

{% comment %}
{% include slides/background-image.html
id="xtouch"
image="assets/performing-generative-controller/xtouch-imps-1.jpg"
bgcol="#000000"
bgsize="contain"
%}
{% endcomment %}

{% include slides/background-video.html
id="impsxtouch"
video="assets/performing-generative-controller/xtouch-1-sine-tone-solo.mp4"
%}

{% include slides/background-video.html
id="impsxtouch"
video="assets/performing-generative-controller/xtouch-2-noise-switchover.mp4"
%}

{% include slides/background-video.html
id="impsxtouch"
video="assets/performing-generative-controller/xtouch-3-samples-independent.mp4"
%}

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

- good to for performer to have a different task to work on.

- also important to allow performer to "just listen"


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
heading="Thanks!"
%}

- IMPS on [GitHub](https://github.com/cpmpercussion/imps)
- creative ML: [creativeprediction.xyz](https://creativeprediction.xyz/)
- Twitter/Github: [@cpmpercussion](https://www.twitter.com/cpmpercussion)
- Homepage: [charlesmartin.com.au](https://charlesmartin.com.au)

{% comment %}
<!-- Neurofeedback 2020 video  -->
{% include slides/youtube.html id="WumtMGHAuV8" %}
<!-- https://youtu.be/WumtMGHAuV8 -->
{% endcomment %}
