# 🌊 Ocean Portfolio — Next.js + TypeScript

Portfolio interaktif bertema lautan yang dibangun dengan **Next.js 14**, **TypeScript**, dan **Tailwind CSS**.

## ✨ Fitur

- 🎨 **Tema Lautan** — palet warna laut dalam dari abyss hingga bioluminescence
- 🫧 **Bubble Particles** — partikel gelembung animasi yang melayang di background
- ⌨️ **Typing Animation** — teks bergerak yang mengetik dan menghapus sendiri
- 📜 **Parallax Scroll** — efek kedalaman saat scrolling di Hero section
- 🌊 **Animated Waves** — gelombang SVG yang bergerak di Hero section
- 🖱️ **Custom Cursor** — kursor bioluminescent yang mengikuti mouse
- 🃏 **Glassmorphism Cards** — kartu transparan dengan efek blur
- 📱 **Fully Responsive** — tampilan optimal di semua ukuran layar
- ♿ **Accessible** — struktur HTML semantik dan keyboard navigable
- 🌟 **Smooth Transitions** — animasi masuk saat section terlihat (IntersectionObserver)

## 📁 Struktur Project

```
ocean-portfolio/
├── app/
│   ├── globals.css        # Global styles + ocean theme variables
│   ├── layout.tsx         # Root layout dengan Navbar, Cursor, Bubbles
│   └── page.tsx           # Halaman utama (assembles all sections)
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx       # Hero dengan typing + parallax + waves
│   │   ├── AboutSection.tsx      # About dengan stats cards
│   │   ├── SkillsSection.tsx     # Skills dengan animated bars + tabs
│   │   ├── ProjectsSection.tsx   # Projects grid dengan show more
│   │   ├── ExperienceSection.tsx # Timeline karir zigzag
│   │   └── ContactSection.tsx    # Contact form + social links
│   └── ui/
│       ├── Navbar.tsx            # Sticky navbar dengan active state
│       ├── Footer.tsx            # Footer dengan wave decoration
│       ├── CustomCursor.tsx      # Custom bioluminescent cursor
│       ├── BubbleParticles.tsx   # Floating bubble particles
│       ├── SectionWrapper.tsx    # Wrapper dengan reveal animation
│       └── SectionHeading.tsx    # Consistent section titles
├── lib/
│   ├── data.ts            # Semua konten portfolio (edit ini!)
│   └── utils.ts           # Utility: cn() untuk className merging
├── types/
│   └── index.ts           # TypeScript interfaces
├── tailwind.config.ts     # Custom ocean color palette + animations
└── package.json
```

## 🚀 Cara Menjalankan

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
# 1. Masuk ke folder project
cd ocean-portfolio

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev

# 4. Buka browser
# http://localhost:3000
```

### Build untuk Production

```bash
npm run build
npm start
```

## 🎨 Kustomisasi

### Ganti Konten
Edit file **`lib/data.ts`** untuk mengubah:
- Nama, bio, lokasi → `personalInfo`
- Daftar proyek → `projects[]`
- Keahlian → `skills[]`
- Pengalaman kerja → `experiences[]`

### Ganti Warna
Edit **`tailwind.config.ts`** bagian `colors.ocean`:

```ts
ocean: {
  abyss:   "#020c1b",   // Latar paling gelap
  biolum:  "#00f5d4",   // Aksen utama (teal bioluminescent)
  coral:   "#ff6b6b",   // Aksen sekunder
  // ... dst
}
```

### Tambah Section Baru
1. Buat file di `components/sections/NamaSection.tsx`
2. Gunakan `<SectionWrapper id="nama">` sebagai wrapper
3. Import dan tambahkan di `app/page.tsx`
4. Tambahkan link di `components/ui/Navbar.tsx`

## 🌊 Palet Warna Ocean

| Nama     | Hex       | Penggunaan                        |
|----------|-----------|-----------------------------------|
| abyss    | `#020c1b` | Background paling gelap           |
| deep     | `#031a36` | Background section gelap          |
| mid      | `#0a3d6b` | Background card / glass           |
| surface  | `#0e6ba8` | Elemen medium                     |
| shallow  | `#0496ff` | Warna cerah                       |
| foam     | `#56cfe1` | Teks secondary                    |
| mist     | `#a8dadc` | Teks muted                        |
| sand     | `#f1faee` | Teks utama                        |
| coral    | `#ff6b6b` | Aksen merah-oranye                |
| kelp     | `#2ec4b6` | Aksen hijau                       |
| biolum   | `#00f5d4` | Aksen utama (glow bioluminescent) |
| gold     | `#ffd166` | Aksen kuning                      |

## 📦 Dependencies Utama

| Package              | Kegunaan                          |
|----------------------|-----------------------------------|
| `next` 14            | Framework React                   |
| `typescript`         | Type safety                       |
| `tailwindcss`        | Utility-first CSS                 |
| `clsx`               | Conditional classNames            |
| `tailwind-merge`     | Merge Tailwind classes safely     |

> Semua animasi dibangun **native** dengan CSS + Tailwind tanpa library eksternal animasi, sehingga bundle size tetap kecil!

## 📄 License

MIT — bebas digunakan dan dikustomisasi.

---

*Dibuat dengan 🌊 dan ☕ — Happy coding!*
