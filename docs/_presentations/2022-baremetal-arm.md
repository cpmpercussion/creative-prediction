---
layout: reveal
type: research
title: Creative Computing on the BBC Microbit with Bare-Metal ARM Assembly
theme: assets/revealthemes/crepre-dark.scss
center: true
revealified: true
---

{% include slides/title.html %}

{% include slides/welcometocountry.html %}

## Idea:

Teaching second-year computing by coding in ARM assembly on real hardware.

Goals:

- to build and cement mental models for computer organisation and code execution,
- have the transformational experience of running code right on the metal with no guard rails!

tl;dr: Can students do it? **yes!**

{% include slides/background-image.html
id="microbit"
image="assets/lectures/arm/microbit-header.jpg"
heading="BBC micro:bit v2"
bgcol="#000000"
opacity="0.8"
%}


{% include slides/background-image.html
id="microbit-mcus"
image="assets/lectures/arm/microbit-mcus.jpg"
bgcol="#000000"
opacity="1.0"
%}


## Bare-metal ARM Assembly - minimal example


{: style="font-size:0.8em;"}

```arm
    .thumb
    .syntax unified
        .global __reset

    .section .vectors
    .word __stack
    .word __reset

    .text
    .thumb_func
__reset:
    mov r0, #0
loop:
    add r0, #1
    nop
    b loop
```

