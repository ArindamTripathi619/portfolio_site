# Apple-Inspired Systems Engineering Portfolio

A cinematic, video-first personal portfolio website designed to convey "Quiet Intelligence" and systems thinking depth. Built with Next.js 14, Framer Motion, and Tailwind CSS.

![Portfolio Preview](./public/assets/images/my_image.webp)

## 🌟 Key Features

### 🎬 Cinematic Experience
- **Video-First Design**: 97% of assets are video loops, creating an immersive, kinetic atmosphere.
- **Hero Sequence**: Instant-load cinematic intro with no black-screen delays.
- **Restrained Aesthetics**: "Ink Black" theme with controlled typography and negative space.

### 🧩 Engineering Depth
- **ASCII Parallax System**: A custom-built background layer of floating engineering symbols (`fn`, `λ`, `::`, `//`, `∫`, `∇`) that drift with ambient "breathing" animation and multi-layered scroll parallax.
- **Authentic Tech Stack**: Official SVG icons for Rust, Python, Next.js, etc., rendered in their native brand colors on hover.
- **Micro-Interactions**: Subtle "Arrow Reveal" on project links and "Icon Pulse" animations.

### ⚡ Performance First
- **Zero CLS**: Strict layout stability.
- **Optimized Assets**: All videos compressed to <2MB (H.264), images in WebP.
- **Instant Load**: Critical assets preloaded; non-critical assets lazy-loaded.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Typography**: [Inter](https://rsms.me/inter/) (Google Fonts)
- **Deployment**: [Vercel](https://vercel.com) (Recommended)

## 🚀 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/portfolio-site.git
   cd portfolio-site
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 📦 Deployment

This project is optimized for **Vercel**.

1. Push code to GitHub.
2. Import project in Vercel.
3. Deploy (Zero config required).

## 📄 License

MIT License. Feel free to use this as a template for your own portfolio!
