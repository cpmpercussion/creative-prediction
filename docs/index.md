---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
---

This is the website for the Creative Prediction project -- a collection of walkthroughs and examples for applying machine learning to creative data in interactive creativity systems such as interactive artworks and musical instruments.

There's a [schedule]({{ site.baseurl }}/tutorials) available and a page about [setting up your computer]({{ site.baseurl }}/setup) if you want to run the code examples.

Here's a list of the current tutorials:

- **Generating Creative Sequences**
    - Generating Text with a CharRNN; inventing Star Trek episode titles. ([see Notebook 1](https://github.com/cpmpercussion/creative-prediction/blob/master/notebooks/1-star-trek-titles-RNN-basic.ipynb))
    - Advanced CharRNN techniques ([see Notebook 2](https://github.com/cpmpercussion/creative-prediction/blob/master/notebooks/2-star-trek-titles-advanced.ipynb))
    - Continuing musical sequences. ([see Notebook 3](https://github.com/cpmpercussion/creative-prediction/blob/master/notebooks/3-zeldic-musical-RNN.ipynb))
    - Combining multiple sequences in a CharRNN with "Gesture-RNN". ([see Notebook 4](https://github.com/cpmpercussion/creative-prediction/blob/master/notebooks/4-gesture-rnn.ipynb))
- **RNNs for continuous-valued data: Mixture Density Layers (MDNs)**
    - Introduction to Mixture Density Layers ([see Notebook 5](https://github.com/cpmpercussion/creative-prediction/blob/master/notebooks/5-mdn-sine-prediction.ipynb))
    - Predicting sketching: Kanji generation with a Mixture Density RNN. ([see Notebook 6](https://github.com/cpmpercussion/creative-prediction/blob/master/notebooks/6-MDN-RNN-kanji-generation.ipynb))
    - Predicting time and place - musical scribbles with RoboJam. ([see Notebook 7](https://github.com/cpmpercussion/creative-prediction/blob/master/notebooks/7-MDN-Robojam-touch-generation.ipynb))

Here's some (experimental) Colab Notebooks, so you can try out the examples without installing anything:

- [Star Trek Titles (basic)](https://colab.research.google.com/drive/1msBQCXTL8xdzN4JANCytDY12vYU-q12O)
- [Star Trek Titles (advanced)](https://colab.research.google.com/drive/1JhL5iIcZuOFYeyhpEtwKI9P8ZgY6OWWF)

If you want to (or already) use machine learning in a creative artistic setting; this is the place for you!

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
