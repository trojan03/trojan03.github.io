---
layout: page
title: Classifying flight attendant's comments
description: "Customer: LSG Group"
img: /assets/img/lsg-logo.png
importance: 2
project: true
backlink: true
---
<b>Role</b>: ML Engineer/Data Scientist

<div class="row">
    <div class="col-sm mt-5 mt-md-0">
    LSG receives daily customer feedback from various airlines about products and services on board. These responses are called flight attendant comments (FACs), which are the most important source of information for LSG about performance and customer preference. Every month, LSG receives thousands of feedback comments worldwide, which consist of all kinds of valuable information.
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="/assets/img/lsg-logo.png" alt="" title="LSG Group"/>
    </div>
</div>
The feedback was being transferred purely manually from the respective airline format to LSG internal systems. Due to the manual input, most of the comments remained unprocessed. To overcome this problem, I have implemented a production-ready AI solution in a team of 3 persons. The data pipeline was created with Azure Functions and Azure Storage and the underlying NLP algorithm was based on TensorFlow.
