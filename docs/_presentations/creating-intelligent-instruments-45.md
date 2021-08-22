---
layout: reveal
title: Creating Intelligent Instruments with Machine Learning
center: true
width: 1280
height: 800
margin: 0.04
theme: assets/revealthemes/crepre.scss
---

{% include slides/title.html %}

{% comment %}
## Creating Intelligent Instruments with Machine Learning

Charles P Martin

ANU School of Computing

web: [charlesmartin.com.au](https://charlesmartin.com.au)   twitter/github: @cpmpercussion

![]({% link assets/predictive-models-in-interactive-music/anu-logo.png
%}) <!-- .element: width="20%" -->
{% endcomment %}


{% include slides/background-image.html
image="/assets/canberra1.jpg"
heading="Ngunnawal & Ngambri & Ngarigu Country"
%}


{:.id="vision"}
{% include slides/background-image.html
image="assets/predictive-models-in-interactive-music/rohan-performance-2-performance.JPG"
bgcol="#000000"
opacity="0.5" 
heading="vision"
%}

_Intelligent Musical Instruments_ become a normal part of musical
performance and production.

{:.id="why"}
{% include slides/background-image.html
image="assets/predictive-models-in-interactive-music/2015-11-28-Electrofringe-Workshop-2.jpg"
bgcol="#000000"
opacity="0.5" 
heading="why?"
%}

Assist professional musicians & composers

Engage novice musicians & students

Create _new kinds of music!_

{:.id="what"}
{% include slides/background-image.html
image="assets/predictive-models-in-interactive-music/musical-performance-predictions.jpg"
bgcol="#000000"
opacity="0.5" 
heading="making intelligent musical predictions"
%}


{% include slides/background-image.html
image="assets/predictive-models-in-interactive-music/sequence-learning.png"
bgsize="contain" heading="predicting sequences" %}

## interacting with predictions

![]({% link assets/predictive-models-in-interactive-music/predictive-interaction-motivation.png %})


<!-- History/Background Section -->
<!-- TODO: make a one slide background overview -->

<!-- <section data-markdown id="interaction">
<textarea data-template>    
## history
    
- "Experiments in Musical Intelligence" (1987)
- Neural Networks for recognising musical gestures (1991)
- LSTM RNNs for generating music (2002)
- OMax Musical Agent (2006)
- Wekinator (2009)
- Google Magenta MelodyRNN (2016)
- Magenta Studio (Ableton Plugins) (2019)
<aside class="notes">
</aside>
</textarea>
</section> -->

<!-- <section data-markdown id="why"> -->
<!-- <textarea data-template> -->

<!-- ### Performance data is diverse -->

<!-- ![]({% link
         assets/predictive-models-in-interactive-music/imps-nimes-examples.jpg
         %}) -->

<!-- | "Creative Deep Learning"                   | Performing Systems                            | -->
<!-- |--------------------------------------------|-----------------------------------------------| -->
<!-- | Focus on MIDI                              | Variety of data                               | -->
<!-- | Focus on digital audio                     | Focus on performer gestures                   | -->
<!-- | Focus on final artefact                    | Focus on interaction                          | -->
<!-- | Rhythm on 16th note grid                   | Complex or no rhythm                          | -->
<!-- | Categorical data                           | Continuous data more interesting              | -->

<!-- <aside class="notes"> -->
<!-- </aside> -->
<!-- </textarea> -->
<!-- </section> -->



## Performance data is diverse {#perfdata}

![]({% link
         assets/predictive-models-in-interactive-music/imps-nimes-examples.jpg
         %})

| Music Systems                   | Data                               |
|---------------------------------|------------------------------------|
| Score / Notation                | Symbolic Music, Image              |
| Digital Instruments             | MIDI                               |
| Recording & Production          | Digital  Audio                     |
| New Musical Interfaces          | Gestural and Sensor Data           |
| Show Control                    | Video, Audio, Lighting, Control Signals |

## Interactive RNN Instrument

![Physical Intelligent
Instrument]({% link
         assets/predictive-models-in-interactive-music/physical-intelligent-instrument2.png
%}) <!-- .element: width="35%" -->

- Generates endless music with a melody RNN.
- Switchable Dataset.
- Controls for sampling "temperature".

<section id="rpiinsttitle"
         data-background-video="{% link
         assets/predictive-models-in-interactive-music/physical-intelligent-instrument.mp4
         %}"
         data-background-video-loop
         data-background-opacity=0.7
         data-background="#000000">
  <h1>Physical Intelligent Instrument</h1>
