---
layout: reveal
title: "Creative Machine Learning with ml5.js"
permalink: /presentations/creml5js/
theme: anu
center: true
revealified: true
---

{% include slides/title.html %}

{% include slides/welcometocountry.html %}

{% include slides/theme.html slide="code-theory" heading="Creative Machine Learning" %}

What is machine learning (ML)?

How can I use ML in p5?

How can we make art with this?

## What is Machine Learning Anyway?

{:.fragment}
Creating computer programs without explicitly programming them.

{:.fragment}
Algorithms that learn by example.

{:.fragment}
Algorithms that learn through experience.

{:.fragment}
Kind of a big deal ($$$)

{:.fragment}
Kind of problematic!

## Let's Solve a Problem

Suppose the boss wants a program where the screen colour **changes to red** when the mouse moves to certain locations.

| mouseX | red background |
|--------|-----|
| 15     | no  |
| 75     | no  |
| 173    | no  |
| 250    | yes |
| 312    | yes |
| 375    | yes |

(N.B.: the screen is 400 pixels wide)

## How would you do it?

Let's write a **configurable algorithm!**

```
if (mouseX > ??) {
    background(255,0,0);
} else {
    background(0,0,0);
}
```

## OK. What if we had more inputs?


![a doggo]({% link assets/creml5js/ashleigh-robertson-yqL-06P89Hg-unsplash.jpg %}){:style="float:right;width:30%"}

Can we represent pictures as numbers?

{:.fragment}
Yep! It's just a 2D array of colours!

{:.fragment}
So we had **enough** `if`s and `else`s then maybe we could make a _doggo classifier_!

{:.fragment}
sort of!

{:. style="font-size:.5em;float:right;"}
(<span>Photo by <a href="https://unsplash.com/@a5hleighh?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Ashleigh Robertson</a> on <a href="https://unsplash.com/s/photos/doggo?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>)


## Simplifying inputs

![perceptron]({% link assets/creml5js/perceptron.png %}){:style="float:right;width:30%;"}

One trick we often use is to design a **configurable algorithm** which can:

- take lots of numbers as inputs 
- boil this all down to **just one number** as output.

{:.fragment}
The "configuration" would be "choosing how much of each input to listen to"

{:.fragment}
One example is a ["perceptron" (1958)](https://en.wikipedia.org/wiki/Perceptron)


## Fast forward 50 years.

![perceptron network]({% link assets/creml5js/perceptron-network.png %}){:style="float:right;width:30%;"}

Trick 1: feed the outputs of perceptrons into **more** perceptrons in a kind of _network_

Trick 2: tricky algorithms to choose the **configuration**

Trick 3: big fast computers with **lots of data** to learn from

{:.fragment}
By the way, another name for a perceptron is an _artificial neuron_. So the above is a... _neural network_...




{% include slides/theme.html slide="big-picture" heading="Some terminology" id="terminology" %}

**Model**: an instance of a trainable algorithm

**Pre-Trained Model**: a trainable algorithm which has... already been trained.

**Training/Optimising**: using training data to make a trained model.

**Prediction/Inference**: using a trained model to generate an output using  _unseen_ data 

**Classification**: an ML task for choosing a "class" (or description) for a  piece of data


{% comment %}

{% include slides/theme.html slide="feeling-lost" heading="Wait, where's all the maths?" id="maths" %}

Want to make the learning process work faster? **Great idea** to have a maths/CS major.

Want to make interesting art with the most relevant new technology of today? **Ok, you're ready to go!**

{% endcomment %}


## ml5.js: Friendly Machine Learning

[ml5.js](https://ml5js.org/) is a JavaScript library that provides access to machine learning **models** in a web browser.

You can load up **pre-trained models** and start doing **prediction** right away!

Related to and inspired by `p5.js`.

## Get started

Just need to load it in our `index.html`:

{:. style="font-size:.85em;"}
```
<script src="https://unpkg.com/ml5@0.5.0/dist/ml5.min.js" type="text/javascript"></script>
```

Open up a [p5 web editor sketch](https://editor.p5js.org/charlesmatarles/sketches/W9eLM5cPB) with ml5 already loaded.

## Classifying Images {#images}

Let's classify some doggos. We'll use a pretrained model called `MobileNet`

{:. style="font-size:.85em;"}
```
// load the classifier
classifier = ml5.imageClassifier('MobileNet');
// classify an image
classifier.classify(img, gotResult)
```
Where does the result go? Need to define a _callback_ function `gotResult(error, results)`.

## Classifying Video {#video}

We can access a webcam in our sketch:
{:. style="font-size:.85em;"}
```
video = createCapture(VIDEO);
video.size(320, 240);
video.hide();
```

And we can just ask the classifier to only make predictions from this video stream:
{:. style="font-size:.85em;"}
```
classifier = ml5.imageClassifier('MobileNet', video);
classifier.classify(gotResult); // classify one frame
```

## Artistinal Bespoke Machine Learning {#training}

Let's make _our own_ custom image classifier with [Teachable Machine](https://teachablemachine.withgoogle.com/)

![Teachable Charles]({% link assets/creml5js/teachablecharles.jpg %}){:style="display:block;margin-left:auto;margin-right:auto;width:60%"}


## SketchRNN {#sketchrnn}

![Sketch Cats]({% link assets/creml5js/cats.jpg %}){:style="float:right;width:30%;"}

Sketch RNN is a model that generates a drawing by moving an imaginary pen around the screen.

Each "prediction" is a pen movement in `x` and `y` coordinates.

(This is a really fun model to try out).


## Using SketchRNN {#sketchrnn2}

{:. style="font-size:.85em;"}
```
model = ml5.sketchRNN('cat'); // load the model with a "class" to draw.
```

The prediction is an object with `x`, `y`, and `pen` states (the pen can move up and down to make spaces in the drawing.

Here's an [example](https://editor.p5js.org/charlesmatarles/sketches/0J6q4leZj)


## More ml5.js models

There are _lots_ of models available! (check the [reference](https://learn.ml5js.org/#/reference))

Many (e.g., posenet) are related to image classification and processing (images are so hot right now).

There are also sound recognition models.

And text generation models.

{% include slides/background-image.html image="assets/creml5js/compasses-allisonparrish.png" bgcol="black" bgsize="contain" %}

{% include slides/image-credit.html
   artist="Allison Parrish"
   title="Compasses"
   year="2019"
%}

{% include slides/background-image.html image="assets/creml5js/dadabots-relentlessdoppelganger.png" bgcol="black" bgsize="cover" %}

{% include slides/image-credit.html
   artist="Dadabots"
   title="Relentless Doppelganger"
   year="2019"
%}

{% include slides/background-image.html image="assets/creml5js/memo-learningtosee.png" bgcol="black" bgsize="cover" %}

{% include slides/image-credit.html
   artist="Memo Atken"
   title="Learning to See"
   year="2019"
%}

{% include slides/background-image.html image="assets/creml5js/art-or-not.png" bgcol="black" bgsize="contain" %}

{% include slides/image-credit.html
   artist="Dilpreet Singh"
   title="Art or Not App"
   year="2019"
%}

<section
data-background-color="black"
id="dancegeneration"
data-background-video="{% link assets/creml5js/benediktewallace-dance.mp4 %}"
data-background-size="contain"
data-background-video-muted="true"
>


{% include slides/image-credit.html
   artist="Benedikte Wallace"
   title="Dance Generation Neural Network"
   year="2020"
%}
</section>