Build and flash with [this](https://github.com/cpmpercussion/microbit-v2-baremetal/blob/main/nRF52833.ld) `.ld` file and [this](https://github.com/cpmpercussion/microbit-v2-baremetal/blob/main/Makefile) `Makefile`.

## COMP2300 template

{: style="font-size:0.8em;"}

```arm
.syntax unified
.global main

.type main, %function
main:
  nop
  ldr r0, =hello

  b main
.size main, .-main

.data
hello:
.word 0x424242
```

Short `startup.S` [program](https://github.com/cpmpercussion/microbit-vscode-simple/blob/master/lib/startup.S) to load static `.data` to RAM and setup interrupt vector

## Toolchain

- Visual Studio Code

- [COMP2300 extension](https://marketplace.visualstudio.com/items?itemName=comp2300-anu.comp2300-2021-extension)
  - [Cortex Debug Extension](https://github.com/Marus/cortex-debug)

- [COMP2300 toolchain](https://github.com/cpmpercussion/comp2300-toolchain)
  - [xPack](https://xpack.github.io/openocd/) OpenOCD
  - [xPack](https://xpack.github.io/arm-none-eabi-gcc/) GNU Arm Embedded GCC (`arm-none-eabi`) - `gcc`, `gdb`, `ld`, `objcopy`, `as`
  - [COMP2300 discoserver](https://github.com/cpmpercussion/comp2300-discoserver): ARM m4 CPU emulator (by Benjamin Grey)
  - `make`

- [baremetal microbit vscode template](https://github.com/cpmpercussion/microbit-vscode-simple)
- [baremetal example](https://github.com/cpmpercussion/microbit-v2-baremetal)

## Context: Computer Organisation and Program Execution

- COMP2300/COMP6300
- 2nd year computing course, obligatory for all undergraduate computing majors, equivalent to "intro to computer systems".
- Since 2020: >400 students at start of semester, 325 passed in 2022.
- Lectures and labs [available online](https://comp.anu.edu.au/courses/comp2300/)

---

1. Digital Logic, CPU architecture (high level)
2. Machine instructions, ALU operations
3. Memory and memory instructions
4. Conditional execution and control flow
5. Functions
6. Toolchains and Compilers
7. Data structures in ASM
8. Interrupts, context switches, asynchronism
9. Networks
10. Operating Systems
11. CPU architectures
12. Revision



{% include slides/background-image.html
id="megabit"
image="assets/lectures/arm/megabit.jpg"
heading="Learning Activities"
bgcol="#000000"
opacity="0.8"
%}

{:.fragment}
Labs: **core of the course** starts with `mov r0, #1`, ends with implementing context switching between two programs (YourNameOS 1.0).

{:.fragment}
Assignments: **two** open-ended, creative programming tasks in ARM assembly.

{% include slides/background-image.html
id="lightshow"
image="assets/lectures/arm/arno-senoner-FDtJZDU8kws-unsplash.jpg"
heading="Assignment 1: Lightshow"
bgcol="#000000"
opacity="0.8"
%}

use the LEDs to create a [light show](https://comp.anu.edu.au/courses/comp2300/assessments/light-show/) that changes over time

**can** use the speaker to create [sound](https://comp.anu.edu.au/courses/comp2300/labs/05-sound-and-light/)

**input** peripherals not allowed!

## Lightshow Scaffolding

Need:

- ALU operations: `add`, `sub`
- memory operations: `ldr`, `str`
- conditional branching: `ble` etc
- control structions: if/then/while/for in ASM ([Blinky](https://comp.anu.edu.au/courses/comp2300/labs/04-blinky/))

Helps:

- functions
- shifting operations
- reading comprehension of the nrf52833 manual 


{% include slides/background-video.html
id="microbit-show-ball"
video="assets/lectures/arm/microbit-show-ball.mp4"
bgcol="#000000"
opacity="1.0"
%}

{% include slides/background-image.html
id="digitalpet"
image="assets/lectures/arm/cosmoh-love-unlm6Fxxvjw-unsplash.jpg"
heading="Assignment 2: Digital Pet"
bgcol="#000000"
opacity="0.8"
%}

must use the LED display to show a [digital pet](https://comp.anu.edu.au/courses/comp2300/assessments/digital-pet/)

must use (at least one) data structure in memory to store the “state” of the digital pet

must use interrupts to detect interactions with the microbit’s buttons

**can** use sound and **any** peripheral available on the microbit

## Digital Pet Scaffolding:

Need:

- functions `bl`, `bx lr`
- memory directives, labels, `ldr=` pseudo-instruction
- calling convention
- **interrupts** ([Buttons and Interrupts](https://comp.anu.edu.au/courses/comp2300/labs/08-interrupts/))
- arrays/structs in ASM

Helps:

- SysTick and timers
- high comprehension of the nrf52833 manual
- patience


{% include slides/background-image.html
id="connections"
image="assets/lectures/arm/john-carlisle-539580-unsplash.jpg"
heading="IO and Networks"
bgcol="#000000"
opacity="0.8"
%}

How can computers connect to each other? How can we interpret voltage on a wire?

Interrupts leads to parallel or serial data transmission.

Construct basic UART (RS232/Serial) from first principles and using on-chip peripherals

## Serial Output


![]({% link assets/lectures/arm/0b10101010.jpg %}){:style="width:50%;"}

## MIDI

![]({% link assets/lectures/arm/midi-message.png %})

{% include slides/background-image.html
id="serial-experiments"
image="assets/lectures/arm/serial-experiments-charles.jpg"
heading="Serial Experiments Charles"
bgcol="#000000"
opacity="0.8"
%}

{% include slides/background-video.html
id="microbit-midi-demo"
video="assets/lectures/arm/midi-demo-720.mp4"
bgcol="#000000"
opacity="1.0"
%}




{% include slides/background-image.html
id="jurassic-park"
image="assets/lectures/arm/jurassic-park-unix-2.jpg"
heading="It's a UNIX system! I know this!"
bgcol="#000000"
opacity="0.8"
%}

{:.fragment}
Lightning intro to operating systems. What's the connection to ARM?

{:.fragment}
context switch, threads, scheduling, privilege, supervisor calls, exception model...

## YourOS 1.0

_Challenge Lab_: build a handcrafted context switch, then change between two programs (blinking one LED vs another)

```
.data
process_table:
.word 0 @ index of currently-operating process
.word 0x20008000 @ stack pointer 1
.word 0x20007000 @ stack pointer 2
```


{% include slides/background-image.html
id="macrobit"
image="assets/lectures/arm/macrobit.jpg"
heading="Reflections"
bgcol="#000000"
opacity="0.8"
%}

{:.fragment}
What can go wrong?

{:.fragment}
What can go right?

## What can go wrong? Surprisingly little!

**Don't tell the students "be careful"!**

- 1-2 instances of students breaking microbit
- 2 instances of bricking the microbit

Turns out: turning the GPIO on/off as fast as possible (1 cycle loop) messes up
the USB connection: saved by special firmware prepared by microbit developers
for us.

## What can go right?

Assessments students want to do (crazy concept)

"This is the best course I've ever taken"

"I thought assembly would be boring, but it was really fun!"

"I feel like I learnt a lot from taking this course."