</section>



<!-- <section id="models">
  <h2>Machine Learning Models</h2>

  <img src="{% link
         assets/predictive-models-in-interactive-music/mdn-motivation.png
         %}" />

  <ul>
    <li>Deep learning sequence generation models (e.g., LSTM RNN)</li>
    <li>Mixture Density Recurrent Neural Networks</li>
  </ul>
</section> -->

<!-- TODO: add something about Benedikte PSCA -->
<!-- TODO: add something about Sichao and Vikram projects -->
<!-- TODO: distill a "what are predictions used for" in each example -->

<section id="gesture-rnn-title"
  id="whatisthis"
  data-background-video="{% link
         assets/predictive-models-in-interactive-music/neural-ensemble-interaction.mp4
  %}"
  data-background-video-loop
  data-background-opacity=0.7
  data-background="#000000">
<h1>GestureRNN</h1>
</section>

  <!-- data-background-video-muted -->

## GestureRNN {#gesture-rnn-details}

![Gesture RNN]({% link
         assets/predictive-models-in-interactive-music/gesture-rnn.png
         %}) <!-- .element: width="80%" -->

    - Predicts 1 of 9 "gestures" for three AI performers.
    - Trained on labelled data from 5 hours of quartet performances.
    - Actual "sounds" are chunks of each gesture played back.
    

<section
  id="robojamtitle"
  data-background-video="{% link
         assets/predictive-models-in-interactive-music/robojam-drum-response.mp4
  %}"
  data-background-video-loop
  data-background-opacity=0.7
  data-background="#000000">
  <h1>RoboJam</h1>
</section>

  <!-- data-background-video-muted -->

## Robojam and Microjam {#robojamdetails}

![Robojam Interaction]({% link assets/predictive-models-in-interactive-music/robojam-interaction.png
         %}) <!-- .element: width="45%" -->

- Predicts next touch location in screen (x, y, dt).
- Trained on ~1500 5s performances.
- Produces duet "responses" to the user.

## Mixture Density Network {#mdn-model}

![]({% link assets/predictive-models-in-interactive-music/mdn-motivation.png %})


<section
  id="robojamperf"
  data-background-video="{% link
         assets/predictive-models-in-interactive-music/robojam-one-loop.mp4
  %}"
  data-background-video-loop
  data-background="#000000">
</section>

<!-- IMPS -->

<section
  id="imps"
  data-background-video="{% link
         assets/predictive-models-in-interactive-music/imps-lightpad-loop.mp4
  %}"
  data-background-video-loop
  data-background-opacity=0.7
  data-background-video-muted
  data-background="#000000">
  <h1>IMPS system</h1>
</section>

## IMPS System {#imps-details}

  ![]({% link
         assets/predictive-models-in-interactive-music/IMPS_connection_example.png
         %}) <!-- .element: width="80%" -->

  - Opinionated Neural Network for interacting with NIMES.
  - Automatically collects data and trains.
  - "Wekinator" for deep learning?
  
## Three easy steps...

- <b>Collect some data:</b> IMPS logs interactions automatically to build up a dataset
- <b>Train an MDRNN:</b> IMPS includes good presets, no need to train for days/weeks
- <b>Perform!</b> IMPS includes three interaction modes, scope to extend in future!

<section
  id="impslightpad"
  data-background-video="{% link
         assets/predictive-models-in-interactive-music/imps-lightpad-loop.mp4
  %}"
  data-background-video-loop
  data-background="#000000">
</section>

<section data-markdown id="impsxtouch"
         data-background-video="{% link
         assets/predictive-models-in-interactive-music/imps-xtouch-loop.mp4
         %}"
         data-background-video-loop
         data-background="#000000">
</section>

<section data-markdown id="impsglissrnn"
         data-background-video="{% link
         assets/predictive-models-in-interactive-music/glissrnn.mp4 %}"
         data-background-video-loop
         data-background="#000000">
</section>

<!-- EMPI -->

<section id="slide"
  id="empititle"
  data-background-video="{% link
         assets/predictive-models-in-interactive-music/empi-micro-demo.mp4
  %}"
         data-background-video-loop
         data-background-opacity=0.7
         data-background-video-muted
         data-background="#000000">
<h1> Embodied Predictive Musical Instrument (EMPI)</h1>
</section>

## Embodied Predictive Musical Instrument (EMPI) {#empidetails}

