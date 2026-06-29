# HALO — Editorial

A warm-editorial marketing site for **HALO**, the premium portable fly fan: cream
and ink, Cormorant Garamond serif headlines, and a pure-CSS render of the device
that recolors live across three anodized finishes.

This is the production implementation of the *Halo Site — Editorial* design,
exported from [Claude Design](https://claude.ai/design). The original prototype
and the design conversation are preserved under [`project/`](project/) and
[`chats/`](chats/) for reference.

## Running it

It's a static site — no build step, no dependencies. Open `index.html` directly,
or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## What's here

```
index.html        Page markup + the product-render <template>
css/styles.css     All styling, the CSS product render, and responsive rules
js/main.js         Finish picker, product-render stamping, mobile nav
project/           Original Claude Design prototype + components (reference)
chats/             Design conversation transcript (reference)
```

## How it works

- **The product render** is built entirely in CSS (`.halo-*` rules) — a
  telescoping anodized base with an engraved wordmark and USB-C port, a
  multi-stage mast, and a spinning "halo" canopy. A single `<template>` is
  stamped into each mount point by `main.js`.
- **Finishes** are driven by `data-finish` on each `.halo-mount`
  (`champagne` · `spaceGray` · `obsidian`), which switches a set of CSS custom
  properties. The swatch picker in the Finishes section updates the two
  dynamic renders (Finishes + Buy) and the finish-name labels live.
- **Deployed vs. resting** is toggled with `data-deployed` — a spinning,
  glowing canopy when running, folded blades when off.
- **Photo slots** (dinner table, aluminum macro, patio) are styled placeholders
  ready to be replaced with real `<img>` tags when photography is available.

## Sections

Announcement bar · sticky nav · hero · placement marquee · The Object
(telescoping mast / centrifugal blades / material) · The Engineering (dark band)
· Finishes (interactive) · For Venues (B2B) · Reviews · Buy · footer.
