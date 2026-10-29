# ind4x.github.io

Personal engineering portfolio and technical specification dossier of **Youssef Fellah**, Software Engineer specializing in Distributed Backend Systems, Formal Design (UML 2.5, BPMN 2.0, Clean Architecture, DDD), Information Systems Security, and AI Agents Orchestration (Multi-Agent Systems, MCP, Autonomous Workflows, RAG Pipelines).

Live at: [ind4x.github.io](https://ind4x.github.io)

---

## Design System & Architecture

The site implements an **Industrial Technical Studio** design system inspired by [getartcraft.com](https://getartcraft.com/) and Neo-Brutalist craft:

### Typographic Trinity
- **Display Sans:** Inter (Structural headings, navigation, and body hierarchy)
- **Editorial Serif:** Instrument Serif (Italic expressive keywords for editorial contrast)
- **Technical Monospace:** JetBrains Mono (HUD telemetry labels, indices, metadata, and specification badges)

### Color Tokens & Theming
Natively supports dynamic dual-state theming derived systematically from **Sanzō Wada's *A Dictionary of Color Combinations* (Combination ID 340)**:
- **Black (`#111314`)**: Primary ink and dark-mode technical background.
- **Neutral Gray (`#b6bfc1`)**: Hairline dividers, 1px structural grid lines, and muted secondary tones.
- **Peach Red (`#f15a30`)**: Signature architectural accent and active indicators.
- **Sea Green (`#00b49b`)**: Real-time telemetry, verification status, and credential badges.

#### State Configurations:
- **Light Theme (`:root`):**
  - Canvas: `#f4f5f5` (warm concrete paper subtly imbued with Neutral Gray)
  - Surfaces: `#ffffff` (raised), `#e7eaeb` (sunken)
  - Ink: `#111314` (Sanzō Wada Black)
  - Accent: `#f15a30` (Sanzō Wada Peach Red)
  - Telemetry: `#00b49b` (Sanzō Wada Sea Green)
  - Hairlines: `rgba(17, 19, 20, 0.14)`
- **Dark Theme (`[data-theme="dark"]`):**
  - Canvas: `#111314` (Sanzō Wada Black)
  - Surfaces: `#181b1c` (raised), `#0c0d0e` (sunken)
  - Ink: `#f4f5f5`
  - Accent: `#f15a30` (Sanzō Wada Peach Red)
  - Telemetry: `#00b49b` (Sanzō Wada Sea Green)
  - Hairlines: `rgba(182, 191, 193, 0.16)` (Sanzō Wada Neutral Gray)

### Architectural Motifs
- **True 1px Grid:** Utilizes `gap-px bg-line` container pattern to guarantee exact 1px hairline separation without overlapping borders.
- **Precision Crosshairs (`.tick`):** Corner registration marks applied to technical specification cards and media viewports.
- **Modular 48px Header (`h-12`):** Unified navigation cells with full vertical stretch and high-contrast invert hover states.

---

## Technical Specifications

- **Engine:** Semantic HTML5, CSS Custom Properties, Tailwind CSS
- **Logic:** Vanilla JavaScript (ES6+), `localStorage` theme persistence, Intersection Observer
- **Iconography:** Lucide Icons
- **Performance:** Pre-converted WebP avatar assets (<50 KB), CSS Grid fractional height transitions (`grid-template-rows`), zero layout-thrashing animations.
- **Accessibility:** Full WCAG 2.1 compliance with `@media (prefers-reduced-motion: reduce)` support, explicit element dimensions, high-contrast micro-labels, and safe DOM manipulation.

---

## Local Development

No build pipeline or server runtime required:

```bash
git clone git@github.com:ind4x/ind4x.github.io.git
cd ind4x.github.io
# Open index.html directly in any modern browser
```

---

## Author & Contact

- **Author:** Youssef Fellah ([ind4x_](https://github.com/ind4x))
- **Email:** fellahyoussef010@gmail.com
- **LinkedIn:** [linkedin.com/in/yss-ef](https://linkedin.com/in/yss-ef)
- **Portfolio:** [ind4x.github.io](https://ind4x.github.io)

