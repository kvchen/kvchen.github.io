---
layout: post
title:  Fixing an 8bitdo NES30 Pro
subtitle: stuck sticks
---

I'd been wanting to play old Nintendo 64 games for a while now, but it's impractical these days to hook up a CRT and bust out the old console just to experience some nostalgia. After fiddling around with [Retropie](https://retropie.org.uk/) for a bit, I decided to find a nice Bluetooth controller that I could carry around with me. I ended up purchasing an [8bitdo NES30 Pro](http://www.8bitdo.com/nes30pro-fc30pro/) off Ebay.

The controller is pretty nice and about what I'd expected, but the left stick was stuck when it arrived. When the stick was released it would lean a little to the left, and moving it to the boundary would cause it to become stuck. That meant that there was always some degree of drifting and it made playing games a pain.

{% fb 2017-07-29/stuckleft %}

<a href="{% asset_path '2017-07-29/stuckleft' %}" data-no-instant>
  {% img '2017-07-29/stuckleft' magick:1/4 %}
</a>

After a quick Google, I found out that I wasn't the only one with the problem. Some fixes included mashing the stick to the right for a while until the controller unstuck itself, others suggested loosening the case screws. Neither of these approaches worked for me, so I shelved the controller for a while and didn't use it much (apart from the times when I had friends over and I was strapped for controllers).

The thing didn't come with a warranty (I bought it through a 3rd party vendor), so I decided to crack it open to see if I could fix it. The disassembly process was pretty straightforward - run a fingernail along the edge to open all the plastic locks, starting from the side with the MicroUSB port. There are a couple of Phillips head screws left to take out and some ribbon cables to detach.

<a href="{% asset_path '2017-07-29/disassemble' %}" data-no-instant>
  {% img '2017-07-29/disassemble' magick:1/4 %}
</a>

After disassembly, there's a board that contains just the thumbsticks.

<a href="{% asset_path '2017-07-29/stuckcaseopen' %}" data-no-instant>
  {% img '2017-07-29/stuckcaseopen' magick:resize:800> %}
</a>

It's possible to pull off the little covers with a little force, exposing the bare stick underneath.

<a href="{% asset_path '2017-07-29/bentstick' %}" data-no-instant>
  {% img '2017-07-29/bentstick' magick:1/4 %}
</a>

Turns out that what'd happened was that one of the sticks had gotten mangled in production. It ended up being a really simple fix - just grab a pair of pliers and bend it back towards the right. The sticks seemed like they were made out of metal, so I didn't have to be too gentle about it. Make sure that the sticks aren't pulled too forcefully, or the plastic housing around the circuitry might crack.

<a href="{% asset_path '2017-07-29/straightened' %}" data-no-instant>
  {% img '2017-07-29/straightened' magick:1/4 %}
</a>

<a href="{% asset_path '2017-07-29/stickboard' %}" data-no-instant>
  {% img '2017-07-29/stickboard' magick:1/4 %}
</a>

All that was left was to put the thing back together!

<a href="{% asset_path '2017-07-29/fixed' %}" data-no-instant>
  {% img '2017-07-29/fixed' magick:1/4 %}
</a>

Nowadays, I use it for most of my retro gaming. Not bad for something I had almost given up on!
