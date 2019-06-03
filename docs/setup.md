---
layout: page
title: Setup
permalink: /setup/
---

This page will show you how to set up your computer to follow along with the examples in the CrePre workshop. 

All of our code examples are provided as [Python 3](https://www.python.org) code in [jupyter notebooks](http://jupyter.org).

You're very welcome to set this up _before_ the tutorial, but during the tutorial we won't have much time to help individuals with their python installation. If you're having trouble you can follow on the screen or try out some notebooks in Google Colab (online) -- see below.

## Running examples on your computer

Basically: you need a Python 3 environment with up-to-date versions of: `keras, tensorflow, numpy, pandas, matplotlib, music21, jupyter`

Annoyingly, there are _two_ popular ways to set up Python on your computer: one installs python packages together in a special "environment" for each project you do, and the other sets up the packages for every project on your system.

### Setup Miniconda to get the right Python

- Follow the installation [instructions here](https://conda.io/en/latest/miniconda.html)
- Get the Python 3.6.x: `conda install python=3.6`

On Windows and confused? Try [this page for help](https://katiekodes.com/setup-python-windows-miniconda/#installing-miniconda--running-a-python-program).

### Install packages with Pip

- Open a terminal or command line window.
- First, install Python 3.6.x: `conda install python=3.6` (or otherwise...)
- Install the libraries with `pip install tensorflow tensorflow-probability keras numpy pandas matplotlib music21 jupyter glob svgwrite` (this might take a while).
- Install the MDN library: `pip install git+git://github.com/cpmpercussion/keras-mdn-layer.git#egg=keras-mdn-layer`
- Start up Jupyter notebook: `jupyter notebook`
- You're ready!

### Virtual Environments

Many people like to keep their Python libraries in separate "environments" for each project. If you do this, you can access each environment from Jupyter individually which is handy! Here's [how to](https://medium.com/@eleroy/jupyter-notebook-in-a-virtual-environment-virtualenv-8f3c3448247) for this.

## Running examples in a browsers

You can also run these notebooks on Google Colaboratory ([colab.research.google.com](https://colab.research.google.com)), an online Jupyter notebook system that could be useful, however, it's a bit more tricky to distribute the jupyter notebooks so that you can easily open them in Colab.

There's links below, but you can [check out all the Jupyter Notebooks for this course (and other!) on Github.](https://github.com/cpmpercussion/creative-prediction/tree/master/notebooks)

- [Here's a great walkthrough for getting started with Google Colab!](https://medium.com/deep-learning-turkey/google-colab-free-gpu-tutorial-e113627b9f5d)
- [And there's some more instructions here!](https://colab.research.google.com/notebooks/welcome.ipynb)
