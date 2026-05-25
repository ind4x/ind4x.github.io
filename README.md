# icarus.sys // Portfolio v2.26

A high-performance, immersive personal portfolio website built with a Cyberpunk / Industrial aesthetic. This repository houses the digital identity of Youssef Fellah, showcasing software engineering expertise, academic achievements, and professional experience.

> **LIVE ACCESS:** [yss-ef.github.io](https://yss-ef.github.io)

---

## Technical Overview

The system is built for speed and impact, utilizing modern web standards to create a terminal-like HUD (Heads-Up Display) experience without the overhead of heavy frameworks.

### **Core Stack**
*   **Engine:** Vanilla HTML5 / Modern CSS3 (SCSS Logic)
*   **Logic:** Modern JavaScript (ES6+)
*   **Iconography:** Lucide Icons (Dynamically injected)
*   **Typography:** Google Fonts (Share Tech Mono, Cormorant Garamond, Syne)
*   **Hosting:** GitHub Pages

---

## System Features

### 1. **Boot Sequence Logic**
The application features a simulated OS initialization sequence (INITIALIZING ICARUS_OS...). This is handled via asynchronous JavaScript to ensure a seamless transition from the boot screen to the main interface once all assets are loaded.

### 2. **Reactive UI & Motion**
*   **Adaptive Cursor:** A custom-engineered bracketed cursor system that reacts to mouse movement with acceleration physics.
*   **Dynamic Grid:** The background grid system utilizes CSS custom properties (--mouse-x, --mouse-y) updated in real-time by JS to create a reactive light-follow effect.
*   **Impact Effects:** Flash feedback on specific system events (like boot completion) to reinforce the industrial feel.

### 3. **Thematic Engine**
The site features a dual-state theme engine (Light/Dark mode) that persists across sessions. The transition includes a custom animation for the icon swap and a global CSS variable shift to maintain the high-contrast aesthetic.

### 4. **Responsive Architecture**
The HUD layout is designed with flexbox and grid, ensuring that the "Terminal" experience scales perfectly from desktop monitors to mobile devices without losing its industrial character.

---

## System Directory

```text
├── index.html   # Core structure & HUD layout
├── style.css    # Industrial design system & animations
├── script.js    # System logic, boot sequence & reactive UI
└── .git         # Version control history
```

---

## Installation & Modification

To run the system locally:

1. **Clone the repository:**
   ```bash
   git clone git@github.com:yss-ef/yss-ef.github.io.git
   ```
2. **Launch:**
   Open `index.html` in any modern browser. No build step required.

---

## Operator Profile

*   **Role:** Full Stack Engineer (Class of 2026)
*   **Specializations:** Spring Boot, Angular, Blockchain (Solidity), AI (RAG Systems)
*   **Current Mission:** Alternance at Broker Immobilier
*   **Base:** Casablanca, Morocco

Authored by Youssef Fellah.  
Personal Project.
