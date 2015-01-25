---
title: A Thought a Day
layout: post

tags: [codeframe, IT]

comments: true
share: true
---

I've been meaning to do this for a while, and now that I've got a bit of extra time, I might as well start. To help myself keep track of what I'm doing, and motivate me to finish work and try new things, I'm going to start writing about something (it can be anything!) every day.

I managed to get my Macbook's internal wifi card working again by jiggling around some wires. I didn't have my Torx screwdriver on hand to check if the loose cables were in the antenna, so it's uncertain how "permanent" of a fix this is. I also "secured" one of the SATA cables that was flopping around in the case with masking tape. I'm definitely not giving up on this computer!

I've also been working on rewriting most of [Codeframe](http://codefra.me). Now that I've gotten a little more familiar with Javascript syntax and conventions, I've realized that the majority of my code is a mess to make things work! That being said, I was extremely pleased with its first public test - I wrote a quick extension to the framework that allowed students in [CS61A](http://cs61a.org) to check their Hog winrates nearly instantaneously. The students found it extremely useful, but I wish I'd made it public earlier - most of the students had probably finished by the time I made a post about it.

The service crashed briefly, but it wasn't due to my code for a change - the EC2 instance I was using simply ran out of CPU time. We scaled the instance up to a medium, and it handled the load significantly better. The next step - implementing problem sets and an autograding framework!