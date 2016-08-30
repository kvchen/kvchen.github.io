---
title: Discussion 1 Notes
layout: post
---

# Installing `gdb`

**Mac users**: I recommend you use a package installer like [Homebrew](http://brew.sh/) in order to install `gdb`. After installing Homebrew, simply run:

```
brew install gdb
```

Homebrew should then complain that you need to codesign your `gdb` binary. To do this, [follow the instructions on the gdb wiki](https://sourceware.org/gdb/wiki/BuildingOnDarwin). Make sure you follow the instructions _exactly_, or it won't work! You'll know if it doesn't work if you try to debug a binary and you see this error message:

```
Starting program: my_cool_program
Unable to find Mach task port for process-id 28885: (os/kern) failure (0x5).
 (please check gdb is codesigned - see taskgated(8))
```


**Linux users**: Use the package manager associated with your distro. For example,

```
sudo apt install gdb
sudo pacman -S gdb
```


**Windows users**: I recommend that you spin up a Ubuntu VM in VirtualBox for the remainder of this course. You're welcome to try the recently announced Linux subsystem on Windows, but I've had problems getting things working on it in the past and it's not the best user experience.
