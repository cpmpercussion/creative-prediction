---
layout: crepre-reveal
title: Recent Progress in Intelligent Musical Instruments
summary: 
center: true
width: 1280
height: 800
margin: 0.04
theme: assets/revealthemes/reveal/white.scss
---

<!-- crepre-dark.scss -->

{% include slides/research-title.html %}

{% include slides/welcometocountry.html %}


{% include slides/background-image.html
id="vision"
image="assets/predictive-models-in-interactive-music/rohan-performance-2-performance.JPG"
bgcol="#000000"
opacity="0.5" 
heading="vision"
%}

_Intelligent Musical Instruments_ become a normal part of musical
performance and production.


{% include slides/background-image.html
id="why"
image="assets/predictive-models-in-interactive-music/2015-11-28-Electrofringe-Workshop-2.jpg"
bgcol="#000000"
opacity="0.5" 
heading="why?"
%}

Assist professional musicians & composers

Engage novice musicians & students

Reveal _creative interaction_ with intelligent systems

Create _new kinds of music!_


{% include slides/background-image.html
id="musical-predictions"
image="assets/predictive-models-in-interactive-music/musical-performance-predictions.jpg"
bgcol="#000000"
opacity="0.5" 
heading="making intelligent musical predictions"
%}


# History


{% comment%}
## History

- George E. Lewis - _Voyager_ (1986-1988)
- David Cope - "Experiments in Musical Intelligence" (1987)
- Neural Networks for recognising musical gestures (1991)
- LSTM RNNs for generating music (2002)
- OMax Musical Agent (2006)
- Wekinator (2009)
- Google Magenta MelodyRNN (2016)
- Magenta Studio (Ableton Plugins) (2019)
{% endcomment %}


{% include slides/background-image.html
id="digitalmusicalinstruments"
image="assets/intmusinstruments/don-banks-ANU.jpg"
heading="Digital Musical Instruments (1979ish-)"
opacity=0.9
bgcol="#000000"
%}

{% include slides/background-image.html
id="voyager"
image="assets/intmusinstruments/GeorgeLewis-1999-credit-IanCummings.jpg"
heading="Voyager - George E Lewis (1986-)"
opacity=0.9
bgcol="#000000"
%}

{% include slides/background-image.html
id="continuator"
image="assets/intmusinstruments/continuator-francoispachet.jpg"
heading="Continuator - François Pachet (2001)"
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


# where are all the intelligent musical instruments?

<!-- here's where I come in -->

{% include slides/background-image.html
id="venn-diagram"
image="assets/charlesmartin-background.jpg"
bgcol="#FFFFFF"
bgsize="contain"
%}

## Performance data is diverse {#perfdata}

![]({% link assets/predictive-models-in-interactive-music/imps-nimes-examples.jpg %})

| **Music Systems**               | **Data**                           |
|---------------------------------|------------------------------------|
| Score / Notation                | Symbolic Music, Image              |
| Digital Instruments             | MIDI                               |
| Recording & Production          | Digital  Audio                     |
| New Musical Interfaces          | Gestural and Sensor Data           |
| Show Control                    | Video, Audio, Lighting, Control Signals |

## Predicting sequences {#predictingsequences}

![]({% link assets/predictive-models-in-interactive-music/sequence-learning.png %})


## Interacting with predictions

![]({% link assets/predictive-models-in-interactive-music/predictive-interaction-motivation.png %})



# creating an orchestra of intelligent instruments... {#orchestra}


<!-- Interactive RNN Instrument -->


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


<!-- Gesture RNN -->


{% include slides/background-video.html 
id="gesture-rnn-title" 
video="assets/predictive-models-in-interactive-music/neural-ensemble-interaction.mp4" 
loop="true"
background="#000000"
opacity="0.7"
heading="GestureRNN"
%}


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
bgsize="contain"
%}


{% comment %}

{% include slides/background-image.html
id="metatoneclassifier"
image="assets/predictive-models-in-interactive-music/MetatoneClassifier-SystemDiagram.jpg"
%}

<!-- Laptop Ensemble NIMEs -->

{% include slides/background-image.html
id="rohanensemble"
image="assets/predictive-models-in-interactive-music/rohan-performance-2-performance.JPG"
heading="Intelligent Laptop Ensembles.."
bgcol="#000000"
%}

{% endcomment %}

<!-- Robojam and Microjam -->


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


## Experiment: Is this _practical_? {#imps-practical}

- Is it practical for real-time use?
- How do the MDRNN parameters affect time per prediction?
- What are "good defaults" for training parameters?
- Do you need a powerful/expensive computer?


## Test Systems {#imps-testsystems}

