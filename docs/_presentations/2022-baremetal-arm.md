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

Teaching second-year computing with a focus on coding in ARM assembly on real hardware.

Using live-coding in lectures, and lab activities to scaffold substantial open-ended creative projects.

Goal is to build and cement mental models for computer organisation and code execution, and have the transformational experience of running code right on the metal with no guard rails!

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
heading="BBC micro:bit v2"
bgcol="#000000"
opacity="0.8"
%}


## Bare-metal ARM Assembly

- Coding programs on the BBC micro:bit in assembly
- No libraries! 
- Need to access micro:bit hardware directly to do anything:
   - turn on LEDs
   - access buttons
   - use timers
   - activate speaker
   - use non-volatile memory


## Context: Computer Organisation and Program Execution

- COMP2300/COMP6300
- 2nd year computing course, obligatory for all undergraduate computing majors, equivalent to "intro to computer systems".
- Since 2020: >400 students at start of semester, 325 passed in 2022.
- Lectures and labs [available online](https://comp.anu.edu.au/courses/comp2300/)

## Topics:

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


## Labs

**Core of the course:** 12 3-hour lab sessions where students code (almost) exclusively in ARM assembly.

Starts with `mov r0, #1`, ends with implementing context switching between two programs (YourNameOS 1.0).

Crucial labs:

- 4. [Blinky](https://comp.anu.edu.au/courses/comp2300/labs/04-blinky/)
- 5. [Sound and Light](https://comp.anu.edu.au/courses/comp2300/labs/05-sound-and-light/)
- 8. [Buttons and Interrupts](https://comp.anu.edu.au/courses/comp2300/labs/08-interrupts/) 
- 9. [Inputs and Outputs](https://comp.anu.edu.au/courses/comp2300/labs/09-inputs-and-outputs/)

## Assessments

Two assignments:

- [Light Show](https://comp.anu.edu.au/courses/comp2300/assessments/light-show/)
- [Digital Pet](https://comp.anu.edu.au/courses/comp2300/assessments/digital-pet/)

Both open-ended and highly scaffolded by previous labs. 

Students required to complete a "pre-submission" for each one, and explain to their tutor what they plan to do, and how they will do it.

## What can go wrong? Surprisingly little!

**Don't tell the students "be careful"!**

- 1-2 instances of students breaking microbit
- 2 instances of bricking the microbit

Turns out: turning the GPIO on/off as fast as possible (1 cycle loop) messes up the USB connection: saved by special firmware prepared by microbit developers for us.

## What can go right?





