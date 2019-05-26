---
layout: page
title:  Making Predictive NIMEs with Neural Networks
permalink: /nime/
---

Our workshop has been accepted at NIME 2019! (n.b. work in progress! Come back just before [NIME 2019!](https://www.ufrgs.br/nime2019/))

### Workshop Description

In this workshop, we'll apply predictive machine learning models to creative data and use them in interactive music applications. We will show you how to create and train neural networks and how to use our new toolkit for interactive musical prediction (IMPS). Join us to define new predictive NIME prototypes and future research directions!

The first half of the workshop will focus on recurrent neural networks (RNNs), deep learning models that can be used to generate sequences and mixture density networks (MDNs) that can creatively predict multivariate data.  We will walk through the steps for training creative RNNs using live-coded demonstrations with Python code in Jupyter Notebooks.

The second half of the workshop will focus on the Interactive Musical Prediction System (IMP), an end-to-end solution for adding an MDRNN to a musical interface with communication over OSC. This system allows you to focus on defining new predictive  NIMEs that can "fill in" parts of a musical performance or to “dream” new performances and accompaniments.

### Session Plan

- 9:00 Meeting, Intro, and Python Setup
- 9:15 [Overview of Deep Learning and Creativity](#overview-dl-creativity)
- 9:45 [Generating Text and Music with RNNs (practical)](#generating-sequences)
- 10:30 (coffee break)
- 10:45 Hack: inventing Star Trek episode titles
- 11:30 [Using Mixture Density Networks (MDNs)](#mixture-density)
- 13:00 Lunch (90 minutes)
- 14:30 [Making Predictive Musical Interactions with the IMPS system](#making-predictive)
- 16:00 (coffee break)
- 16:15 [Future directions for creative neural networks at NIME and beyond](#future-directions)

<!-- Generating Text and Music with RNNs; inventing Star Trek episode titles. (30m talk, 30m hack).
Using Mixture Density Networks (MDNs) to predict NIME data with RoboJam (30m talk, 30m hack).
Making Predictive Musical Interactions with the IMPS system (30m talk, 90m hack).
Future directions for creative neural networks at NIME and beyond (60m discussion and brainstorming). -->


#### Overview of Deep Learning and Creativity {#overview-dl-creativity}

(30 minutes talk).

- sequence learning with RNNs and Long Short-Term Memory (LSTM) in Keras and Python

#### Generating Text and Music with RNNs {#generating-sequences}

(30m talk, 60m hack).

- Predicting sequences with LSTM networks
- Generating text character-by-character
- Generating music note-by-note
- _Demo_: Star Trek Episode Title Generator
- _Demo_: Zeldic Music Generator
- _Exercise_: Make your own text/melody generator

#### Using Mixture Density Networks (MDNs) to predict NIME data with RoboJam {#mixture-density}

(45m talk, 45m hack).

- Predicting **continuous** data from NIMEs
- Gaussian Mixture Models
- Mixture Density RNNs
- _Demo_: Kanji Generation
- _Exercise_: Making a RoboJam model with touchscreen data

#### Making Predictive Musical Interactions with the IMPS system  {#making-predictive}

![The IMPS system in use]({{ site.baseurl }}/assets/IMPS_connection_example.png)

(30m talk, 90m hack).

- The "Interactive Music Prediction System": IMPS
- Setup and interaction scheme
- _Demo_: IMPS with Lightpad block and Behringer Xtouch Mini
- _Exercise_: Set up IMPS with 3D prediction (x, y, t) with Processing and Pd

#### Future directions for creative neural networks at NIME and beyond {#future-directions}

Let's define the future of predictive NIMEs... _together_.

- What even is a predictive NIME?
- What NIMEs could benefit from prediction?
- What tools are needed?
- Who can help?
- What resources are necessary?
- What's going on with this "Creative AI" field anyway?

(60m discussion and brainstorming).

Here's a list of demonstration code for the session:

- **Generating Creative Sequences**
    - Generating Text with a CharRNN; inventing Star Trek episode titles. ([see Notebook 1](https://github.com/cpmpercussion/creative-prediction/blob/master/notebooks/1-star-trek-titles-RNN-basic.ipynb))
    - Advanced CharRNN techniques ([see Notebook 2](https://github.com/cpmpercussion/creative-prediction/blob/master/notebooks/2-star-trek-titles-advanced.ipynb))
    - Continuing musical sequences. ([see Notebook 3](https://github.com/cpmpercussion/creative-prediction/blob/master/notebooks/3-zeldic-musical-RNN.ipynb))
    - Combining multiple sequences in a CharRNN with "Gesture-RNN". ([see Notebook 4](https://github.com/cpmpercussion/creative-prediction/blob/master/notebooks/4-gesture-rnn.ipynb))
- **RNNs for continuous-valued data: Mixture Density Layers (MDNs)**
    - Probability Distributions ([see Jupyter Notebook](https://github.com/cpmpercussion/creative-prediction/blob/master/notebooks/mdn-talk-examples.ipynb))
        - comparing continuous and categorical probability distributions
        - modelling data with a normal distribution
        - modelling data with a mixture of normal distributions
    - Introduction to Mixture Density Layers ([see Notebook 5](https://github.com/cpmpercussion/creative-prediction/blob/master/notebooks/5-mdn-sine-prediction.ipynb))
    - Predicting sketching: Kanji generation with a Mixture Density RNN. ([see Notebook 6](https://github.com/cpmpercussion/creative-prediction/blob/master/notebooks/6-MDN-RNN-kanji-generation.ipynb))
    - Predicting time and place - musical scribbles with RoboJam. ([see Notebook 7](https://github.com/cpmpercussion/creative-prediction/blob/master/notebooks/7-MDN-Robojam-touch-generation.ipynb))

<!-- 
The [ALife schedule is now published!](http://2018.alife.org/schedule/) and this CREative PREdiction ("CREPRE") tutorial will occur on Monday 23 July in two sessions: 11:30am-12:45pm and 16:15pm-17:30pm. The sessions will cover different material, but feel free to come to either or both if you want! The list of topics is below. -->

<!-- - Session 1: Monday 23 July. 11:30am-12:45pm Conference Room Uranus
- **Introduction to Predictive Interaction (15 minutes)**
    - Overview of Deep Learning and Creativity.
    - What is a Recurrent Neural Network?
    - Sequence learning, classification, and training
    - Temporal and non-temporal models.
    - Forward models and bio-inspired prediction.
- **Generating Creative Sequences (60 minutes)**
    - RNNs and Long Short-Term Memory (LSTM) with Keras and Python.
    - Generating Text with a CharRNN; inventing Star Trek episode titles. ([see Notebook 1](https://github.com/cpmpercussion/creative-prediction/blob/master/notebooks/1-star-trek-titles-RNN-basic.ipynb))
    - Advanced CharRNN techniques ([see Notebook 2](https://github.com/cpmpercussion/creative-prediction/blob/master/notebooks/2-star-trek-titles-advanced.ipynb))
    - Continuing musical sequences. ([see Notebook 3](https://github.com/cpmpercussion/creative-prediction/blob/master/notebooks/3-zeldic-musical-RNN.ipynb))
    - Combining multiple sequences in a CharRNN with "Gesture-RNN". ([see Notebook 4](https://github.com/cpmpercussion/creative-prediction/blob/master/notebooks/4-gesture-rnn.ipynb))
- Session 2: Monday 23 July. 16:15pm-17:30pm Conference Room Uranus
- **Interacting with RNNs (15 minutes)**
    - Introduction to the Neural iPad Ensemble, and Robojam, two projects showing how RNNs can be used in interactive-creativity systems.
- **RNNs for continuous-valued data: Mixture Density Layers (MDNs) (45 minutes)**
    - Introduction to Mixture Density Layers ([see Notebook 5](https://github.com/cpmpercussion/creative-prediction/blob/master/notebooks/5-mdn-sine-prediction.ipynb))
    - Predicting sketching: Kanji generation with a Mixture Density RNN. ([see Notebook 6](https://github.com/cpmpercussion/creative-prediction/blob/master/notebooks/6-MDN-RNN-kanji-generation.ipynb))
    - Predicting time and place - musical scribbles with RoboJam. ([see Notebook 7](https://github.com/cpmpercussion/creative-prediction/blob/master/notebooks/7-MDN-Robojam-touch-generation.ipynb))
- Time for demonstration, interaction, and live-hacking with these systems. (15+ minutes)

TBA: Hopefully we can have a dinner/discussion meet up later on Monday 23/7 or later in the week! It would be great to keep a discussion about CrePre going! -->