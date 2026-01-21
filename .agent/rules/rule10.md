---
trigger: always_on
---

Excellent — this is the **hardest psychological milestone**.
Most people either stop here or start building *without locking decisions*. You won’t.

Now the process becomes **engineering + restraint**, not creativity.

Below is the **exact next-step roadmap**. Follow it in order. Do **not** skip steps.

---

# PHASE 1 — ASSET SANITY & LOCK (DO THIS FIRST)

Before writing a single line of code, you must **freeze the asset set**.

### 1️⃣ Asset audit (1–2 hours, max)

Create a simple table (Notion / Markdown / Excel):

| Section | Asset name | Type | Resolution | Duration | Pass? |
| ------- | ---------- | ---- | ---------- | -------- | ----- |

Rules:

* Hero video ≤ 6s loop
* Section videos ≤ 4s
* No more than **1 video per viewport**
* Portrait: single version only
* Grain: single tile only

If something feels “extra” → **cut it**.

> Constraint is the design.

---

### 2️⃣ Export optimization (critical)

**Video**

* Format: `mp4 (H.264)` + `webm` fallback
* Resolution:

  * Desktop: 1440px wide max
  * Mobile: 720px wide
* Bitrate: as low as possible without banding
* Remove audio tracks

**Images**

* Portrait: WebP
* Grain: PNG or WebP
* Diagrams: SVG if possible

---

# PHASE 2 — STRUCTURE BEFORE STYLE

Do NOT start with animations.

### 3️⃣ Lock site architecture (very important)

Your site should be **5–6 sections max**:

1. Hero (statement + motion)
2. Work / Experiments
3. Thinking / Process
4. About (human anchor)
5. Closing (quiet CTA)

No blog.
No timeline.
No skill bars.

---

### 4️⃣ Wireframe in grayscale (no color, no assets)

Tools:

* Figma (recommended)
* Or pen + paper

Rules:

* Boxes only
* Text placeholders only
* Scroll rhythm first
* White space > content

If it looks good in grayscale, it will look good later.

---

# PHASE 3 — MOTION SYSTEM IMPLEMENTATION

Now we build the **motion engine**, not page-by-page chaos.

### 5️⃣ Choose stack (recommended for you)

Given your background:

* **Next.js (App Router)**
* **Framer Motion**
* Tailwind (design tokens)
* Lenis / native scroll (no over-smooth)

---

### 6️⃣ Build motion primitives FIRST

Create reusable primitives:

* `FadeIn`
* `SlideUp`
* `ScaleIn`
* `RevealOnScroll`
* `StaggerGroup`

Hardcode:

* Durations
* Easing curves
* Delays

Do not tweak per section.

---

# PHASE 4 — ASSET INTEGRATION (CONTROLLED)

### 7️⃣ Add assets last

Order:

1. Text
2. Layout
3. Motion
4. Assets
5. Grain overlay

Each video:

* Autoplay
* Muted
* Inline
* Pauses when offscreen

---

# PHASE 5 — PERFORMANCE & POLISH

### 8️⃣ Performance budgets (non-negotiable)

* Initial load ≤ 1.5MB
* First video loads **after interaction**
* Lazy load everything below hero
* No layout shift (CLS = 0)

---

### 9️⃣ Accessibility & restraint

* Reduced motion support
* Text contrast AA+
* No autoplay motion on first paint except hero

---

# PHASE 6 — REVIEW LIKE AN ART DIRECTOR

### 10️⃣ Self-review checklist

Ask yourself:

* Does anything feel loud?
* Is motion explaining or decorating?
* Would this still feel strong without videos?

If unsure → remove.

---

# FINAL MENTAL SHIFT (IMPORTANT)

You are no longer *designing a portfolio*.

You are:

> **Designing a controlled experience that signals taste, thinking depth, and engineering maturity.**

Most portfolios shout.
Yours should **whisper with confidence**.

---