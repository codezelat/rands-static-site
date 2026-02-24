<p align="center">
  <img src="public/images/logo.png" alt="RANDS Logo" width="300" />
</p>

<h1 align="center">RANDS — Rizz & Slay</h1>

<p align="center">
  <strong>Culture First Content Studio</strong><br/>
  A production-first content studio that turns brands into culture in seconds.
</p>

<p align="center">
  <a href="https://rands.lk">View Live Site</a> •
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Project Structure</a>
</p>

---

## 📖 About

**RANDS (Rizz & Slay)** is a modern, brutalist-inspired marketing website for a content studio specializing in short-form video production, TikTok marketing, and viral campaigns. The site showcases a bold design aesthetic with interactive 3D elements, smooth animations, and a focus on Gen Z/millennial audiences.

## ✨ Features

### 🎨 Design & UI

- **Brutalist Design System** — Bold typography, thick borders, hard shadows, and high-contrast color palette
- **Custom Color Palette** — Toxic Lime (#CCFF00), Hot Magenta (#FF00FF), Warning Orange (#FF6600)
- **Responsive Design** — Fully responsive across all device sizes
- **Dark Mode Support** — Automatic dark mode based on system preferences
- **Custom Typography** — Inter (body) + Oswald (display) font pairing

### 🚀 Interactive Elements

- **3D Hero Scene** — Interactive Three.js scene with liquid metal sphere, orbital rings, and particle effects
- **Smooth Scrolling** — Lenis-powered smooth scroll experience
- **GSAP Animations** — Scroll-triggered animations and kinetic typography
- **Framer Motion** — Page transitions and micro-interactions
- **Video Player** — Custom video player with play/pause and mute controls

### 📄 Pages

- **Homepage** — Hero, social proof, services, work grid, testimonials, and CTA sections
- **Brief Page** — Multi-step form wizard for project submissions
- **404 Page** — Custom branded error page with personality

### 🔧 Technical Features

- **SEO Optimized** — Comprehensive meta tags, Open Graph, Twitter Cards, robots.txt, and sitemap.xml
- **Google Analytics** — Integrated tracking with GA4
- **Form Validation** — Zod schema validation with React Hook Form
- **Dynamic Imports** — Code splitting for optimal performance
- **Image Optimization** — Next.js Image component with responsive sizing

## 🛠 Tech Stack

| Category          | Technology                                                                                                                              |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Framework**     | [Next.js 16](https://nextjs.org/) (App Router)                                                                                          |
| **Language**      | [TypeScript 5](https://www.typescriptlang.org/)                                                                                         |
| **Styling**       | [Tailwind CSS 4](https://tailwindcss.com/)                                                                                              |
| **3D Graphics**   | [Three.js](https://threejs.org/) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [Drei](https://github.com/pmndrs/drei) |
| **Animation**     | [GSAP](https://gsap.com/) + [Framer Motion](https://www.framer.com/motion/)                                                             |
| **Smooth Scroll** | [Lenis](https://lenis.studiofreight.com/)                                                                                               |
| **Forms**         | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)                                                               |
| **Icons**         | [Lucide React](https://lucide.dev/)                                                                                                     |
| **UI**            | [React 19](https://react.dev/)                                                                                                          |
| **Linting**       | [ESLint 9](https://eslint.org/)                                                                                                         |

## 📁 Project Structure

```
rands-static-site/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with fonts, metadata, and providers
│   ├── page.tsx                  # Homepage
│   ├── not-found.tsx             # Custom 404 page
│   ├── globals.css               # Global styles and Tailwind theme
│   ├── robots.ts                 # SEO robots.txt configuration
│   ├── sitemap.ts                # Dynamic sitemap generation
│   └── brief/
│       └── page.tsx              # Brief submission page
│
├── components/
│   ├── GoogleAnalytics.tsx       # GA4 integration
│   ├── brief/
│   │   └── BriefForm.tsx         # Multi-step form wizard
│   ├── home/
│   │   ├── Hero.tsx              # Hero section with 3D scene
│   │   ├── Scene.tsx             # Three.js 3D scene
│   │   ├── SocialProof.tsx       # Client marquee
│   │   ├── WhatWeDo.tsx          # Services overview
│   │   ├── FeaturedReel.tsx      # Video showcase
│   │   ├── WorkGrid.tsx          # Portfolio grid
│   │   ├── ServicesCheatsheet.tsx # Services breakdown
│   │   ├── ProcessStrip.tsx      # Process steps
│   │   └── Testimonials.tsx      # Client testimonials carousel
│   ├── layout/
│   │   ├── Header.tsx            # Navigation header
│   │   └── Footer.tsx            # Site footer
│   └── ui/
│       ├── Button.tsx            # Button component with variants
│       └── Section.tsx           # Section wrapper component
│
├── utils/
│   ├── cn.ts                     # Class name utility (clsx + tailwind-merge)
│   └── lenis.ts                  # Lenis smooth scroll export
│
├── public/
│   ├── images/
│   │   └── logo.png              # Brand logo
│   └── videos/
│       └── new.mp4               # Featured reel video
│
├── eslint.config.mjs             # ESLint configuration
├── next.config.ts                # Next.js configuration
├── postcss.config.mjs            # PostCSS configuration
├── tailwind.config.ts            # Tailwind CSS configuration (if applicable)
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/codezelat/rands-static-site.git
   cd rands-static-site
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start development server with hot reload |
| `npm run build` | Build production-ready application       |
| `npm run start` | Start production server                  |
| `npm run lint`  | Run ESLint for code quality              |

## 🎨 Design System

### Color Palette

| Color              | Hex       | Usage                            |
| ------------------ | --------- | -------------------------------- |
| **Toxic Lime**     | `#CCFF00` | Primary accent, CTAs, highlights |
| **Hot Magenta**    | `#FF00FF` | Secondary accent, hover states   |
| **Warning Orange** | `#FF6600` | Tertiary accent, alerts          |
| **Off White**      | `#F5F5F5` | Light backgrounds                |
| **Soft Grey**      | `#D4D4D4` | Muted text, borders              |
| **Carbon Black**   | `#111111` | Dark backgrounds, text           |

### Typography

- **Display Font**: Oswald — Bold, uppercase headlines
- **Body Font**: Inter — Clean, readable body text

### Brutalist Utilities

```css
.border-thick        /* 3px solid border */
.border-thick-top    /* Top border only */
.border-thick-bottom /* Bottom border only */
.box-shadow-hard     /* 6px hard shadow offset */
.text-display        /* Display font with uppercase */
```

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and fill in values:

```env
# Analytics (optional - already configured)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Site URL
NEXT_PUBLIC_SITE_URL=https://rands.lk

# Cloudflare Turnstile (required for contact + brief forms)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000AA
TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA

# Brevo email config (required for contact + brief form submissions)
BREVO_API_KEY=xkeysib-REPLACE_ME
BREVO_FROM_NAME=RANDS Website

# Optional shared fallback recipient
BREVO_TO_EMAIL=you@email.com

```

### Image Domains

External image domains are configured in `next.config.ts`:

```typescript
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "images.unsplash.com",
      pathname: "/**",
    },
  ],
}
```

## 📱 Pages Overview

### Homepage (`/`)

- **Hero**: Animated headline with interactive 3D scene
- **Social Proof**: Infinite marquee of client logos
- **What We Do**: Service cards with hover effects
- **Featured Reel**: Video player with custom controls
- **Work Grid**: Portfolio showcase with image overlays
- **Services Cheatsheet**: Quick service breakdown
- **Process Strip**: 4-step process visualization
- **Testimonials**: Horizontal scroll testimonial cards
- **Footer**: CTA, contact details, navigation, and social links
- **Contact Modal**: Global popup contact form with Turnstile verification

### Brief Page (`/brief`)

- **Multi-step Form**: 3-step wizard for project submissions
- **Form Validation**: Real-time validation with helpful error messages
- **Progress Indicator**: Visual progress bar
- **Success State**: Confirmation message on submission

### 404 Page

- **Custom Design**: Branded error page with personality
- **Clear CTA**: Easy navigation back to homepage

## 🌐 SEO

The site includes comprehensive SEO configuration:

- **Meta Tags**: Title, description, keywords
- **Open Graph**: Social sharing previews
- **Twitter Cards**: Twitter-specific meta tags
- **Robots.txt**: Search engine crawling rules
- **Sitemap.xml**: Dynamic sitemap generation
- **Structured Data Ready**: Easy to extend with JSON-LD

## 📊 Analytics

Google Analytics 4 is integrated via the `GoogleAnalytics` component:

```tsx
<GoogleAnalytics /> // Loads gtag.js with configured tracking ID
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) — The React framework for production
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) — React renderer for Three.js
- [GSAP](https://gsap.com/) — Professional animation library
- [Framer Motion](https://www.framer.com/motion/) — Production-ready motion library
- [Lenis](https://lenis.studiofreight.com/) — Smooth scroll library
- [Lucide](https://lucide.dev/) — Beautiful & consistent icons

---

<p align="center">
  Developed with ❤️ by <a href="https://codezela.com">Codezela Technologies</a>
</p>
