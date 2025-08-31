---
layout: crepre-reveal
type: research
title: Creating Intelligent Musical Instruments
summary: 
center: true
width: 1280
height: 800
margin: 0.04
---

{% include slides/research-title.html %}

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

{:.id="musical-predictions"}
{% include slides/background-image.html
image="assets/predictive-models-in-interactive-music/musical-performance-predictions.jpg"
bgcol="#000000"
opacity="0.5" 
heading="making intelligent musical predictions"
%}


{% include slides/background-image.html
image="assets/predictive-models-in-interactive-music/sequence-learning.png"
bgsize="contain" heading="predicting sequences" %}

## Interacting with predictions

![]({% link assets/predictive-models-in-interactive-music/predictive-interaction-motivation.png %})

## History
    
- "Experiments in Musical Intelligence" (1987)
- Neural Networks for recognising musical gestures (1991)
- LSTM RNNs for generating music (2002)
- OMax Musical Agent (2006)
- Wekinator (2009)
- Google Magenta MelodyRNN (2016)
- Magenta Studio (Ableton Plugins) (2019)

{% comment %}
- Voyager
- Rebeccar Fiebrink
- etc
maybe split into multiple slides
{% endcomment %}


## Performance data is diverse {#perfdata}

![]({% link assets/predictive-models-in-interactive-music/imps-nimes-examples.jpg %})

| Music Systems                   | Data                               |
|---------------------------------|------------------------------------|
| Score / Notation                | Symbolic Music, Image              |
| Digital Instruments             | MIDI                               |
| Recording & Production          | Digital  Audio                     |
| New Musical Interfaces          | Gestural and Sensor Data           |
| Show Control                    | Video, Audio, Lighting, Control Signals |

## Interactive RNN Instrument

![Physical Intelligent Instrument]({% link assets/predictive-models-in-interactive-music/physical-intelligent-instrument2.png %}){:style="width:35%"}


- Generates endless music with a melody RNN.
- Switchable Dataset.
- Controls for sampling "temperature".


{% include slides/background-video.html 
id="rpiinsttitle" 
video="assets/predictive-models-in-interactive-music/physical-intelligent-instrument.mp4" 
loop="true"
background="#000000"
opacity="0.7"
heading="Physical Intelligent Instrument"
%}


{% include slides/background-video.html 
id="gesture-rnn-title" 
video="assets/predictive-models-in-interactive-music/neural-ensemble-interaction.mp4" 
loop="true"
background="#000000"
opacity="0.7"
heading="GestureRNN"
%}


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


## GestureRNN {#gesture-rnn-details}

![Gesture RNN]({% link assets/predictive-models-in-interactive-music/gesture-rnn.png %}){:style="width:80%"}

- Predicts 1 of 9 "gestures" for three AI performers.
- Trained on labelled data from 5 hours of quartet performances.
- Actual "sounds" are chunks of each gesture played back.

{% include slides/background-video.html 
id="robojamtitle" 
video="assets/predictive-models-in-interactive-music/robojam-drum-response.mp4" 
loop="true"
background="#000000"
opacity="0.7"
heading="RoboJam"
%}


## Robojam and Microjam {#robojamdetails}

![Robojam Interaction]({% link assets/predictive-models-in-interactive-music/robojam-interaction.png %}){:style="width:45%"}

- Predicts next touch location in screen (x, y, dt).
- Trained on ~1500 5s performances.
- Produces duet "responses" to the user.


## Mixture Density Network {#mdn-model}

![]({% link assets/predictive-models-in-interactive-music/mdn-motivation.png %})


{% include slides/background-video.html 
id="robojamperf" 
video="assets/predictive-models-in-interactive-music/robojam-one-loop.mp4" 
loop="true"
background="#000000"
%}


<!-- IMPS -->


{% include slides/background-video.html 
id="imps-title" 
video="assets/predictive-models-in-interactive-music/imps-lightpad-loop.mp4" 
loop="true"
background="#000000"
opacity="0.7"
muted="true"
heading="IMPS System"
%}


## IMPS System {#imps-details}

![]({% link assets/predictive-models-in-interactive-music/IMPS_connection_example.png %}){:style="width:80%;"}

- Opinionated Neural Network for interacting with NIMES.
- Automatically collects data and trains.
- "Wekinator" for deep learning?


## Three easy steps...

- **Collect some data:** IMPS logs interactions automatically to build up a dataset
- **Train an MDRNN:** IMPS includes good presets, no need to train for days/weeks
- **Perform!** IMPS includes three interaction modes, scope to extend in future!


{% include slides/background-video.html
id="impslightpad"
video="assets/predictive-models-in-interactive-music/imps-lightpad-loop.mp4"
%}


{% include slides/background-video.html
id="impsxtouch"
video="assets/predictive-models-in-interactive-music/imps-xtouch-loop.mp4"
%}


{% include slides/background-video.html
id="impsglissrnn"
video="assets/predictive-models-in-interactive-music/glissrnn.mp4"
%}


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

{% include slides/background-image.html
id="empihardware"
image="assets/empi/empi_open.jpg"
bgcol="#000000"
%}


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
id="empi2"
image="assets/empi/empi_2.jpg"
%}

{% include slides/background-image.html
id="empi3"
image="assets/empi/empi_3.jpg"
%}


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

{% include slides/background-image.html
id="whattodo"
image="assets/predictive-models-in-interactive-music/ipad-ensemble-2015.jpg"
opacity="0.5"
bgcol="#000000"
heading="Using Predictions to Make Music"
%}

Emulate or enhance ensemble experience

Engage in call-and-response improvisation

Model a performer's personal style

Modify/improve performance actions in place



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

{% include slides/background-image.html
id="evaluation"
image="assets/predictive-models-in-interactive-music/metatone-20170529-ifi.jpg"
opacity="0.5"
bgcol="#000000"
heading="Evaluating Predictive Instruments?"
%}

Does the ML model make good predictions?

Is this computationally practical?

Is this useful to musicians?

## Try out IMPS or EMPI!

![]({% link assets/predictive-models-in-interactive-music/imps-github.png %}){:style="float:right;width:40%;"} 

- Available on [GitHub](https://github.com/cpmpercussion/imps)
- <https://cpmpercussion.github.io/creative-prediction/imps>
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
