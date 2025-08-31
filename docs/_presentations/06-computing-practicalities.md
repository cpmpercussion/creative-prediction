---
layout: reveal
type: teaching
title:  Creative Prediction Practicalities
permalink: /presentations/crepreprac/
theme: assets/revealthemes/crepre.scss
---

{% include slides/title.html %}

## Python is powerful.

![](https://imgs.xkcd.com/comics/python.png)

We can all be Python superheroes! <!-- .element: class="fragment" -->

## Python setup can be hard.

![](https://imgs.xkcd.com/comics/python_environment.png)

(Sorry) <!-- .element: class="fragment" -->

## Machine Learning Systems

![Test computers]({{site.baseurl}}/assets/imps/imps-test-computers.jpg)

{% include slides/background-image.html image="assets/intro/gpu-rtx.jpg" bgcol="#000000" opacity="0.8" heading="GPUs; not just fun for games!" %}

## Colab to the Rescue?

![]({{site.baseurl}}/assets/colab.png)

## On Premises: Workstations

<img align="right" width="35%" src="{% link assets/dl-on-cloud/workstation.jpg %}">

- Workstations
- Pro: fun to play with
- Pro: good for small number of users
- Pro: one-time cost
- Con: not practical for many users
- Con: have to keep setting them up
- Con: I don't like sharing?

## Infrastructure-as-a-Service

<img align="right" width="35%" src="{% link assets/dl-on-cloud/cloud-server.png %}">

- Virtual servers
- Set up server, access via Linux shell
- Amazon Web Services (AWS)
- Google Cloud Platform (GCP)
- DigitalOcean (DO)
- [UH Cloud](http://www.uh-iaas.no) (UiO)

## Platform-as-a-Service
        
<img align="right" width="35%" src="{% link assets/dl-on-cloud/cloud-dashboard.png %}">

- Google Cloud Kubenetes Engine
- Deploy "Containerised" application to servers.
- ([Deploy DL to Kubernetes](https://medium.com/analytics-vidhya/deploy-your-first-deep-learning-model-on-kubernetes-with-python-keras-flask-and-docker-575dc07d9e76))
- [Sigma2](https://www.sigma2.no) (UiO)

## get your tools together

Check out the [setup]({{site.baseurl}}/setup) page on <https://cpmpercussion.github.io/creative-prediction/>.

[_Exercise_: Try out a Google Colab Notebook]({% include colab.html notebook="0-test-setup.ipynb" %})
