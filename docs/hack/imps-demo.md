---
layout: page
title: Try out IMPS, Processing, and Pd
permalink: /hack/imps-demo/
---

![The IMPS running in diagram form.]({{site.baseurl}}/assets/IMPS_connection_example.png)

In this exercise you'll try out the Interactive Music Prediction
System (IMPS) in your own NIME, or a demo NIME that's provided with
the code.

IMPS is a bit more complicated and doesn't run from a Jupyter
notebook, instead, you'll download the source code and run it as a
standalone python application. It only has a command-line interface,
so you'll need to be familiar with how to navigate around your
computer in a terminal or command-line shell to do this exercise.

## Installation

IMPS is written in Python with Keras and TensorFlow Probability, so it
should work on any platform where Tensorflow can be installed. Python
3 is required.

You can find the installation instructions on
the [IMPS page]({{site.baserul}}/imps/) as well.

First you should clone this repository or download it to your computer:

    git clone https://github.com/cpmpercussion/imps.git
    cd imps

The python requirements can be installed as follows:

    pip install -r requirements.txt

Some people like to keep Python packages separate in virtual environments, if that's you, here's some terminal commands to install:

    virtualenv --system-site-packages -p python3 venv
    source venv/bin/activate
    pip install -r requirements.txt
    
    
In addition, it's handy to have two extra tools on your computer to
try out IMPs with a demo interface:

- Processing
- Pure Data (pd)

Installers for both of these can be found on their respective websites.

### 1: Connecting to a musical interface

To start with, let's connect IMPS to a simple demo NIME. This is
contained in the `midi_controllers` folder of the IMPS repository.

This demo NIME consists of a 2D mousing area that controls 2
synthesiser commands. You can turn off the sounds and send MIDI to
your favourite synthesiser software if you want to.

Try making some sounds with the interface to make sure it's working.

### 2. Log some training data

Start up IMPS in logging only mode with this command

    python predictive_music_model.py --dimension=3 --log -o

Note that the dimension is set to "3": this is because our interface
is 2 dimensions and we need one extra dimension for time.

Play around with the interface for a while to record some data. Maybe
you could try just doing a certain "style" of performance with it to
train the MDRNN to reproduce a certain behaviour.

### 3. Train an MDRNN

There's two steps for training: Generate a dataset file, and train the predictive model.

Use the `generate_dataset` command:

    python generate_dataset --dimension=3
    
This command collates all the logs with dimension "3" in the logging
directory into a single `.npz` file.

Now let's do the training, here's the command for the smallest MDRNN,
with early-stopping enabled so that it doesn't take too long.
Hopefully your computer's fan starts making a lot of
noise---good!---that's how you know it's working!

    python train_predictive_music_model.py --dimension=3 --modelsize=xs --earlystopping

### 4. Perform with your model.

Now that you have a trained model, you can run this command to start making predictions:

    python predictive_music_model.py -d=3 --modelsize=xs --log

If your interface software is still running, you should hear it play
itself! cool!

### 5. Try with your own NIME!

This is a bit more of a project. First of all, what kind of data does
your NIME generate? Is it one or many dimensions? Secondly, _when_ are
these data generated and available for a synthesiser. Are all
dimensions sent on independent timescales (like individual keys on a
piano for instance) or are they all combined into one stream of data?

IMPS can only deal with messages that include EVERY bit of data from a
NIME, so you might need to work on your code to get your output data into a format
that IMPS can handle. There's some more details on the [IMPS
page}({{site.baseurl}}/imps/).

Once you've figured out how to get data into IMPS you can log some
interaction and train an MDRNN. Great!

So now you have a trained MDRNN, but what can you do with the
predictions? WIll it play the same sounds as your regular instrument,
or different ones? Will be be visualised or _physicalised_ in some
way? What benefit is there to having this data during a performances?

### 6. Extend IMPS and use in your own projects!

IMPS is an open source project and I hope that **this community**
makes some cool music with it. It has shortcomings, and it's
opinionated, so don't hesitate to hack it into a predictive musical
model that you want! (or the predictive musical model we deserve??)

prefer it@
