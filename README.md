# Attendance 75 Calculator

> **A clean, focused attendance percentage calculator for students** — inspired by attendance75.in's simplicity, built with Astro v5 & Tailwind CSS v4, styled with Vercel's Geist design system.

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Astro](https://img.shields.io/badge/Astro-v5-FF5D01?logo=astro)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?logo=tailwindcss)

## ✨ Features

### 🎯 **Quick Calculator** (Main Tab)
- **Instant calculations** as you type — no "Calculate" button needed
- **Preset percentage targets**: 60%, 65%, 70%, 75%, 80%, 85%, 90% + custom input
- **Smart results** showing:
  - Current attendance percentage with color-coded status (Safe/Borderline/Shortage)
  - Exact number of classes you can safely **bunk** while maintaining your target
  - Exact number of consecutive classes you must **attend** to reach your target
- **Clean, centered card interface** — minimalist design inspired by attendance75.in

### 🔮 **What-If Simulator** (Tab 2)
- Interactive slider to preview future attendance scenarios (0-30 classes)
- Toggle between **"Attend Next Classes"** and **"Bunk Next Classes"** modes
- Real-time projection of your new attendance percentage

### 📚 **Multi-Subject Tracker** (Tab 3)
- Track all your subjects in one place
- Data persists in browser `localStorage` — completely private
- Overall semester average calculation
- Add/edit/delete subjects with custom targets per subject

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Design Philosophy

**Inspired by:** [attendance75.in](https://www.attendance75.in/) — ultra-simple, focused, single-purpose calculator  
**Design System:** Vercel's Geist — near-white canvas (`#fafafa`), near-black ink (`#171717`), crisp hairline borders (`#ebebeb`), Geist Sans typography  
**Core Principles:**
- **Instant feedback** — calculations happen as you type
- **Zero clutter** — only essential UI elements
- **Privacy-first** — all calculations in-browser, no data sent to servers
- **Mobile-optimized** — fully responsive, works great on phones

## 📐 Calculation Formulas

### Case 1: Attendance ≥ Target % (You're Safe)
**Classes you can bunk:**
```
Bunk = ⌊(Attended / Target%) - Total⌋
```

### Case 2: Attendance < Target % (Need to Recover)
**Consecutive classes you must attend:**
```
Attend = ⌈(Target% × Total - Attended) / (1 - Target%)⌉
```

## 🛠 Tech Stack

- **[Astro v5](https://astro.build)** — Fast static site generator with islands architecture
- **[Tailwind CSS v4](https://tailwindcss.com)** — Modern utility-first CSS with `@theme` tokens
- **Vanilla TypeScript** — Lightweight interactive components, no framework overhead
- **localStorage API** — Client-side persistence for multi-subject tracking
- **Geist Fonts** — Clean, modern typography (Geist Sans + Geist Mono)

## 📁 Project Structure

```
attendance75calculator.com/
├── src/
│   ├── components/
│   │   └── AttendanceApp.astro      # Main tabbed app (Quick/WhatIf/Semester)
│   ├── layouts/
│   │   └── Layout.astro             # Base layout with nav & footer
│   ├── pages/
│   │   └── index.astro              # Clean centered landing page
│   └── styles/
│       └── app.css                  # Tailwind v4 config + Geist design tokens
├── astro.config.mjs                 # Astro + Tailwind Vite plugin config
├── package.json
└── README.md
```

## 🎯 Use Cases

- **Students** tracking college/school attendance to maintain 75% minimum
- **Quick planning** — "Can I skip Friday's class?"
- **Recovery planning** — "How many classes in a row must I attend?"
- **Semester overview** — Track multiple subjects simultaneously

## 🔒 Privacy

- ✅ **No sign-up required**
- ✅ **No server-side tracking**
- ✅ **No analytics or cookies**
- ✅ **Data never leaves your browser**
- ✅ **localStorage only** (for multi-subject tracker)

## 🌐 Deployment

Static site — deploy to any platform:

```bash
# Build static files
npm run build

# Output directory: dist/
```

**Recommended platforms:**
- [Vercel](https://vercel.com) (one-click deploy)
- [Netlify](https://netlify.com)
- [Cloudflare Pages](https://pages.cloudflare.com)
- [GitHub Pages](https://pages.github.com)

## 📝 License

MIT License — free to use, modify, and distribute.

## 🙏 Credits

- Design inspiration: [attendance75.in](https://www.attendance75.in/)
- Visual design system: [Vercel Geist](https://vercel.com/design)
- Fonts: [Geist Sans & Geist Mono](https://vercel.com/font) by Vercel
- Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com)

---

**Made with ❤️ for students who need a simple, fast, private attendance calculator.**
