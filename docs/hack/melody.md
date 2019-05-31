---
layout: page
title: Make some music with an RNN
permalink: /hack/melody/
---

![]()

Let's make some music with an LSTM-RNN!

For this exercise, you can start with the "music RNN" example here on
your computer. 

This example works on Colab as well, but you won't be able to view or
hear the generated music as easily so it's not quite as much fun.

**Notebook: Zeldic RNN**
([Github]({% include github.html notebook="3-zeldic-musical-RNN.ipynb" %}))
([open in Colab]({% include colab.html notebook="2-star-trek-titles-advanced.ipynb" %}))

The melody RNN needs a few extra pieces of software to work correctly.
You'll need to install the Python library [`music21`]() to read and
write MIDI files, and `musescore` to play them back in Jupyter
Notebooks.

1. The melody RNN code is designed to train a small RNN on a corpus of
MIDI files. Just as the charRNN generates text letter by letter, the
melody RNN generates music note-by-note. There's a small corpus of
MIDI data (already processed) provided with the example, try running
the code to see if you can train an RNN with this data. 
2. Find some of your own MIDI files to load into the melody-RNN.
   You'll have to run the **dataset generator** code to get them into
   a format that the RNN can train from.
3. The musical representation for this RNN is very simple: Integers
   such that 0-127 means a _note-on_ at that pitch, 128 means do
   nothing, and 129 means _note-off_. Can you think of a different way
   of representing the notes that would work with this RNN?
4. Think about how a melody generator RNN could be integrated into an
   instrument or artwork. How would it challenge or extend the role of
   the performer, and of the listener?



