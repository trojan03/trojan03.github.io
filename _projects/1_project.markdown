---
layout: page
title: Detecting Corona Hotspots
description: "Customer: St. Peter Ording"
img: /assets/img/spo-logo.jpg
importance: 1
project: true
backlink: true
---
<b>Role</b>: ML Engineer/Data Scientist

COVID19 has caused a major impact on tourism. St. Peter Ording is a popular German seaside spa and has been looking to detecting the so called "Corona Hotspots" in order to control people flows on the beach. Traditional IoT sensors for counting people are working great at tight places but cannot work on such large areas as beach.

To overcome this challenge, I developed a computer vision pipeline that uses cameras instead of sensors. It receives images from the cameras, processes them, counts people and sends the results back to the dashboard. The pipeline was deployed on Microsoft Azure using Azure Functions and Azure Storage. The underlying computer vision algorithm was based on PyTorch.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
    St. Peter Ording has been awarded "Publikumspreis" and second place in the <a target="_blank" rel="noopener noreferrer" href="https://www.deutschertourismuspreis.de/">"Deutscher Tourismuspreis"</a> contest.
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="/assets/img/spo-logo.jpg" alt="" title="St. Peter Ording"/>
    </div>
</div>
