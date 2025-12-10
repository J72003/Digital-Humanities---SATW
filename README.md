
# Streetwear Around the World (NYC Prototype)

A digital humanities prototype exploring how streetwear is shaped by place, power, and cultural memory. This first build focuses on **New York City** as a proving ground for a larger global project.

I designed this site as an interactive, narrative-driven experience that connects four NYC sites to the politics of race, capitalism, identity, and cultural ownership. The goal is to make a clear argument through spatial storytelling, timeline logic, and material “evidence” (garments).

---

## Project Thesis

**New York streetwear is spatial.**  
It doesn’t emerge from the city in a generic way—it evolves through specific neighborhoods with distinct histories, economies, and cultural politics. This prototype makes that claim visible through four anchor sites.

---

## What This Prototype Covers (NYC)

1. **South Bronx**  
   Block parties, early hip-hop style, sportswear as survival and identity.

2. **Harlem (Dapper Dan)**  
   Bootleg luxury, Black dandyism remixed, and the long history of criminalized innovation that later becomes corporate heritage.

3. **SoHo (Supreme)**  
   Skate culture, hype economics, scarcity, and the conversion of subculture into global business.

4. **Brooklyn Museum**  
   Institutional recognition: sneakers moving from street object to curated cultural artifact.

---

## Core Sections

- **Hero + Overview**  
  Sets the project scope and frames the NYC-first approach.

- **City Map Overview**  
  A simplified map that acts like a navigation hub for the four sites.

- **Site Exhibits**  
  Each site includes:
  - Core question  
  - Context narrative  
  - Concept tags  
  - Garment as evidence

- **Timeline**  
  A chronological bridge showing how streetwear moves from localized survival logic to institutional and corporate power.

- **Garments as Evidence**  
  A curated grid of visual artifacts that turn style into argument.

- **Power & Global Teaser**  
  A forward-looking framework that sets up the expansion beyond NYC.

- **Sources + Inline Citations**  
  All claims are tied to a structured sources section.

---

## My Goals With This Build

- Prove the concept for a larger worldwide map + archive.
- Combine **storytelling + argument + interface** in one coherent experience.
- Make spatial logic legible without overwhelming the reader.
- Create something strong enough for a digital humanities showcase, poster, or research demo.

---

## Tech Stack

- **React + Vite**
- **CSS (custom design system)**
- **Framer Motion** (light UI animation)
- **Three.js** (installed for future global visualization)
- **Leaflet / d3-geo / world-atlas** (installed for future real basemap integration)
- **GitHub Pages** deployment via `gh-pages`

---

## Local Development

```bash
npm install
npm run dev
````

---

## Build

```bash
npm run build
npm run preview
```

---

## Deployment (GitHub Pages)

This project uses `gh-pages` to deploy the `dist` folder.

```bash
npm run build
npm run deploy
```

---

## Updating the Live Site

Whenever I change content, styles, or images, I use:

```bash
git add .
git commit -m "Update site"
git push
npm run build
npm run deploy
```

---

## Assets

Garment images are stored here:

```bash
src/assets/garments/
```

Current set includes:

* `bronx-tracksuit.jpg`
* `gold-rope-chain.jpg`
* `dapper-dan-jacket.jpg`
* `air-force-1.jpg`
* `supreme-box-logo.jpg`
* `air-jordans-museum.jpg`

---

## Why This Matters

This project is about more than aesthetics.
It tracks how style becomes a system of meaning and power:

* How Black and brown cultural production is born under pressure.
* How “bootleg” and “illegal” innovation becomes luxury validation years later.
* How subculture gets transformed into corporate strategy.
* How institutions reframe streetwear into heritage once it becomes valuable enough to archive.

---

## Roadmap

### Next Build Phase (NYC → Real Map)

* Replace the schematic map with a **true NYC basemap**.
* Add neighborhood geometry and interactive layers.
* Expand the map from 4 anchor sites to sub-nodes and micro-histories.

### Expansion (Global)

* Add international nodes:

  * Tokyo
  * London
  * Paris
  * Seoul
  * Lagos
  * Mexico City
  * etc.
* Build an archive system for:

  * photos
  * oral histories
  * museum records
  * brand timelines
  * local subculture shifts

### Research Enhancements

* Add filtering by:

  * era
  * power theme
  * garment type
  * cultural movement
* Add a lightweight data model for citations and artifacts.