![Test computers]({% link assets/imps/imps-test-computers.jpg %})


## Results: Time per prediction {#imps-timeperpredunits}

![Time per prediction vs LSTM units]({% link assets/imps/prediction_time_against_units.png %})

Time per prediction (ms) with different sizes of LSTM layers.


## Results: Time per prediction {#imps-timeperpreddim}

![Time per prediction vs MDN dimension]({% link assets/imps/prediction_time_against_dimension_64units.png %})

Time per prediction (ms) with different MDN output dimensions. (64
LSTM units)


## Results: Training Error vs Validation Set Error {#imps-training-small}

![]({% link assets/imps/training_loss_12K_lightpad_model.png %})

12K sample dataset (15 minutes of performance)

Takeaway: **Smallest model best for small datasets.** Don't bother training for
too long.


## Results: Training Error vs Validation Set Error {#imps-training-medium}

![]({% link assets/imps/training_loss_100K_lightpad_model.png %})

100K sample dataset (120 minutes of performance)

Takeaway: **64- and 128-unit model still best!**


## Results: Exploring Generation {#imps-generation}

![]({% link assets/imps/robojam_temperature_sampling_0.png %}){:style="width:50%"}

Takeaway: Make Gaussians **less diverse**, make categorical **more diverse**.


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

Takeaway: for human and synth, more range of performance lengths with motor on than off


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
id="whattodo"
image="assets/predictive-models-in-interactive-music/ipad-ensemble-2015.jpg"
opacity="0.5"
bgcol="#000000"
heading="How can intelligent instruments help us make music?"
%}

Emulate or enhance ensemble experience

Engage in call-and-response improvisation

Model a performer's personal style

Modify/improve performance actions in place

{% include slides/background-image.html
id="evaluation"
image="assets/predictive-models-in-interactive-music/metatone-20170529-ifi.jpg"
opacity="0.4"
bgcol="#000000"
heading="Research questions..."
%}

Are ML models practical for musical prediction?

Are intelligent instruments useful to musicians?

What happens when musicians and instrument _co-adapt_?

Can a musical practice be represented as a dataset?

What does a intelligent instrument **album / concert** sound like?

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
<!-- Unused and spare -->


{% include slides/background-image.html
id="creating-more"
image="assets/predictive-models-in-interactive-music/rohan-performance-2-performance.JPG"
heading="Orchestra of intelligent instruments?"
bgcol="#000000"
opacity="0.4"
%}




## what to do with predictions?

![]({% link assets/predictive-models-in-interactive-music/predictive-interactions.png %}){:style="width:50%;float:right;"}

1. Call-and-Response: Generate responses/harmonies/layers
2. Continuate: Continue performer's style
2. Filter: Immediately predict next move
3. Duet: Two interdependent processes
4. Representing predictions physically
5. Using same/different sound for predictions


# issues {#issues}


## technologies {#technologies}

- LSTM-RNN still has some life
- MDN-RNNs hard to train, learned a lot of lessons
- still looking for easy-to-apply digital audio model
- sequence learning less popular than images
- sequence-to-sequence experiments haven't worked out as well


## data {#dataavailability}

- Small data sources possible (desirable?)
- Data curation not yet explored 
- Web-scrape MIDI databases not great
- Can a dataset represent a practice?


## how to represent predictions? {#howtoreppreds}

- same sound as performer?
- "AI" musician?
- extra sound/fx from instrument?
- physical motions?
- visual representations?


## answers? {#answers}

  - my answer is to use the IMPS system
  - accelerates data collection and training
  - start to explore how dataset and practice might be interellated
  - still work to be done on interaction: why do we need predictions anyway?


## Data Representations {#representations}

| **System**              | **Representation**        |
|-------------------------|---------------------------|
| MelodyRNN               | MIDI note-ish, 16th grid  |
| PerformanceRNN          | MIDI note-ish             |
| Music Transformer       | MIDI note-ish             |
| WaveNet / SampleRNN     | Digital Audio (lo res)    |
| IMPS System (me)        | control data + time delta |



## training {#training-in-general}

![]({% link assets/predictive-models-in-interactive-music/colab.png %}){:style="float:right;width:40%;"}

- tends to scale with dataset size
- GPU still 10x faster (use Colab?)
- Small datasets... fast training?
- Difficult to know good training parameters.


## Where does data come from? {#datasets}

| **Dataset**             | **Source**                |
|-------------------------|---------------------------|
| MAESTRO                 | Piano Competition         |
| Lakh MIDI dataset       | MIDI scraped from the net |
| FolkRNN                 | Transcribed Folk Songs    |
| Groove MIDI Dataset     | Studio Drumset Recordings |


{% endcomment %}

