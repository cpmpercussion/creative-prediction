---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
---

![]({{ site.baseurl }}/assets/neural-ipad-band-demo.jpg)

### Tutorial Description

The goal of this tutorial is to apply predictive machine learning models to creative data. The focus of the tutorial will be recurrent neural networks (RNNs), deep learning models that can be used to generate sequential and temporal data. RNNs can be applied to many kinds of creative data including text and music. They can learn the long-range structure from a corpus of data and "create" new sequences by predicting one element at a time. When embedded in a creative interface, they can be used for "predictive interaction" where a human collaborates with, influences, and is influenced by a generative neural network.

We will walk through the fundamental steps for training creative RNNs using live-coded demonstrations with Python code in Jupyter Notebooks. These steps are: collecting and cleaning data, building and training an RNN, and developing predictive interactions. We will also have live demonstrations and interactive live-hacking of our creative RNN systems!

You're welcome to bring a laptop with python to the tutorial and load up our [code examples](https://github.com/cpmpercussion/creative-prediction/tree/master/notebooks), or to follow along with us on the screen!

![]({{ site.baseurl }}/assets/predictive-interaction.png)

### Our Creative Prediction Systems

Our demonstrations will be motivated from examples from our own research in creativity support tools. We will show how streams of interaction data from a creative musical interface can be modelled with deep recurrent neural networks (RNNs). From this data, we can predict users' future interactions, or the potential interactions of other users. This enables us to "fill in" parts of a iPad-based musical ensemble when other users are not available, or to continue a user's composition with new musical layers. 

This session will be interactive. The participants can download [demonstration code](https://github.com/cpmpercussion/creative-prediction/tree/master/notebooks) to run on their laptops as we go. Instructions for running this code is available below.

In the second half of the tutorial, we will introduce our creative RNN systems, including RoboJam: a agent for responding to smartphone musical performances, the Neural iPad Ensemble, and EMPI: an Embodied Musical Predictive Interface---a physical computing interface to a creative RNN. The participants will be able to experiment with our live systems and investigate the RNN code during the session.

We think that every participant will come out of the tutorial with a custom RNN trained on text or musical data, as well as inspiration to make new creative neural network systems!

![]({{ site.baseurl }}/assets/fig-robojam-interaction.png)

### Session Plan

The [ALife schedule is now published!](http://2018.alife.org/schedule/) and this CREative PREdiction ("CREPRE") tutorial will occur on Monday 23 July in two sessions: 11:30am-12:45pm and 16:15pm-17:30pm. The sessions will cover different material, but feel free to come to either or both if you want! The list of topics is below.

- Session 1: Monday 23 July. 11:30am-12:45pm Conference Room Uranus
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
    - Combining multiple sequences in a CharRNN with "Gesture-RNN". ([see Notebook 4])
- Session 2: Monday 23 July. 16:15pm-17:30pm Conference Room Uranus
- **Interacting with RNNs (15 minutes)**
    - Introduction to the Neural iPad Ensemble, and Robojam, two projects showing how RNNs can be used in interactive-creativity systems.
- **RNNs for continuous-valued data: Mixture Density Layers (MDNs) (45 minutes)**
    - Introduction to Mixture Density Layers (see Notebook 5)
    - Predicting sketching: Kanji generation with a Mixture Density RNN. (see Notebook 6)
    - Predicting time and place - musical scribbles with RoboJam. (see Notebook 7)
- Time for demonstration, interaction, and live-hacking with these systems. (15+ minutes)


