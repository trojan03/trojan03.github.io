---
layout: page
title: Teaching a robot to play beer pong
description: "University project"
img: /assets/img/beerpong-logo.png
importance: 6
project: true
backlink: true
---
<b>Role</b>: Robotics&Data Scientist

<div class="row d-flex justify-content-center">
    <img class="img-fluid rounded z-depth-1" src="/assets/img/beerpong-logo.png" alt="" title="Beer pong"/>
</div>
<div class="row">
    <div class="col-sm mt-2 mt-md-0">
    <br>
        <b>Abstract: </b>Contextual Probabilistic Movement Primitives (Contextual ProMPs) extend

ProMPs by adding context variables — i.e., variables that do not change dur-
ing trajectory execution — to the state representation of a system. In this paper, we

use Contextual ProMPs in the beer pong task to generalize demonstrated throwing

movements to new locations of the cup. Furthermore, we compare different encod-
ings of the context variables, i.e., position of the cup. We approximate the context

by a basis expansion in the weight-space of ProMPs using classical conditioning of
Contextual ProMPs. In addition, we put the context directly into the state vector
using Contextual Linear Regression (CLR), which is equivalent to conditioning of
Contextual ProMPs. Using an approximated context together with conditioning
of Contextual ProMPs, we achieved a success rate of 70% of hits and 20% of
nearly hits. In contrast, CLR was not that convenient in generating such successful
throwing movements, achieving only 2 successful and 3 nearly successful hits out
of overall 10 attempts using the same set of demonstrations. <br><br>
    </div>
</div>
<a target="_blank" rel="noopener noreferrer" href="/assets/pdf/robopong_article.pdf">Article</a><br>
<a target="_blank" rel="noopener noreferrer" href="/assets/pdf/robopong.pdf">Presentation</a><br>
<a target="_blank" rel="noopener noreferrer" href="https://github.com/trojan03/contextual-promp">Code</a>
