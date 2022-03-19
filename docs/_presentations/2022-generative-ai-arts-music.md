---
layout: crepre-reveal
type: research
title: Generative AI and Music 
summary: 
center: true
width: 1280
height: 800
margin: 0.04
theme: assets/revealthemes/reveal/white.scss
---

<!-- crepre-dark.scss -->

{% include slides/research-title.html %}

{% comment %}
{% include slides/welcometocountry.html %}


1. What is generative AI?
2. What can generative AI do in music?
3. Where are all the instruments?
4. What is an authentic generative AI system in the arts?
5. Where is the data going to come from?

{% endcomment %}


{% include slides/background-image.html
id="genai"
image="assets/generative-ai/giving-a-talk-aiResized.png"
bgcol="#000000"
opacity="0.5" 
heading="Generative AI"
%}

{:.fragment}
...creates **new** content.

{:.fragment} 
Create an image about... 

{:.fragment}
["a person giving a seminar in a baroque hall in black and white."](https://hotpot.ai/s/art-maker/328/48E8nE1dvqugmNdEVjUrz0uwZmyE)


## What can AI do? {#cats-or-dogs}

![Cats or dogs]({% link assets/generative-ai/cats-or-dogs.png %})

## What can AI do? {#next-item}

![Sequences]({% link assets/generative-ai/sequences.png %})

## How does it work?

![perceptron]({% link assets/creml5js/perceptron.png %}){:style="float:center;width:40%;"}

## Fast forward 50 years.

![perceptron network]({% link assets/creml5js/perceptron-network.png %}){:style="float:center;width:60%;"}

## Understanding "context" {#recurrent-network} 

![]({% link assets/deep-dive-on-rnns/3-recurrent.png %}){:style="float:center;width:60%;"}

## Generating sequences {#predictingsequences}

![]({% link assets/predictive-models-in-interactive-music/sequence-learning.png %})

{% include slides/background-image.html
id="why"
image="assets/predictive-models-in-interactive-music/rohan-performance-2-performance.JPG"
bgcol="#000000"
opacity="0.5" 
heading="Generative AI for Making Music"
%}

{% include slides/background-image.html
id="voyager"
image="assets/intmusinstruments/GeorgeLewis-1999-credit-IanCummings.jpg"
heading="Voyager - George E Lewis (1986-)"
opacity=0.9
bgcol="#000000"
%}

{% include slides/background-image.html
id="wekinator"
image="assets/intmusinstruments/rebecca-fiebrink-wekinator.jpg"
heading="Wekinator - Rebecca Fiebrink (2009-)"
opacity=0.9
bgcol="#000000"
%}

{% include slides/background-image.html
id="magenta"
image="assets/intmusinstruments/magenta-demos.jpg"
bgcol="#FFFFFF"
opacity=0.9
bgsize="contain"
heading="Magenta Project - Google (2016-)"
%}

# where are all the *generative AI* musical instruments?

<!-- Gesture RNN -->
{% include slides/background-video.html 
id="gesture-rnn-title" 
video="assets/predictive-models-in-interactive-music/neural-ensemble-interaction.mp4" 
loop="true"
background="#000000"
opacity="1.0"
%}

{% include slides/background-video.html 
id="gesture-rnn-muted" 
video="assets/predictive-models-in-interactive-music/neural-ensemble-interaction.mp4" 
loop="true"
background="#000000"
opacity="1.0"
muted="true"
%}

<!-- RoboJam -->
{% include slides/background-video.html 
id="robojamtitle" 
video="assets/predictive-models-in-interactive-music/robojam-drum-response.mp4" 
loop="true"
background="#000000"
opacity="1.0"
bgsize="contain"
%}

{% include slides/background-video.html 
id="robojamperf" 
video="assets/predictive-models-in-interactive-music/robojam-one-loop.mp4" 
loop="true"
muted="true"
background="#000000"
%}

## Mixture Density Network {#mdn-model}

![]({% link assets/predictive-models-in-interactive-music/mdn-motivation.png %})

{% include slides/background-video.html 
id="imps-title" 
video="assets/predictive-models-in-interactive-music/imps-lightpad-loop.mp4" 
loop="true"
background="#000000"
opacity="0.7"
muted="true"
heading="IMPS System"
%}

<!-- IMPS -->
{% include slides/background-video.html
id="impslightpad"
video="assets/predictive-models-in-interactive-music/imps-lightpad-loop.mp4"
%}


{% include slides/background-video.html
id="impsxtouch"
video="assets/predictive-models-in-interactive-music/imps-xtouch-loop.mp4"
%}



<!-- EMPI -->
{% include slides/background-video.html
id="empititle"
video="assets/empi/empi-micro-demo.mp4"
loop="true"
opacity="0.7"
muted="true"
background="#000000"
heading="Embodied Musical Predictions"
%}

{% include slides/background-video.html
id="empihuman"
video="assets/empi/empi-short-demo.mp4"
%}

{% include slides/background-video.html
id="empisynth"
video="assets/empi/empi_synth.mp4"
%}

{% include slides/background-video.html
id="empinoise"
video="assets/empi/empi_noise.mp4"
%}


<!-- What is an authentic generative AI system in the arts? -->
{% include slides/background-image.html
id="authenticity"
image="assets/predictive-models-in-interactive-music/ipad-ensemble-2015.jpg"
opacity="0.5"
bgcol="#000000"
heading="What is an authentic generative AI system?"
%}

<!-- what's next -->
{% include slides/background-image.html
id="data"
image="assets/predictive-models-in-interactive-music/metatone-20170529-ifi.jpg"
opacity="0.4"
bgcol="#000000"
heading="Where will the data come from?"
%}

<!-- Gliss Dataset -->
{% include slides/background-video.html
id="impsglissrnn"
video="assets/predictive-models-in-interactive-music/glissrnn.mp4"
heading="Hand-Crafted Boutique Artisanal Datasets"
opacity="0.5" 
h2="true"
muted="true"
%}

{% include slides/background-video.html
id="impsglissrnn"
video="assets/predictive-models-in-interactive-music/glissrnn.mp4"
%}

{% include slides/background-video.html video="assets/creml5js/benediktewallace-dance.mp4" 
bgcol="black" 
bgsize="contain" 
muted="true"
%}


## Thanks! {#thanks}

![]({% link assets/charlesgif.gif %}){:style="width:25%;"} 

- IMPS on [GitHub](https://github.com/cpmpercussion/imps)
- creative ML: [creativeprediction.xyz](https://creativeprediction.xyz/)
- Twitter/Github: [@cpmpercussion](https://www.twitter.com/cpmpercussion)
- Homepage: [charlesmartin.com.au](https://charlesmartin.com.au)

<!-- Neurofeedback 2020 video  -->
{% include slides/youtube.html id="WumtMGHAuV8" %}
<!-- https://youtu.be/WumtMGHAuV8 -->


{% comment %}
<!-- Unused and spare -->
## Data Representations {#representations}

| **System**              | **Representation**        |
|-------------------------|---------------------------|
| MelodyRNN               | MIDI note-ish, 16th grid  |
| PerformanceRNN          | MIDI note-ish             |
| Music Transformer       | MIDI note-ish             |
| WaveNet / SampleRNN     | Digital Audio (lo res)    |
| IMPS System (me)        | control data + time delta |


## Where does data come from? {#datasets}

| **Dataset**             | **Source**                |
|-------------------------|---------------------------|
| MAESTRO                 | Piano Competition         |
| Lakh MIDI dataset       | MIDI scraped from the net |
| FolkRNN                 | Transcribed Folk Songs    |
| Groove MIDI Dataset     | Studio Drumset Recordings |


Gradient: AI adapts actions based on data for specified goal

{% endcomment %}

