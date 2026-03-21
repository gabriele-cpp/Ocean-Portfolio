# 🌊 Ocean Portfolio — Gabriel Emil

A personal portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**, featuring a deep-sea ocean theme with dynamic sky, smooth wave animations, real-time Spotify integration, and interactive photo gallery.

## ✨ Features

- ☀️🌙 **Dynamic Sky** — sun or moon moves across the sky based on real local time, with dawn/dusk/day/night color transitions
- 🫧 **Bubble Particles** — floating animated bubbles across the full background
- ⌨️ **Typing Animation** — auto-typing and deleting taglines in the Hero section
- 🌊 **Animated Waves** — 4-layer SVG waves at the bottom of the Hero
- 🖱️ **Custom Cursor** — bioluminescent cursor with smooth trailing ring
- 🎵 **Spotify Now Playing** — real-time widget showing current or last played track
- 🌊 **Ocean Flow Reveal** — elements rise from the deep with blur + scale + wave stagger as you scroll
- 🏞️ **Underwater Photo Gallery** — photos float inside an underwater scene with light rays and bubbles
- 🃏 **Interactive Skill Cards** — hover effects with depth labels and bioluminescent bar tips
- 🗂️ **Animated Timeline** — flowing light particle along the timeline line
- 📬 **Contact Form** — fully functional form powered by Resend
- 📱 **Fully Responsive** — mobile-friendly with hamburger menu
- 🔼 **Smart Navbar** — hidden at top, slides in after scrolling down

## 📁 Project Structure

```
ocean-portfolio/
├── app/
│   ├── api/
│   │   ├── contact/route.ts   # Contact form API (Resend)
│   │   └── spotify/route.ts   # Spotify now playing API
│   ├── globals.css            # Global styles, ocean CSS variables, animations
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Main page
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx        # Hero — dynamic sky, typing, waves, Spotify
│   │   ├── AboutSection.tsx       # About — underwater photos, fun facts, stats
│   │   ├── SkillsSection.tsx      # Skills — interactive bars, philosophy card
│   │   ├── ProjectsSection.tsx    # Projects grid (empty state ready)
│   │   ├── ExperienceSection.tsx  # Animated zigzag timeline
│   │   └── ContactSection.tsx     # Contact form + social links
│   └── ui/
│       ├── Navbar.tsx             # Smart navbar, hidden at top
│       ├── Footer.tsx             # Footer with wave decoration
│       ├── CustomCursor.tsx       # Bioluminescent cursor
│       ├── BubbleParticles.tsx    # Floating bubble particles
│       ├── SpotifyWidget.tsx      # Spotify now playing widget
│       ├── SectionWrapper.tsx     # Ocean flow scroll reveal
│       └── SectionHeading.tsx     # Consistent section titles
├── lib/
│   ├── data.ts                # All portfolio content — edit this!
│   └── utils.ts               # cn() utility
├── public/
│   └── photos/                # Photo gallery images (photo1.jpg – photo5.jpg)
├── types/
│   └── index.ts               # TypeScript interfaces
└── tailwind.config.ts         # Ocean color palette + animations
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Create .env.local (see Environment Variables below)

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

## 🔑 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Resend — for contact form
RESEND_API_KEY=re_xxxxxxxxxx

# Spotify — for now playing widget
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
SPOTIFY_REFRESH_TOKEN=your_refresh_token
```

### Getting Spotify credentials
1. Go to [developer.spotify.com](https://developer.spotify.com) → Create App
2. Set redirect URI to `http://127.0.0.1:3000`
3. Authorize via OAuth and retrieve your refresh token
4. Add all three values to `.env.local` and Vercel environment variables

> Add all environment variables to **Vercel → Settings → Environment Variables** for production.

## 🎨 Customization

### Content
Edit **`lib/data.ts`** to update:
- Name, bio, location → `personalInfo`
- Projects → `projects[]`
- Skills → `skills[]`
- Experience / education → `experiences[]`

### Photos
Replace files in `public/photos/`:
```
photo1.jpg – photo5.jpg
```
The underwater gallery will automatically pick them up.

### Adding a Project
Add an object to `projects[]` in `lib/data.ts`:
```ts
{
  id: 1,
  title: "My Project",
  description: "What it does.",
  tags: ["Next.js", "TypeScript"],
  image: "/project1.jpg",
  link: "https://example.com",       // optional
  github: "https://github.com/...",  // optional
  featured: true,
}
```
The Projects section displays it automatically.

## 🌤️ Dynamic Sky System

| Time        | Sky                       | Celestial Body        |
|-------------|---------------------------|-----------------------|
| 05:00–07:00 | Dawn — purple/orange      | 🌅 Orange sunrise sun |
| 07:00–17:00 | Day — deep blue           | ☀️ Yellow sun         |
| 17:00–19:00 | Dusk — purple/red         | 🌇 Red sunset sun     |
| 19:00–05:00 | Night — dark navy + stars | 🌙 Moon with bloom    |

The sun/moon position moves along a sky arc based on the exact hour.

## 🎨 Ocean Color Palette

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

## 🚢 Deployment

Deployed on **Vercel**. Every `git push` to main triggers an automatic re-deploy.

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

> All animations are built natively with CSS + Tailwind — no heavy animation libraries needed.

## 📄 License

MIT — free to use and customize.