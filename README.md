# NexaTech Landing Page 🚀

A modern, responsive landing page built with **React + Vite**. Showcases professional web development with smooth animations, dark footer, testimonials slider, animated stats counter, and a contact form.

## 🛠 Tech Stack
- **React 18** — Component-based UI
- **Vite 5** — Lightning-fast build tool
- **CSS Modules** — Scoped styling per component
- **No extra libraries** — Pure React + CSS animations

## 📁 Project Structure
```
nexatech-landing/
├── index.html          # HTML entry point
├── vite.config.js      # Vite configuration
├── package.json        # Dependencies
├── vercel.json         # Vercel deployment config
└── src/
    ├── main.jsx        # React entry
    ├── App.jsx         # Root component
    ├── index.css       # Global styles & variables
    ├── Navbar.jsx/css  # Sticky navigation
    ├── Hero.jsx/css    # Hero section with animations
    ├── Features.jsx/css # 6-card feature grid
    ├── Services.jsx/css # Services list
    ├── Stats.jsx/css   # Animated counters
    ├── Testimonials.jsx/css # Auto-rotating slider
    ├── Contact.jsx/css # Contact form
    └── Footer.jsx/css  # Footer with newsletter
```

## 🚀 Deploy to Vercel (No npm needed on your device!)

### Step 1 – Upload to GitHub
1. Go to [github.com](https://github.com) → **New Repository**
2. Name it `nexatech-landing`, make it **Public**
3. Click **"uploading an existing file"**
4. Upload ALL files (drag & drop the folder contents)
5. Commit changes

### Step 2 – Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) → Sign in with GitHub
2. Click **"Add New Project"**
3. Import your `nexatech-landing` repo
4. Framework: **Vite** (auto-detected)
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy** — Vercel handles everything!

## ✏️ Customize
- Update brand name in `Navbar.jsx` and `Footer.jsx`
- Change colors in `src/index.css` (`:root` variables)
- Update content in each component file
- Add real contact form via [Formspree](https://formspree.io) or [EmailJS](https://emailjs.com)

## 📄 License
MIT — Free to use for personal and commercial projects.
