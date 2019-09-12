---
layout: page
title: Setup
permalink: /setup/
---

This page will show you how to set up your computer to follow along with the creative prediction examples.

All of our code examples are provided as [Python 3](https://www.python.org) code in [jupyter notebooks](http://jupyter.org), you download these to your computer or alternatively open them directy in a browser-based Python environment.

<!-- You're very welcome to set this up _before_ the tutorial, but during the tutorial we won't have much time to help individuals with their python installation. If you're having trouble you can follow on the screen or try out some notebooks in Google Colab (online) -- see below. -->

## Running examples on your computer (Python/Jupyter Setup)

Basically: you need a Python 3 environment with up-to-date versions of: `keras, tensorflow, numpy, pandas, matplotlib, music21, jupyter, keras-mdn-layer`

Annoyingly, there are _two_ popular ways to set up Python on your computer: one installs python packages together in a special "environment" for each project you do, and the other sets up the packages for every project on your system.

### Setup Miniconda to get the right Python

- Follow the installation [instructions here](https://conda.io/en/latest/miniconda.html)

On Windows and confused? Try [this page for help](https://katiekodes.com/setup-python-windows-miniconda/#installing-miniconda--running-a-python-program).

### Install packages with Pip

- Open a terminal or command line window.
- Install the libraries with `pip install tensorflow tensorflow-probability keras numpy pandas matplotlib music21 jupyter glob3 svgwrite keras-mdn-layer` (this might take a while).
- Start up Jupyter notebook: `jupyter notebook`
- You're ready!

### Virtual Environments

Many people like to keep their Python libraries in separate "environments" for each project. If you do this, you can access each environment from Jupyter individually which is handy! Here's [how to](https://medium.com/@eleroy/jupyter-notebook-in-a-virtual-environment-virtualenv-8f3c3448247) for this.

## Running examples in a browser (Google Colab)

[_Exercise_: Try out a Google Colab Notebook]({% include colab.html notebook="0-test-setup.ipynb" %})

You can also run these notebooks on [Google Colaboratory](https://colab.research.google.com), a free-to-use Jupyter notebook environment that has most of the necessary Python libraries pre-installed. It even works on a tablet! If you want to get started quickly without slowing down to get your Python install right, Colab is a great way to go. The [tutorials]({{site.baseurl}}/tutorials/) page has links ot open each example directory in Colab.

Colab has some amazing features:

- [You can load all the notebooks for this workshop straight from the GitHub repo.](http://colab.research.google.com/github/cpmpercussion/creative-prediction/blob/master/)
- You can use a [GPU for free](https://medium.com/deep-learning-turkey/google-colab-free-gpu-tutorial-e113627b9f5d) to train a biggish RNN
- [Here's some more instructions!](https://colab.research.google.com/notebooks/welcome.ipynb)


There are some downsides though:

- uploading and downloading data is a [bit](https://medium.com/@Keshav31/colab-features-download-and-upload-e1ec537a83df) [fiddly](https://towardsdatascience.com/3-ways-to-load-csv-files-into-colab-7c14fcbdcb92).
- you can't use music21's playback features to hear generated MIDI scores, or visualise them with musescore.
- you can't run [IMPS]({% link imps.md %}) in Colab (it's not a jupyter notebook).


