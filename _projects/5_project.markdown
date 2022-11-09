---
layout: page
title: Learning tactile skills with FingerVision
description: "Master's thesis"
img: /assets/img/masters-logo.png
importance: 5
project: true
backlink: true
---
<b>Role</b>: Robotics&Data Scientist
<div class="row d-flex justify-content-center">
    <img class="img-fluid rounded z-depth-1" src="/assets/img/masters-logo.png" alt="" title="Master's thesis"/>
</div>
<p></p>
<div class="row d-flex justify-content-center">
  <video width="320" height="240" controls>
    <source src="/assets/videos/humanoids.mp4" type="video/mp4">
  </video>
</div>
<div class="row">
    <div class="col-sm mt-2 mt-md-0">
    <br>
        <b>Abstract: </b>Assembly tasks require rich feedback that enables tracking and adjustment of task execution parameters to unforeseen
        changes in the environment. Due to recent breakthroughs in computer vision, many architectural systems use video and
        depth cameras to guide assembly through sensory feedback. However, visual feedback alone is insufficient for performing
        manipulation tasks that crucially depend on contact with external objects and require force estimation at contact points.
        Although conventional force-torque sensors can be used to extend robot capabilities in this direction, they tend to be
        expensive. <br><br>
        In this thesis, we investigate the feasibility of employing an inexpensive vision-based alternative in closed-loop control
        scenarios – a variant of the FingerVision sensor that leverages the advances in computer vision to compensate for the
        lack of problem-specific hardware. We develop and evaluate a range of feedback controllers that use various modalities
        provided by the FingerVision sensor as input. In particular, by combining tactile feedback with real-time gripper and robot
        control algorithms, we demonstrate grasp adaptation, object shape and texture estimation, slip and contact detection,
        force and torque estimation. Furthermore, we show that the data delivered by the sensor is of sufficient quality to enable
        learning of auxiliary tactile skills – mapping directly from contact sensations to the force applied at an object in contact
        and to the viscosity and granularity of a substance being stirred by means of a spoon. Finally, the proposed tactile
        feedback controllers and learned skills are combined together to demonstrate applicability and utility of tactile sensing
        in collaborative human-robot architectural assembly tasks <br><br>
    </div>
</div>
<a target="_blank" rel="noopener noreferrer" href="/assets/pdf/alymbek_thesis.pdf">Link to thesis</a>
