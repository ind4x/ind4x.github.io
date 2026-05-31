# Icarus.sys portfolio

This repository contains the source code for the personal portfolio website of
Youssef Fellah. The site features a terminal-inspired interface designed to
showcase software engineering expertise, academic achievements, and professional
experience.

The live site is accessible at [yss-ef.github.io](https://yss-ef.github.io).

## Technical overview

The system utilizes modern web standards to provide a high-performance,
immersive experience without the overhead of heavy frameworks.

### Core stack

- Engine: Vanilla HTML5 and modern CSS3 (SCSS)
- Logic: Modern JavaScript (ES6+)
- Iconography: Lucide Icons
- Typography: Google Fonts (Share Tech Mono, Cormorant Garamond, Syne)
- Hosting: GitHub Pages

## System features

### Boot sequence logic

The application implements a simulated operating system initialization sequence.
Asynchronous JavaScript manages the transition from the boot screen to the main
interface once all assets load.

### Reactive UI and motion

- Adaptive cursor: A custom cursor system reacts to mouse movement using
  acceleration physics.
- Dynamic grid: The background grid uses CSS custom properties updated in
  real-time to create a reactive light-follow effect.
- Impact effects: Flash feedback reinforces the industrial aesthetic during
  system events.

### Thematic engine

The site includes a dual-state theme engine that persists across sessions. A
custom animation handles icon transitions, while global CSS variables maintain
high-contrast aesthetics.

### Responsive architecture

The layout uses Flexbox and Grid to ensure the terminal experience scales across
desktop and mobile devices while maintaining its industrial character.

## System directory

```text
├── index.html   # Core structure and HUD layout
├── style.css    # Industrial design system and animations
├── script.js    # System logic, boot sequence, and reactive UI
└── .git         # Version control history
```

## Installation and modification

Follow these steps to run the system locally:

1. Clone the repository:
   ```bash
   git clone git@github.com:yss-ef/yss-ef.github.io.git
   ```
2. Launch the application:
   Open `index.html` in a modern browser. No build step is required.

## Operator profile

- Role: Full Stack Engineer (Class of 2026)
- Specializations: Spring Boot, Angular, Solidity, AI (RAG Systems)
- Current Mission: Alternance at Broker Immobilier
- Base: Casablanca, Morocco

Authored by Youssef Fellah.
Personal project.