![Physical Intelligent
Instrument]({% link
         assets/predictive-models-in-interactive-music/EMPI-system-diagram.jpg
%}) <!-- .element: width="35%" -->

- Predicts next movement and time, represents physically.
- Experiments with interaction mappings; mainly focussed on call-response
- Weird and confusing/fun?
<aside class="notes">
  - neural networks can run on a raspberry pi.
  - physical output really draws audiences in
  - difficult to work out how to extend interaction patterns here
  - this instrument seems to lend itself to synthetic or one-track
  datasets (need way to switch between them)_
</aside>


<section id="empihardware"
         data-background-image="{% link assets/predictive-models-in-interactive-music/empi_open.jpg %}"
         data-background="#000000">
</section>

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

<section id="empiproofofconcept"
         data-background="{% link assets/predictive-models-in-interactive-music/empi_00.jpg %}"
         data-background="#000000">
</section>

<section id="empi0"
         data-background-size="contain"
         data-background="{% link assets/predictive-models-in-interactive-music/empi_0.jpg %}"
         data-background="#000000">
</section>

<section id="empi1"
         data-background="{% link assets/predictive-models-in-interactive-music/empi_1.jpg %}"
         data-background="#000000">
</section>

<section id="empicases"
         data-background-size="contain"
         data-background="{% link assets/predictive-models-in-interactive-music/empi_designs.jpg %}"
         data-background="#000000">
</section>


<section id="empi2"
         data-background="{% link assets/predictive-models-in-interactive-music/empi_2.jpg %}"
         data-background="#000000">
</section>

<section id="empi3"
         data-background="{% link assets/predictive-models-in-interactive-music/empi_3.jpg %}"
         data-background="#000000">
</section>


<!--
<section
  id="imps"
  data-background-video="{% link
         assets/predictive-models-in-interactive-music/training-capture.mp4
  %}"
  data-background-video-loop
  data-background-opacity=0.7
  data-background="#000000">
  <h1>Training EMPI</h1>
</section>
-->

<section data-markdown>
  <textarea data-template>
    ## Training Data
    ![Human Data]({% link assets/predictive-models-in-interactive-music/training_human.png %})
    ![Sine Data]({% link assets/predictive-models-in-interactive-music/training_sine.png %})  <!-- .element: width="25%" -->
    ![Square Data]({% link assets/predictive-models-in-interactive-music/training_square.png %})  <!-- .element: width="25%" -->
    ![Saw Data]({% link assets/predictive-models-in-interactive-music/training_saw.png %})  <!-- .element: width="25%" -->
    ![Noise Data]({% link assets/predictive-models-in-interactive-music/training_noise.png %})  <!-- .element: width="25%" -->
  </textarea>
</section>

<section data-markdown>
  <textarea data-template>
    ## Generated Data
    ![Human Generation]({% link assets/predictive-models-in-interactive-music/generation_human_4500points.png %}) <!-- .element: width="50%" -->
    ![Synth Generation]({% link assets/predictive-models-in-interactive-music/generation_synth.png %}) <!-- .element: width="50%" -->
    ![Noise Generation]({% link assets/predictive-models-in-interactive-music/generation_noise.png %}) <!-- .element: width="50%" -->
  </textarea>
</section>

<section data-markdown id="empihuman"
         data-background-video="{% link
         assets/predictive-models-in-interactive-music/empi-short-demo.mp4
         %}"
         data-background="#000000">
</section>

<section data-markdown id="empinoise"
         data-background-video="{% link
         assets/predictive-models-in-interactive-music/empi_synth.mp4
         %}"
         data-background="#000000">
</section>

<section data-markdown id="empinoise"
         data-background-video="{% link
         assets/predictive-models-in-interactive-music/empi_noise.mp4
         %}"
         data-background="#000000">
</section>

<!-- <section data-markdown id="rohanensemble" -->
<!--          data-background-image="{% link
         assets/predictive-models-in-interactive-music/rohan-performance-2-performance.JPG
         %}" -->
<!--          data-background="#000000"> -->
<!-- </section> -->

<!-- <section data-markdown id="metatoneclassifier" -->
<!--          data-background-image="{% link
         assets/predictive-models-in-interactive-music/MetatoneClassifier-SystemDiagram.jpg
         %}" -->
<!--          data-background="#000000"> -->
<!-- </section> -->

