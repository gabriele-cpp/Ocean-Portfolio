# 🌊 Ocean Portfolio — Gabriel Emil

A personal portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**, featuring a deep-sea ocean theme with dynamic sky, smooth animations, and real-time integrations.

## ✨ Features

- 🎨 **Ocean Theme** — deep-sea color palette from abyss to bioluminescent teal
- ☀️🌙 **Dynamic Sky** — sun or moon that moves across the sky based on the real current time, with dawn/dusk color transitions
- 🫧 **Bubble Particles** — floating animated bubbles across the background
- ⌨️ **Typing Animation** — auto-typing and deleting taglines in the Hero section
- 🌊 **Animated Waves** — 4-layer SVG waves at the bottom of the Hero
- 🖱️ **Custom Cursor** — bioluminescent cursor with a smooth trailing ring
- 🃏 **Glassmorphism Cards** — frosted glass cards with hover glow effects
- 📊 **Animated Skill Bars** — shimmer-effect progress bars with category tabs
- 🗂️ **Zigzag Timeline** — alternating layout for the experience section
- 🎵 **Spotify Now Playing** — real-time widget showing current or last played track
- 📬 **Contact Form** — fully functional form powered by Resend
- 📱 **Fully Responsive** — mobile-friendly with hamburger menu
- 🔼 **Smart Navbar** — hidden at the top, slides in after scrolling down

## 📁 Project Structure

```
ocean-portfolio/
├── app/
│   ├── api/
│   │   ├── contact/route.ts   # Contact form API (Resend)
│   │   └── spotify/route.ts   # Spotify now playing API
│   ├── globals.css            # Global styles + ocean CSS variables
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Main page
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx        # Hero with typing + dynamic sky + waves
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
│       ├── SpotifyWidget.tsx      # Spotify now playing widget
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

# 2. Create .env.local and fill in your keys (see Environment Variables below)

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
3. Authorize and get your refresh token via the OAuth flow
4. Add all three values to `.env.local`

> Don't forget to add all environment variables to **Vercel → Settings → Environment Variables** for production.

## 🎨 Customization

### Content
Edit **`lib/data.ts`** to update:
- Name, bio, location → `personalInfo`
- Projects → `projects[]`
- Skills → `skills[]`
- Experience / education → `experiences[]`

### Adding a Project
Add an object to the `projects` array in `lib/data.ts`:

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

The Projects section will automatically display it — no other changes needed.

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

## 🌤️ Dynamic Sky System

The Hero section automatically changes appearance based on the current local time:

| Time        | Sky                        | Celestial Body         |
|-------------|----------------------------|------------------------|
| 05:00–07:00 | Dawn — purple/orange       | 🌅 Orange sunrise sun  |
| 07:00–17:00 | Day — deep blue            | ☀️ Yellow sun          |
| 17:00–19:00 | Dusk — purple/red          | 🌇 Red sunset sun      |
| 19:00–05:00 | Night — dark navy + stars  | 🌙 Moon with bloom     |

The sun/moon position also moves across the sky arc based on the exact hour.

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