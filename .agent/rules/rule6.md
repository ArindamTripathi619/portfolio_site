Excellent — this is where your portfolio gets its **“this feels expensive”** quality.

Below is a **locked, production-ready motion system**: durations, easing curves, delays, scroll coupling, and rules of precedence. You can hand this directly to **Framer Motion / GSAP / CSS** and never second-guess motion again.

---

# 🎬 MOTION SYSTEM — DEFINITIVE SPEC

## 🧠 MOTION PHILOSOPHY (ONE RULE)

> **Motion must feel like consequence, not reaction.**

Nothing snaps.
Nothing rushes.
Nothing begs attention.

---

# 1️⃣ GLOBAL TIMING SCALE (FOUNDATION)

All motion derives from this scale.

| Tier       | Duration        | Use Case                |
| ---------- | --------------- | ----------------------- |
| Ultra-fast | **120–160ms**   | Cursor feedback only    |
| Fast       | **240–320ms**   | Micro hover glow        |
| Medium     | **420–560ms**   | Buttons, small reveals  |
| Slow       | **800–1000ms**  | Section entrances       |
| Cinematic  | **1200–1600ms** | Hero, major transitions |

🚫 Never exceed **1600ms**
🚫 Never go below **120ms**

---

# 2️⃣ EASING CURVES (LOCKED SET)

You are allowed **only these curves**.

## Primary Ease (Default — 90% usage)

```
cubic-bezier(0.4, 0.0, 0.2, 1)
```

**Feels like:** calm, intentional
Use for:

* Text entrance
* Image fade/slide
* Section transitions

---

## Soft Ease-Out (Reveals)

```
cubic-bezier(0.16, 1, 0.3, 1)
```

**Feels like:** gentle arrival
Use for:

* Large visuals
* Hero elements
* Cinematic loops syncing

---

## Linear (ONLY for continuous motion)

```
linear
```

Use **only** for:

* Ambient background drift
* Infinite loops
* Noise/grain movement

🚫 Never use linear for entrances

---

## Forbidden Eases 🚫

* ease-in
* ease-out
* ease-in-out (default CSS)
* elastic
* bounce
* spring (unless critically damped)

---

# 3️⃣ ENTRANCE ANIMATION RULES

### Default entrance pattern (MOST IMPORTANT)

**Order of appearance:**

```
Background → Visual → Heading → Body → Accent
```

### Entrance spec (text example)

* Opacity: 0 → 1
* TranslateY: 12px → 0
* Duration: **900ms**
* Delay: **120ms after background**
* Ease: `cubic-bezier(0.4,0,0.2,1)`

🚫 Text must **never** appear before its background.

---

# 4️⃣ HERO SECTION MOTION (SPECIAL)

### Hero background

* Starts animating immediately
* Loop duration: **6–8s**
* Ease: `linear`

### Hero text

* Delay: **400–600ms**
* Duration: **1200ms**
* Ease: `cubic-bezier(0.16,1,0.3,1)`

**Rule:**

> The page should feel alive *before* it speaks.

---

# 5️⃣ SCROLL-DRIVEN MOTION (APPLE-STYLE)

## Scroll behavior

* Slight inertia
* No snapping (unless horizontal section)
* Small lag is intentional

### Scroll-to-motion mapping

| Property  | Range                       |
| --------- | --------------------------- |
| Translate | ±24px max                   |
| Scale     | 1 → **1.03 max**            |
| Opacity   | 0 → 1 (never reverse fully) |
| Blur      | 8px → 0px                   |

🚫 Never exceed scale 1.03
🚫 Never animate rotation on scroll

---

# 6️⃣ HOVER & MICRO-INTERACTIONS

### Hover rule

> **Hover should feel like acknowledgment, not excitement.**

**Hover timing**

* Delay: **80–120ms**
* Duration: **240–320ms**
* Ease: `cubic-bezier(0.4,0,0.2,1)`

### Allowed hover effects

* Glow intensity change
* Opacity shift
* Very small translate (2–4px)

🚫 No scale pop
🚫 No color jump

---

# 7️⃣ LOOPING AMBIENT MOTION

Used for:

* Background visuals
* Abstract assets
* Grain/noise

### Loop specs

* Duration: **4000–8000ms**
* Ease: `linear`
* Loop must be **seamless**

Rule:

> If you can notice the loop point, it’s wrong.

---

# 8️⃣ SECTION TRANSITIONS

### Section enter

* Trigger: 15–20% viewport visible
* Duration: **900–1100ms**
* Stagger (if multiple elements): **120ms**

### Section exit

* Never animate exit unless storytelling demands it
* Let content fade naturally

---

# 9️⃣ STAGGER SYSTEM (VERY IMPORTANT)

For grouped elements:

* Stagger delay: **80–120ms**
* Max items per stagger group: **5**
* Reset stagger on scroll re-entry

🚫 Never cascade more than 5 items
🚫 Never stagger paragraphs line-by-line

---

# 🔕 10️⃣ REDUCED MOTION MODE (MANDATORY)

If `prefers-reduced-motion: reduce`:

* Disable parallax
* Disable loops
* Reduce durations by **50%**
* Replace motion with opacity only

This is a **quality signal**, not just accessibility.

---

# 🧭 MOTION PRECEDENCE RULES

When multiple animations conflict:

```
User scroll > Section transition > Loop > Micro-motion
```

User action always wins.

---

# 🔐 FINAL MOTION LOCK (SAVE THIS)

> **Motion in this portfolio is slow, deliberate, and inevitable — like thought becoming form.**

If motion:

* Feels playful → slow it
* Feels fast → delay it
* Feels impressive → remove it

---