<section id="whattodo"
         data-background-image="{% link
         assets/predictive-models-in-interactive-music/ipad-ensemble-2015.jpg
         %}"
         data-background-opacity=0.5
         data-background="#000000">
<h2>Using Predictions to Make Music</h2>
<ul>
  <li>Emulate or enhance ensemble experience</li>
  <li>Engage in call-and-response improvisation</li>
  <li>Model a performer's personal style</li>
  <li>Modify/improve performance actions in place</li>
</ul>
</section>
<!-- <textarea data-template> -->
<!-- ## what to do with predictions? -->

<!-- <\!-- ![]({% link
         assets/predictive-models-in-interactive-music/predictive-interactions.png
         %}) <\\!-- .element: width="50%" -\\-> -\-> -->

<!-- 1. Call-and-Response: Generate responses/harmonies/layers <\!-- .element: class="fragment" -\-> -->
<!-- 2. Continuate: Continue performer's style <\!-- .element: class="fragment" -\-> -->
<!-- 2. Filter: Immediately predict next move <\!-- .element: class="fragment" -\-> -->
<!-- 3. Duet: Two interdependent processes <\!-- .element: class="fragment" -\-> -->
<!-- 4. Representing predictions physically <\!-- .element: class="fragment" -\-> -->
<!-- 5. Using same/different sound for predictions <\!-- .element: class="fragment" -\-> -->

<!-- <aside class="notes"> -->
<!-- We have predictions but how do we use them in an interactive loop? -->
<!-- (We're already playing the NIME). -->
<!-- </aside> -->
<!-- </textarea> -->
<!-- </section> -->

<section id="evaluation"
         data-background-image="{% link
         assets/predictive-models-in-interactive-music/metatone-20170529-ifi.jpg
         %}"
         data-background-opacity=0.5
         data-background="#000000"> 
  <h2>Evaluating Predictive Instruments?</h2>
  <ul>
    <li>Does the ML model make good predictions?</li>
    <li>Is this computationally practical?</li>
    <li>Is this useful to musicians?</li>
  </ul>
</section>

## Try out IMPS or EMPI!

{: style="float:right;width:40%;"}
![]({% link
         assets/predictive-models-in-interactive-music/imps-github.png
         %}) 

