---
layout: page
title: Make a RoboJam model
permalink: /hack/robojam/
---

![A 3D MDRNN]({{site.baseurl}}/assets/hack/kanji-mdn-diagram.png)

In this exercise you'll try making your own MDRNN. The example code
for RoboJam and the Kanji RNN are below.

**Notebook: MDN Robojam Touch Generation**
([Github]({% include github.html notebook="7-MDN-Robojam-touch-generation.ipynb" %}))
([open in Colab]({% include colab.html notebook="7-MDN-Robojam-touch-generation.ipynb" %}))

1. Start by stepping through the code for either the Kanji or RoboJam
   MDRNN. These systems both use 3D RNNs: 1 dimension for each of the
   _x_ and _y_ directions, and the _pen state_ (down or up) for the Kanji
   RNN, and _time_ for RoboJam.
2. Think about some continuous-valued data you would like to model. It
   could be 3D like the Kanji, or RoboJam RNN, or have more or less
   dimensions (it's easy to change the dimension of the RNN). Try to
   find some data in form that is easy to open with `pandas` and
   `numpy`. Try to load the data into the notebook and plot sections
   of it. 
3. Try training a new MDRNN with your data! It might take a while to
   start getting useful results, but keep track of what you did so
   that you can improve your MDRNN next time.
4. Can your generated data be incorporated into an artwork,
   composition or instrument? Think about how the different dimensions
   of the data are represented. Are they related or independent?

