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

### Setup with Anaconda

- Follow a tutorial to install Anaconda on your system: [MacOS](https://medium.com/@GalarnykMichael/install-python-on-mac-anaconda-ccd9f2014072), [Windows](https://medium.com/@GalarnykMichael/install-python-on-windows-anaconda-c63c7c3d1444), [Linux](https://www.digitalocean.com/community/tutorials/how-to-install-the-anaconda-python-distribution-on-ubuntu-16-04).
- todo -- fill in the rest of this!

### Setup with Pip

- First, install Python 3: ([Hitchhiker's guide to Python](http://docs.python-guide.org/en/latest/))
- Open a terminal or command line window.
- Install the libraries with `pip install tensorflow keras numpy pandas matplotlib music21 jupyter` (this might take a while).
- Start up Jupyter notebook: `jupyter notebook`
- You're ready!

## Running examples in a browsers

You can also (potentially) run these notebooks on Google Colaboratory ([colab.research.google.com](https://colab.research.google.com)), an online Jupyter notebook system that could be useful, however, it's a bit more tricky to distribute the jupyter notebooks so that you can easily open them in Colab. Try storing the notebooks (`ipynb` files from the Github Repo) in your Google Drive and opening them, they should start up a colab instance.

- TODO: Fill in some more details here!