- Available on [GitHub](https://github.com/cpmpercussion/imps)
- [creativeprediction.xyz/imps](https://creativeprediction.xyz/imps)
- Try with your digital musical instruments!
- Hack if you want!
- Add an issue with problems/results!
- Twitter/Github: [@cpmpercussion](https://www.twitter.com/cpmpercussion)
- Homepage: [charlesmartin.com.au](https://charlesmartin.com.au)


{% comment %}

<!-- 
Other links:
https://magenta.tensorflow.org/gansynth
-->

<!-- <section id="issuessection"> -->
<!--   <h1>issues</h1> -->
<!--   <aside class="notes"> -->
<!-- </aside> -->
<!-- </section> -->


<!-- <section data-markdown id="technologies"> -->
<!-- <textarea data-template> -->
<!-- ## technologies -->

<!-- - LSTM-RNN still has some life <\!-- .element: class="fragment" -\-> -->
<!-- - MDN-RNNs hard to train, learned a lot of lessons <\!-- .element: class="fragment" -\-> -->
<!-- - still looking for easy-to-apply digital audio model <\!-- .element: class="fragment" -\-> -->
<!-- - sequence learning less popular than images <\!-- .element: class="fragment" -\-> -->
<!-- - sequence-to-sequence experiments haven't worked out as well <\!-- .element: class="fragment" -\-> -->

<!-- <aside class="notes"> -->
<!-- </aside> -->
<!-- </textarea> -->
<!-- </section> -->

<!-- <section data-markdown id="slide"> -->
<!-- <textarea data-template> -->
<!--   ## data -->

<!--   - Small data sources possible (desirable?) <\!-- .element: class="fragment" -\-> -->
<!--   - Data curation not yet explored <\!-- .element: class="fragment" -\-> -->
<!--   - Web-scrape MIDI databases not great <\!-- .element: class="fragment" -\-> -->
<!--   - Can a dataset represent a practice? <\!-- .element: class="fragment" -\-> -->
<!-- <aside class="notes"> -->
<!-- </aside> -->
<!-- </textarea> -->
<!-- </section> -->

<!-- <section data-markdown id="howtorepresentpred"> -->
<!-- <textarea data-template> -->
<!-- ## how to represent predictions? -->

<!-- - same sound as performer? <\!-- .element: class="fragment" -\-> -->
<!-- - "AI" musician? <\!-- .element: class="fragment" -\-> -->
<!-- - extra sound/fx from instrument? <\!-- .element: class="fragment" -\-> -->
<!-- - physical motions? <\!-- .element: class="fragment" -\-> -->
<!-- - visual representations? <\!-- .element: class="fragment" -\-> -->
<!-- </textarea> -->
<!-- </section> -->

<!-- <section data-markdown id="answers"> -->
<!-- <textarea data-template> -->
<!--   ## answers? -->

<!--   - my answer is to use the IMPS system <\!-- .element: class="fragment" -\-> -->
<!--   - accelerates data collection and training <\!-- .element: class="fragment" -\-> -->
<!--   - start to explore how dataset and practice might be interellated <\!-- .element: class="fragment" -\-> -->
<!--   - still work to be done on interaction: why do we need predictions anyway? <\!-- .element: class="fragment" -\-> -->

<!-- </textarea> -->
<!-- </section> -->

<!-- <section id="impseg"> -- -->
<!--   <h2>IMPS: Interactive Music Prediction System</h2> -- -->
<!--   <img src="{% link -->
<!--          assets/predictive-models-in-interactive-music/imps-github.png -->
<!--             %}" width="40%"><br /> --   -->
<!--   <a href="https://github.com/cpmpercussion/imps">github.com/cpmpercussion/imps</a> -- -->
<!-- </section> -->

<!-- <section data-markdown id="representation"> -->
<!-- <textarea data-template> -->

<!-- ### Data Representations -->

<!-- | **System**              | **Representation**        | -->
<!-- |-------------------------|---------------------------| -->
<!-- | MelodyRNN               | MIDI note-ish, 16th grid  | -->
<!-- | PerformanceRNN          | MIDI note-ish             | -->
<!-- | Music Transformer       | MIDI note-ish             |  -->
<!-- | WaveNet / SampleRNN     | Digital Audio (lo res)    | -->
<!-- | IMPS System (me)        | control data + time delta | -->
  
<!-- <aside class="notes"> -->
<!--   AB mentioned to me. "notes are easy, rhythm is hard" -->
<!-- </aside> -->
<!-- </textarea> -->
  <!-- </section> -->

<!-- <section data-markdown id="training"> -->
<!-- <textarea data-template> -->
<!--   ## training -->

<!--   - tends to scale with dataset size <\!-- .element: class="fragment" -\-> -->
<!--   - GPU still 10x faster (use Colab?) <\!-- .element: class="fragment" -\-> -->
<!--   - Small datasets... fast training? <\!-- .element: class="fragment" -\-> -->
<!--   - Difficult to know good training parameters.  <\!-- .element: class="fragment" -\-> -->
  
<!--   <img src="{% link
         assets/predictive-models-in-interactive-music/colab.png %}" style="float:right;width:40%;"> -->
  
<!--   <aside class="notes"> -->
<!--   </aside> -->
<!--   </textarea> -->
<!-- </section> -->

<!-- <section data-markdown id="representation"> -->
<!-- <textarea data-template> -->

<!-- ### Where does data come from? -->

<!-- | **Dataset**             | **Source**                | -->
<!-- |-------------------------|---------------------------| -->
<!-- | MAESTRO                 | Piano Competition         | -->
<!-- | Lakh MIDI dataset       | MIDI scraped from the net | -->
<!-- | FolkRNN                 | Transcribed Folk Songs    | -->
<!-- | Groove MIDI Dataset     | Studio Drumset Recordings | -->
  
<!-- <aside class="notes"> -->
<!--   AB mentioned to me. "notes are easy, rhythm is hard" -->
<!-- </aside> -->
<!-- </textarea> -->
  <!-- </section> -->

<section data-markdown>
<textarea data-template>
# Is this even _practical_?

# Is this even _useful_?
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

![Time per prediction vs LSTM units]({{site.baseurl}}/assets/imps/prediction_time_against_units.png) <!-- .element: width="75%" -->

Time per prediction (ms) with different sizes of LSTM layers.
</textarea>
</section>


<section data-markdown>
<textarea data-template>
## Results: Time per prediction

![Time per prediction vs MDN dimension]({% link assets/imps/prediction_time_against_dimension_64units.png %}) <!-- .element: width="75%" -->

Time per prediction (ms) with different MDN output dimensions. (64
LSTM units)
</textarea>
</section>


{% endcomment %}
