---
title: Interactive Position-Based Fluid Simulation
slug: cs184-final-project
description: CS184 Spring 2016 Final Project · Austin Le, Kevin Chen

layout: post
---

# Summary

We will implement and render a position-based fluid simulation using OpenGL. Furthermore, we will integrate a Leap Motion to support user interaction with the rendered fluid using their hands.

# Background

_Here you should provide the context for your idea. Describe the problem that you are trying to solve, why it is challenging, why it is important, why you care about it and why others should care about it as well. List what resources, e.g. books, papers and/or online resources that are reference for your project._

Fluids are often essential in creating visually striking phenomena in art, video games, and movies; however, simulating them in computer graphics is challenging in that we have to be concerned with the physics of fluids, which are more complicated to model and render than large, relatively solid objects, like those we’ve been working with so far in this course. Besides solid objects, we want to try to solve the challenge of rendering and simulating fluids in order to produce more interesting visual effects, which we feel that most people appreciate and find enticing, both in the real and virtual world.

As reference for this project, we will reference the paper on [Position Based Fluids](http://mmacklin.com/pbf_sig_preprint.pdf) and find inspiration from [Evan Wallace’s WebGL Water project](http://madebyevan.com/webgl-water/).

# Resources

_List the computing platform, hardware and software resources that you will use for your project. You have a wide latitude here to use what you have access to, but be aware that you will have to support and trouble-shoot on your platform yourselves. If you are starting from an existing piece of code or system, describe and provide a pointer to it here._

There are two approaches we can take to doing this project - using WebGL and Javascript for an interactive browser experience, or using OpenGL and C++ for an offline program. Since the Javascript API for the Leap Motion is fairly robust and simple to use, we plan to take the WebGL route - for interactive input from the user, we will use the Leap Motion to detect hand motion and translate it into movement in the object space of the fluid container.

# Goals and Deliverables

_Define the kind of images you will create. If you are working on an interactive system, describe what demo you will create. Define how you will measure the quality / performance of your system (e.g. graphs showing speedup, or quantifying accuracy). It may not be possible to define precise target metrics at this time, but we encourage you to try. What questions do you plan to answer with your analysis?_

We will create some rendered images of simulated water in a container in various different positions (states). In addition, we will showcase the interactive portion using the Leap Motion by demonstrating how the Leap Motion’s tracking of the user’s hand affects the way the water moves and behaves, as if the hand is present in the water. We will measure the quality and performance of our system by how realistically the water behaves, especially when interacted with using the Leap Motion. If we can reach near-interactive speeds, we will also consider the speed at which the system responds to changes in the fluid particles, with or without interference by a user’s hand.

We plan to find out whether it is feasible to run such a system in real-time; stepping through a physics simulation for a large-scale system containing hundreds of thousands of particles is commonly known to be a very difficult problem; we will attempt to use heuristics and optimizations in order to achieve a realtime system.

# Baseline Goals

_Describe what you believe you must accomplish to have a successful project and achieve the grade you expect (i.e. your baseline plan -- planning for some unexpected problems would make sense)._

We plan on first creating a 2D proof of concept fluid dynamics system with very basic rendering. This should give us a general idea of what to expect from both our physics simulation and the Leap Motion. After that is working correctly, we will work on converting this into a 3D simulation, again without rendering. Once everything is in place and running at acceptable speeds, we will try to render the water in a visually appealing manner.

# Aspirational Goals

_Describe what you hope to achieve if things go well and you get ahead of schedule (your aspirational plan)._

Assuming the simulation does not reach real-time speeds as part of the baseline goals, we would like to be able to interact with the fluid in real-time and see the resulting behavior of the fluid. Furthermore, we would like to integrate the Leap Motion in a way that preserves real-time interactive speeds, so that a user can virtually move their hand through the water and watch it respond realistically on the screen.

# Schedule

## Sunday (4/17) - Wednesday (4/20)

* Set up the LeapMotion to correctly read user hand movements and figure out how to connect it to the computer to be used in a WebGL application.
* Investigate and learn how to use WebGL to create some basic graphics applications in the browser; start playing around with toy examples of position-based simulations.

## Thursday (4/21) - Saturday (4/23)

* Implement basic structure and pipeline for position-based fluid simulation based on the reference paper.
* Figure out how to turn LeapMotion inputs into a format that is readily useable in the WebGL simulation.

## Sunday (4/24) - Wednesday (4/27)

Continue to work on implementation of position-based fluid simulation based on the reference paper.

* Continue to work on turning LeapMotion inputs into a format that is readily useable in the WebGL simulation.
* Start integrating LeapMotion inputs into the simulation such that the fluid particles react to the user’s “hand”.

## Thursday (4/28) - Saturday (4/30)

* Debugging and fine-tuning of the overall system. Go for aspirational goals, if far enough ahead of baseline goals and if applicable.

## Sunday (5/1) - Wednesday (5/4)

* Last-minute debugging and fine-tuning of the overall system, if needed.
* Polish the overall pipeline and simulation. Prepare the application for a demo (host it somewhere, or perhaps just run it locally).
* Work on the final report and presentation.