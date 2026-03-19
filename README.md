# 🌊 Ocean Portfolio

A personal portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**, featuring an ocean-depth theme with smooth animations and interactive effects.

## ✨ Features

- 🎨 **Ocean Theme** — deep-sea color palette from abyss to bioluminescent teal
- 🫧 **Bubble Particles** — floating animated bubbles across the background
- ⌨️ **Typing Animation** — auto-typing and deleting text effect in the Hero section
- 🌊 **Animated Waves** — multi-layer SVG waves in the Hero section
- 📜 **Parallax Scroll** — depth effect on background orbs while scrolling
- 🖱️ **Custom Cursor** — bioluminescent cursor with a smooth trailing ring
- 🃏 **Glassmorphism Cards** — frosted glass cards with hover glow effects
- 📊 **Animated Skill Bars** — shimmer-effect progress bars with category tabs
- 🗂️ **Zigzag Timeline** — alternating layout for the experience section
- 📬 **Contact Form** — fully functional form powered by Resend
- 📱 **Fully Responsive** — mobile-friendly with hamburger menu
- 🔼 **Smart Navbar** — hidden at the top, slides in after scrolling down

## 📁 Project Structure

```
ocean-portfolio/
├── app/
│   ├── api/contact/route.ts   # Contact form API (Resend)
│   ├── globals.css            # Global styles + ocean CSS variables
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Main page
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx        # Hero with typing + parallax + waves
│   │   ├── AboutSection.tsx       # About me with fun facts + stats
│   │   ├── SkillsSection.tsx      # Skills with animated bars + tabs
│   │   ├── ProjectsSection.tsx    # Projects grid (empty state ready)
│   │   ├── ExperienceSection.tsx  # Zigzag timeline
│   │   └── ContactSection.tsx     # Contact form + social links
│   └── ui/
│       ├── Navbar.tsx             # Sticky navbar, hidden at top
│       ├── Footer.tsx             # Footer with wave decoration
│       ├── CustomCursor.tsx       # Custom bioluminescent cursor
│       ├── BubbleParticles.tsx    # Floating bubble particles
│       ├── SectionWrapper.tsx     # Scroll reveal wrapper
│       └── SectionHeading.tsx     # Consistent section titles
├── lib/
│   ├── data.ts                # All portfolio content — edit this!
│   └── utils.ts               # cn() utility for className merging
├── types/
│   └── index.ts               # TypeScript interfaces
└── tailwind.config.ts         # Custom ocean color palette + animations
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Create environment file and fill in your RESEND_API_KEY
# Create a file named .env.local with:
# RESEND_API_KEY=re_xxxxxxxxxx

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

## 🎨 Customization

### Content
Edit **`lib/data.ts`** to update:
- Name, bio, location → `personalInfo`
- Projects → `projects[]`
- Skills → `skills[]`
- Experience / education → `experiences[]`

### Colors
Edit **`tailwind.config.ts`** under `colors.ocean`:

| Name    | Hex       | Usage                    |
|---------|-----------|--------------------------|
| abyss   | `#020c1b` | Darkest background       |
| deep    | `#031a36` | Section backgrounds      |
| mid     | `#0a3d6b` | Card / glass backgrounds |
| surface | `#0e6ba8` | Medium elements          |
| shallow | `#0496ff` | Bright accents           |
| foam    | `#56cfe1` | Secondary text           |
| mist    | `#a8dadc` | Muted text               |
| sand    | `#f1faee` | Primary text             |
| coral   | `#ff6b6b` | Red-orange accent        |
| biolum  | `#00f5d4` | Main glow accent         |
| gold    | `#ffd166` | Yellow accent            |

### Adding a Project
When you have a project to show, add an object to the `projects` array in `lib/data.ts`:

```ts
{
  id: 1,
  title: "My Project",
  description: "A short description of what it does.",
  tags: ["Next.js", "TypeScript"],
  image: "/project1.jpg",
  link: "https://example.com",       // optional
  github: "https://github.com/...",  // optional
  featured: true,
}
```

The Projects section will automatically display it — no other code changes needed.

## 📬 Contact Form Setup (Resend)

1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxx
   ```
4. Update the `to` field in `app/api/contact/route.ts` with your email
5. Add `RESEND_API_KEY` to Vercel environment variables for production

## 🚢 Deployment

This project is deployed on **Vercel**. Every `git push` to the main branch triggers an automatic re-deploy.

```bash
git add .
git commit -m "your message"
git push
```

## 📦 Main Dependencies

| Package          | Purpose                         |
|------------------|---------------------------------|
| `next` 14        | React framework                 |
| `typescript`     | Type safety                     |
| `tailwindcss`    | Utility-first CSS               |
| `resend`         | Email delivery for contact form |
| `clsx`           | Conditional classNames          |
| `tailwind-merge` | Safe Tailwind class merging     |

> All animations are built natively with CSS + Tailwind — no heavy animation libraries, keeping the bundle size small.

## 📄 License

MIT — free to use and customize.
