---
layout: reveal
title:  Deep Dive on RNNs
permalink: /presentations/deep-dive-on-rnns/
theme: assets/revealthemes/crepre-dark.scss
margin: 0.1
center: False
---

{% include slides/title.html %}

{% include slides/background-image.html
image="/assets/canberra1.jpg"
heading="Ngunnawal & Ngambri & Ngarigu Country"
%}

## What is an Artificial Neuron? {#artificial-neuron}

{:.style="width:80%;  display: block; margin-left: auto; margin-right: auto;"}
![]({% link assets/deep-dive-on-rnns/1-artificial-neurone.png %})

[Source - Wikimedia Commons](https://en.wikipedia.org/wiki/File:Blausen_0657_MultipolarNeuron.png)

## Feed-Forward Network {#feed-forward}

<img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/2-feed-forward.png" style="width:60%;  display: block; margin-left: auto; margin-right: auto;" />
<p>For each unit: <span class="math inline">\(y = \text{tanh}\big(Wx + b \big)\)</span></p>

## Recurrent Network {#recurrent-network}

<img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/3-recurrent.png" style="width:60%;  display: block; margin-left: auto; margin-right: auto;" />
<p>For each unit: <span class="math inline">\(y_t = \text{tanh}\big(Ux_t + Vh_{t-1} + b \big)\)</span></p>


## Sequence Learning Tasks {#sequence-learning}

<p style="text-align:center;"><img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/sequence-learning.png" style="width:45%" />
<img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/sequence-learning3.jpg" style="width:50%"/></p>
<p><img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/sequence-learning2.png" style="width:80%; display: block; margin-left: auto; margin-right: auto;"/></p>


## Recurrent Network {#recurrent-network-1}

<img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/4-unfolding.png" style="width:75.0%; display: block; margin-left: auto; margin-right: auto;" />

simplifying…

## Recurrent Network {#recurrent-network-2}

<img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/5-recurrent-vert.png" style="width:25.0%; display: block; margin-left: auto; margin-right: auto;" />

simplifying and rotating…


## “State” in Recurrent Networks {#state-in-recurrent-networks}

<img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/5-recurrent-vert.png" style="width:25%; float:right;" />

- Recurrent Networks are all about storing a “state” in between computations...
- A "lossy summary of... past sequences"
- _h_ is the “hidden state” of our RNN
- What influences _h_?

## Defining the RNN State {#defining-the-rnn-state}

<img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/5-recurrent-vert.png" style="width:25%; float:right;" />

We can define a simplified RNN represented by this diagram as follows:

\\[h_t = \text{tanh}\big(Ux_t + Vh_{t-1} + b \big)\\]

\\[\hat{y}_t = \text{softmax}(c + Wh_t)\\]


## Unfolding an RNN in Time {#unfolding-an-rnn-in-time}

<img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/6-recurrent-unroll.png" alt="Unfolding an RNN in Time" style="width:80.0%; display: block;
    margin-left: auto; margin-right: auto;"/>

- By unfolding the RNN we can compute \\(\hat{y}\\) for a given length of sequence.
- Note that the weight matrices \\(U\\), \\(V\\), \\(W\\) are the same for each timestep; this is the big advantage of RNNs!


## Forward Propagation {#forward-propagation}

<div class="columns">
<div class="column">
<p><img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/forward-prop.png" /></p>
</div><div class="column">
<p>We can now use the following equations to compute <span class="math inline">\(\hat{y}_t\)</span>, by computing <span class="math inline">\(h\)</span> for the previous steps:</p>
<p><span class="math display">\[h_t = \text{tanh}\big(Ux_t + Vh_{t-1} + b \big)\]</span></p>
<p><span class="math display">\[\hat{y}_t = \text{softmax}(c + Wh_t)\]</span></p>
</div>
</div>

## Y-hat is Softmax’d {#y-hat-is-softmaxd}

<img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/softmax-is-probability.png" style="width:60%; display: block; margin-left: auto; margin-right: auto;" />

<p style="text-align:center;"><span class="math inline">\(\hat{y}\)</span> is a probability distribution!</p>

<p><span class="math display">\[\sigma(\mathbf{z})_j = \frac{e^{z_j}}{\sum_{k=1}^K e^{z_k}} \text{ for } j = 1,\ldots, K\]</span></p>


## Calculating Loss: Categorical Cross Entropy {#calculating-loss-categorical-cross-entropy}

<div class="columns">
<div class="column">
<p><img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/calculating-loss.png" /></p>
</div><div class="column">
<p>We use the categorical cross-entropy function for loss:</p>
<p><span class="math display">\[\begin{align*}
h_t &amp;= \text{tanh}\big( {b} + {Vh}_{t-1} + {Ux}_t \big) \\
\hat{y}_t &amp;= \text{softmax}(c + Wh_t) \\
L_t &amp;= -y_t \cdot \text{log}(\hat{y}_t) \\
\text{Loss} &amp;= \sum_t L_t \\
\end{align*}\]</span></p>
</div>
</div>


## Backpropagation Through Time (BPTT) {#backpropagation-through-time-bptt}

<div class="columns">
<div class="column">
<p><img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/7-recurrent-loss.png" style="width:85%; display: block; margin-left: auto; margin-right: auto;" /></p>
</div><div class="column">
<p>Propagates error correction backwards through the network graph, adjusting all parameters (<em>U</em>, <em>V</em>, <em>W</em>) to minimise loss.</p>
</div>
</div>


## Example: Character-level text model {#example-character-level-text-model}

<ul>
<li class="fragment"><strong>Training data:</strong> a collection of text.</li>
<li class="fragment"><strong>Input (<em>X</em>):</strong> snippets of 30 characters from the collection.</li>
<li class="fragment"><strong>Target output (<em>y</em>)</strong>: 1 character, the next one after the 30 in each <em>X</em>.</li>
</ul>


## Training the Character-level Model {#training-the-character-level-model}

<div class="columns">
<div class="column">
<p><img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/charRNN-training.png" /></p>
</div><div class="column">
<ul>
<li><strong>Target:</strong> A probability distribution with <span class="math inline">\(P(n) = 1\)</span></li>
<li><strong>Output:</strong> A probability distribution over all next letters.</li>
<li><strong>E.g.:</strong> “My cat is named Simon” would lead to <strong>X</strong>: “My cat is named Simo” and <strong>y</strong>: “n”</li>
</ul>
</div>
</div>


## Using the trained model to generate text {#using-the-trained-model-to-generate-text}

<div class="columns">
<div class="column">
<p><img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/charRNN-sampling.png" /></p>
</div><div class="column">
<ul>
<li class="fragment"><strong>S</strong>: Sampling function, sample a letter using the output probability distribution.</li>
<li class="fragment">The generated letter is reinserted at as the next input.</li>
<li class="fragment">We don’t want to always draw the most likely character. The would give frequent repetition and “copying” from the training text. Need a sampling strategy.</li>
</ul>
</div>
</div>


## Char-RNN {#char-rnn}

<div class="columns">
<div class="column">
<ul>
<li class="fragment">RNN as a sequence generator</li>
<li class="fragment">Input is current symbol, output is next predicted symbol.</li>
<li class="fragment">Connect output to input and continue!</li>
<li class="fragment">CharRNN simply applies this to a (subset) of ASCII characters.</li>
<li class="fragment">Train and generate on any text corpus: Fun!</li>
</ul>
</div><div class="column">
<p><img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/charRNN-example.png" /></p>
<p>See: <a href="http://karpathy.github.io/2015/05/21/rnn-effectiveness/">Karpathy, A. (2015). The unreasonable effectiveness of recurrent neural networks.</a></p>
</div>
</div>


## Char-RNN Examples {#char-rnn-examples}

<div class="columns">
<div class="column">
<p>Shakespeare (Karpathy, 2015):</p>
<blockquote>
<p>Second Senator: They are away this miseries, produced upon my soul, Breaking and strongly should be buried, when I perish The earth and thoughts of many states.</p>
<p>DUKE VINCENTIO: Well, your wit is in the care of side and that.</p>
</blockquote>
</div><div class="column">
<p>Latex Algebraic Geometry:</p>
<p><img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/charRNN-latex-karpathy.jpeg" style="width:70%;"/></p>
<p>N.B. “<em>Proof.</em> Omitted.” Lol.</p>
</div>
</div>

{% include slides/theme.html slide="praxis" heading="Time to Hack" id="startrekrnn" %}

Making an RNN that generates Star Trek titles

[open in Colab]({% include colab.html notebook="1-star-trek-titles-RNN-basic.ipynb" %})

{% include slides/impact.html id="rnn-architectures-and-lstm" %}

RNN Architectures and **LSTM**


## Bidirectional RNNs {#bidirectional-rnns}

<div class="columns">
<div class="column">
<p><img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/blstm.png" style="width:75%; display: block; margin-left: auto; margin-right: auto;" /></p>
</div><div class="column">
<ul>
<li class="fragment">Useful for tasks where the whole sequence is available.</li>
<li class="fragment">Each output unit (<span class="math inline">\(\hat{y}\)</span>) depends on both past and future - but most sensitive to closer times.</li>
<li class="fragment">Popular in speech recognition, translation etc.</li>
</ul>
</div>
</div>


## Encoder-Decoder (seq-to-seq) {#encoder-decoder-seq-to-seq}

<img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/seq2seq.png" style="width:70%;float:right;"/>
<p style="text-align:left;" class="fragment">Learns to generate output sequence (<strong>y</strong>) from an input sequence (<strong>x</strong>).</p>
<p style="text-align:left;" class="fragment">Final hidden state of encoder is used to compute a context variable <em>C</em>.</p>
<p style="text-align:left;" class="fragment">For example, translation.</p>


## Deep RNNs {#deep-rnns}

<div class="columns">
<div class="column">
<p><img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/rnn-deep.png" style="width:75%; display: block; margin-left: auto; margin-right: auto;" /></p>
</div><div class="column">
<ul>
<li class="fragment">Does adding deeper layers to an RNN make it work better?</li>
<li class="fragment">Several options for architecture.</li>
<li class="fragment">Simply stacking RNN layers is very popular; shown to work better by Graves et al. (2013)</li>
<li class="fragment">Intuitively: layers might learn some hierarchical knowledge automatically.</li>
<li class="fragment">Typical setup: up to three recurrent layers.</li>
</ul>
</div>
</div>


## Long-Term Dependencies {#long-term-dependencies}

<div class="columns">
<div class="column">
<ul>
<li class="fragment">Learning long dependencies is a mathematical challenge.</li>
<li class="fragment">Basically: gradients propagated through the same weights tend to vanish (mostly) or explode (rarely)</li>
<li class="fragment">E.g., consider a simplified RNN with no nonlinear activation function or input.</li>
<li class="fragment">Each time step multiplies <em>h(0)</em> by <em>W</em>.</li>
<li class="fragment">This corresponds to raising power of eigenvalues in <span class="math inline">\(\Lambda\)</span>.</li>
<li class="fragment">Eventually, components of <em>h(0)</em> not aligned with the largest eigenvector will be discarded.</li>
</ul>
</div><div class="column">
<p><span class="math display">\[\begin{align*}
h_t &amp;= Wh_{t-1}\\
h_t &amp;= (W^t)h_0
\end{align*}\]</span></p>
<p>(supposing <strong>W</strong> admits eigendecomposition with orthogonal matrix <strong>Q</strong>)</p>
<p><span class="math display">\[\begin{align*}
W &amp;= Q\Lambda Q^{\top}\\
h_t &amp;= Q\Lambda ^t Qh_0
\end{align*}\]</span></p>
</div>
</div>


## Vanishing and Exploding Gradients {#vanishing-and-exploding-gradients}

<div class="columns">
<div class="column">
<ul>
<li class="fragment">“in order to store memories in a way that is robust to small perturbations, the RNN must enter a region of parameter space where gradients vanish”</li>
<li class="fragment">“whenever the model is able to represent long term dependencies, the gradient of a long term interaction has exponentially smaller magnitude than the gradient of a short term interaction.”</li>
</ul>
</div><div class="column">
<ul>
<li class="fragment">Note that this problem is only relevant for recurrent networks since the weights <strong>W</strong> affecting the hidden state are the same at each time step.</li>
<li class="fragment">Goodfellow and Benigo (2016): “the problem of learning long-term dependencies remains one of the main challenges in deep learning”</li>
<li class="fragment"><a href="http://www.wildml.com/2015/10/recurrent-neural-networks-tutorial-part-3-backpropagation-through-time-and-vanishing-gradients/">WildML (2015). Backpropagation Through Time and Vanishing Gradients</a></li>
<li class="fragment"><a href="https://ml4a.github.io/ml4a/RNNs/">ML for artists</a></li>
</ul>
</div>
</div>


## Gated RNNs {#gated-rnns}

<div class="columns">
<div class="column">
<p><img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/gated-rnn.png" style="width:80%; display: block; margin-left: auto; margin-right: auto;"/></p>
</div><div class="column">
<ul>
  <li>Provide <strong>gates</strong> that can change the hidden state a little bit at each step.</li>
  <li class="fragment">The gates are controlled by <strong>learnable weights</strong> as well!</li>
  <li class="fragment">Hidden state weights that may <strong>change</strong> at each time step.</li>
  <li class="fragment">Create <strong>paths through time</strong> with derivatives that do not vanish/explode.</li>
  <li class="fragment">Gates choose information to <strong>accumulate</strong> or <strong>forget</strong> at each step.</li>
</ul>
</div>
</div>


## Long Short-Term Memory {#long-short-term-memory}

<div class="columns">
<div class="column">
<ul>
<li class="fragment">Self-loop containing internal state (c).</li>
<li class="fragment">Three extra gating units:
<ul>
<li class="fragment"><strong>Forget gate</strong>: controls how much memory is preserved.</li>
<li class="fragment"><strong>Input gate</strong>: control how much of current input is stored.</li>
<li class="fragment"><strong>Output gate</strong>: control how much of state is shown to output.</li>
</ul></li>
<li class="fragment">Each gate has own <strong>weights</strong> and <strong>biases</strong>, so this uses <em>lots</em> more parameters.</li>
<!-- <li class="fragment">Some variants on this design, e.g., use c as additional input to three gate units.</li> -->
</ul>
</div><div class="column">
<p><img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/lstm.png" style="width:60%; display: block; margin-left: auto; margin-right: auto;" /></p>
</div>
</div>


{% comment %}
## Long Short-Term Memory {#long-short-term-memory-1}

<div class="columns">
<div class="column">
<ul>
<li class="fragment">Forget gate: <em>f</em></li>
<li class="fragment">Internal state: <em>s</em></li>
<li class="fragment">Input gate: <em>g</em></li>
<li class="fragment">Output gate: <em>q</em></li>
<li class="fragment">Output: <em>h</em></li>
</ul>
</div><div class="column">
<p><img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/lstm.png" style="width:60%; display: block; margin-left: auto; margin-right: auto;" /></p>
</div>
</div>
{% endcomment %}


## Other Gating Units {#other-gating-units}

<div class="columns">
<div class="column">
  <p><img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/gru.png" style="width:100.0%" />
    Source: <a href="https://youtu.be/FpQCAd0zKiU">(Olah, C. 2015.)</a></p>
</div><div class="column">
<ul>
<li>Are three gates necessary?</li>
<li>Other gating units are simpler, e.g., Gated Recurrent Unit (GRU)</li>
<li>For the moment, LSTMs are winning in practical use.</li>
<li>Alternative unit design: project idea?</li>
</ul>
</div>
</div>


## Visualising LSTM activations {#visualising-lstm-activations}

<p>Sometimes, the LSTM cell state corresponds with features of the sequential data:</p>
<p><img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/lstm-state-visualisation.png" style="width:70.0%" /></p>
<p>Source: <a href="http://karpathy.github.io/2015/05/21/rnn-effectiveness/">(Karpathy, 2015)</a></p>


## CharRNN Applications: FolkRNN {#charrnn-applications-folkrnn}

<p>Some kinds of music can be represented in a text-like manner.</p>
<p><img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/folk-rnn.png" style="width:70.0%" /></p>
<p>Source: <a href="https://core.ac.uk/download/pdf/55873381.pdf">Sturm et al. 2015. Folk Music Style Modelling by Recurrent Neural Networks with Long Short Term Memory Units</a></p>


## Other CharRNN Applications {#other-charrnn-applications}

<div class="columns">
  <div class="column">
    <img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/rnn-monet.png" style="width:85.0%; display: block; margin-left: auto; margin-right: auto;"/>
<p> <a href="http://blog.manugarri.com/teaching-recurrent-neural-networks-about-monet/">Teaching Recurrent Neural Networks about Monet</a></p>
  </div><div class="column">
    <img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/rnn-paint-colours.png" style="width:50%; display: block; margin-left: auto; margin-right: auto;"/>
<p> <a href="http://aiweirdness.com/post/160776374467/new-paint-colors-invented-by-neural-network">New Paint Colours Invented by Neural Network</a></p>
</div>
</div>


## Google Magenta Performance RNN {#google-magenta-performance-rnn}

<div class="columns">
<div class="column">
<p><img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/performance-rnn.jpg" style="width:50%; display: block; margin-left: auto; margin-right: auto;"/></p>
</div><div class="column">
<p><img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/performance-rnn2.png" style="width:50%; display: block; margin-left: auto; margin-right: auto;"/></p>
</div>
</div>
<ul>
<li>State-of-the-art in music generating RNNs.</li>
<li>Encode MIDI musical sequences as categorical data.</li>
<li>Now supports polyphony (multiple notes), dynamics (volume), expressive timing (rubato).</li>
<li>E.g.: <a href="https://youtu.be/JVf6esaXeLE">YouTube demo</a></li>
</ul>


## Neural iPad Band, another CharRNN {#neural-ipad-band-another-charrnn}

<div class="columns">
<div class="column">
  <p>
    <img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/neural-ipad-screen.jpg" style="display: block; margin-left: auto; margin-right: auto;" />
    <img data-src="{{site.baseurl}}/assets/deep-dive-on-rnns/neural-ipad-diagram.png" style="display: block; margin-left: auto; margin-right: auto;" />
  </p>
</div><div class="column">
<ul>
<li>iPad music transcribed as sequence of numbers for each performer.</li>
<li>Trick: encode multiple ints as one (preserving ordering).</li>
<li><a href="https://youtu.be/FpQCAd0zKiU">Video</a></li>
</ul>
</div>
</div>

{% include slides/theme.html slide="further-reading-code" heading="Books and Learning References" id="reading" %}

[Ian Goodfellow, Yoshua Bengio, and Aaron Courville. 2016. Deep Learning. MIT Press.](http://www.deeplearningbook.org)

[François Chollet. 2018. Manning.](https://www.manning.com/books/deep-learning-with-python)

[Chris Olah. 2015. Understanding LSTMs](http://colah.github.io/posts/2015-08-Understanding-LSTMs/)

[RNNs in Tensorflow](https://r2rt.com/recurrent-neural-networks-in-tensorflow-ii.html)

[Maybe RNN/LSTM is dead? CNNs can work similarly to BLSTMs](https://towardsdatascience.com/the-fall-of-rnn-lstm-2d1594c74ce0)

[Karpathy. 2015. The Unreasonable Effectiveness of RNNs](http://karpathy.github.io/2015/05/21/rnn-effectiveness/)

[Foster. 2019. Generative Deep Learning: Teaching Machines to Paint, Write, Compose, and Play](http://shop.oreilly.com/product/0636920189817.do)

{% include slides/theme.html slide="praxis" heading="Time to Hack" id="examples" %}

These examples run in Google Colaboratory, just click the link to start them up.

Star Trek RNN ([open in Colab]({% include colab.html notebook="1-star-trek-titles-RNN-basic.ipynb" %}))

Advanced CharRNN ([open in Colab]({% include colab.html notebook="2-star-trek-titles-advanced.ipynb" %}))

Melody Generation ([open in Colab]({% include colab.html notebook="3-zeldic-musical-RNN.ipynb" %}))

## Summary {#summary}

- Recurrent Neural Networks let us capture and model the structure of sequential data.
- Sampling from trained RNNs allow us to generate new, creative sequences.
- The internal state of RNNs make them interesting for interactive applications, since it lets them capture and continue from the current context or “style”.
- LSTM units are able to overcome the vanishing gradient problem to some extent.

