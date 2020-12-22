---
layout: post
title: Useful terminal commands for ROS
date: 2018-04-28
description: Recently, I started to work with ROS more closely as part of my master's thesis. I thought it would be useful to place in this blog post some useful terminal commands for Ubuntu.
backlink: true
---

##### rostopic
Show available ROS topics
```bash
rostopic list
```
Display information about a given ROS topic.
```bash
rostopic info /topic_name
```
Display messages published to a given ROS topic.
```bash
rostopic echo /topic_name
```
Display filtered messages published to a given ROS topic. Useful when there are different types of messages and you want to display only several of them.
```bash
rostopic echo --filter "python expression" /topic_name
```
Save the frame diagram for a given ROS topic. The frame diagram is saved to frames.pdf.
```bash
rosrun rostopic_name view_frames
evince frames.pdf
```
##### rmsg
Show additional information about a given message.
```bash
rmsg show message_name
```
##### rosnode
Show available ROS nodes
```bash
rosnode list
```
Show additional information about a given node.
```bash
rosnode info /node_name
```
##### Miscellaneous
Launch Qt-based GUI.
```bash
rqt
```
Sometimes the plugin cannot be detected by rqt. In this case, use the following command:
```bash
rqt --force-discover
```
Launch a 3D visualization tool for ROS.
```bash
rosrun rviz rviz
```
ROS needs to be sourced in order the commands can be run:
```bash
source path_to_setup/setup.bash
```
This command should be typed everytime you open a new terminal. In case you want to simplify
this process, you may want to add an alias to ~/.bashrc.
