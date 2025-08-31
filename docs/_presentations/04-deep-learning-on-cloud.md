---
layout: crepre-reveal
type: teaching
title:  "Deep Learning in the Cloud"
---

{% include slides/title.html %}

## Why cloud for ML/AI?

- Not always convenient/cost effective to use big workstation.
- We like small laptops without hot GPUs and processors.
- We might want to move from research to product!
- The internet is cool/fun?

## Cloud Models

![Cloud Models]({{site.baseurl}}/assets/dl-on-cloud/cloud-models.png) <!-- .element: width="80%" -->

[src: www.comgt.com/lib/sw/deliverymodels/](http://www.comgt.com/lib/sw/deliverymodels/)

## Pizza as a Service

![Pizza-as-a-Service]({{site.baseurl}}/assets/dl-on-cloud/pizza-as-a-service.jpg) <!-- .element: width="60%" -->
  
[src: Albert Barron](https://www.linkedin.com/pulse/20140730172610-9679881-pizza-as-a-service/)


## What do we need?

- GPUs: Nvidia [GTX1080TI, K80, P100, V100] or... "Tensor Processing Units"
- OS: Linux?
- CUDA + CUDnn
- Python
- Python libraries: Tensorflow, Keras, SKLearn, etc.
- Jupyter 

## On Premises: Workstations

<img align="right" width="30%" src="{{site.baseurl}}/assets/dl-on-cloud/workstation.jpg">

- Workstations (15-50KNOK)
- Pro: fun to play with
- Pro: good for small number of users
- Pro: one-time cost
- Con: not practical for many users
- Con: have to keep setting up eduroam
- Con: I don't like sharing?


## Infrastructure-as-a-Service

<img align="right" width="30%" src="{{site.baseurl}}/assets/dl-on-cloud/cloud-server.png">

- Virtual servers
- Set up server, access via Linux shell
- Amazon Web Services (AWS)
- Google Cloud Platform (GCP)
- DigitalOcean (DO)
- [UH Cloud](http://www.uh-iaas.no) (UiO)

## Platform-as-a-Service

<img align="right" width="30%" src="{{site.baseurl}}/assets/dl-on-cloud/cloud-dashboard.png">

- Google Cloud Kubenetes Engine
- Deploy "Containerised" application to servers.
- ([Deploy DL to Kubernetes](https://medium.com/analytics-vidhya/deploy-your-first-deep-learning-model-on-kubernetes-with-python-keras-flask-and-docker-575dc07d9e76))
- [Sigma2](https://www.sigma2.no) (UiO)

## Software-as-a-Service

<img align="right" width="30%" src="{{site.baseurl}}/assets/dl-on-cloud/colab.png">

- Google Colaboratory (👏🏼)
- Kaggle Kernels

## Example: Robojam

<img align="center" width="20%" src="{{site.baseurl}}/assets/dl-on-cloud/microjam-iphone8-robojam.png">


## Example: Robojam

<img align="center" width="75%" src="{{site.baseurl}}/assets/dl-on-cloud/robojam-application.png">

RoboJam is a Keras project, now deployed as a Flask web application.


## Starting point: Local + SaaS

- Developed on local shared workstation
- Also worked on Colaboratory
- Tips:
- keep jupyter sessions around with `screen`
- tunnel jupyter port with `ssh -L 8888:localhost:8888`
- Could also use Google Cloud VMs with GPUs for short training runs


## Starting point: IaaS + PaaS

<img align="center" width="30%" src="{{site.baseurl}}/assets/dl-on-cloud/deep-learning-vm-image.png">

- Can use VMs and Containers for DL development
- [Google's "Cloud Deep Learning VM Image"](https://cloud.google.com/deep-learning-vm/)
- Comes with `jupyterhub` running to do development in a browser.
- Expensive for a good machine: K80 GPU 0.45USD/h

## SaaS Architecture on Colab

![]({{site.baseurl}}/assets/dl-on-cloud/robojam-cloud-architecture-colab.png)


## Production: Turning into a web service

- Used `flask` framework to create a RESTful web API
- Just one endpoint: `https://0.0.0.0:5000/api/predict`
- Send performance as JSON to that endpoit
- robojam RNN model is conditioned with input, then a continuation is predicted.
- prediction returned as JSON
- "[Deploying DL models with Flask](https://towardsdatascience.com/deploying-keras-deep-learning-models-with-flask-5da4181436a2)"


## Production: Deploying to DigitalOcean

- Using cheapest DigitalOcean VM: 1vCPU, 1GB, $5 per month.
- Login, clone git repo, run server in a detached `screen`.
- Works! Deployed for about a year.
- Predictions take about 1.0s-1.5s, not too bad.
- Problem: what if the app gets popular?

## IaaS Architecture on DigitalOcean

![]({{site.baseurl}}/assets/dl-on-cloud/robojam-cloud-architecture-vm.png)


## Containerising: Docker

- We want to make a "container" that includes Robojam and all necessary libraries to run on any Docker installation.
- We'll start with the tensorflow docker which includes a development environment for tensorflow. 

## Containerising: Dockerfile

```bash
FROM tensorflow/tensorflow:latest-py3
MAINTAINER Charles Martin "charlepm@ifi.uio.no"

COPY requirements.txt /tmp/
RUN pip install --requirement /tmp/requirements.txt
COPY . /tmp/
WORKDIR /tmp
CMD [ "python", "./serve_tiny_performance_mdrnn.py" ]
```

## Containerising: Building the container

```bash
sudo docker build -t robojam:latest .
docker tag robojam:latest charlepm/robojam:latest
docker push charlepm/robojam:latest
```

## Containerising: Running the Container

`docker run -d -p 5000:5000 robojam:latest`


## Containerised Architecture with Docker

![]({{site.baseurl}}/assets/dl-on-cloud/robojam-cloud-architecture-docker.png)

## Deploying to Kubenetes

- Kubernetes is a system to run docker containers on multiple computers simultaneously.
- Let's set up a little cluster on Google Cloud Platform and deploy Robojam.
- Need to set up computers through the web interface
- Then use command interface to start Robojam.

## Deploying Robojam to Cluster


```bash
kubectl run robojam-cluster --image=charlepm/robojam:latest --port 5000
kubectl get pods
kubectl expose deployment robojam-cluster --type=LoadBalancer --port 5000 --target-port 5000
kubectl get service
```

## Micro-Service Architecture with Kubernetes

![]({{site.baseurl}}/assets/dl-on-cloud/robojam-cloud-architecture-kubenetes.png)


## Conclusion

- ML/AI isn't just for research, we can make cool applications too!
- Cloud resources very available:
- Not too expensive to use powerful servers for short time (training)
- can do a lot with cheap servers for production
- Try out docker etc, makes life much easier.
- Try out Jupyterhub for development. Might be way of future?

## Extra links

- [Maximise your GPU
Dollars](https://towardsdatascience.com/maximize-your-gpu-dollars-a9133f4e546a)
