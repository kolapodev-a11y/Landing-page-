# NovaLaunch — Modern React Landing Page (No npm)

A modern, portfolio-ready **React** landing page you can deploy to **Vercel** as **static files**.

## ✅ What’s special
- **No npm / no build tools** (React via CDN + JSX via Babel in-browser)
- **Modern UI** (glass, aurora background, subtle animations)
- Sections: hero, features, how-it-works, pricing (toggle), testimonials, FAQ, CTA
- **Dark mode** toggle (saved to localStorage)

## 📁 Files
- `index.html` — loads Tailwind, React, ReactDOM, Babel
- `app.jsx` — all React components + content
- `styles.css` — aurora background + polish
- `vercel.json` — small Vercel static config

## 🚀 Deploy on Vercel (from your phone)
1. Upload these files to a GitHub repo (same folder).
2. Go to https://vercel.com/new and import the repo.
3. **Framework Preset**: `Other`
4. **Build Command**: *(leave empty)*
5. **Output Directory**: `.` (dot / project root)
6. Deploy.

Vercel will also deploy the serverless function in `api/contact.js` automatically. (Vercel Functions) https://vercel.com/docs/functions/quickstart

## ✏️ Customize quickly
Open `app.jsx` and search for:
- `NovaLaunch` (brand name)
- `features`, `testimonials`, `faq` arrays
- CTA links near the bottom (`Open Vercel`, `Create GitHub repo`)
- Contact card info (search for `you@example.com`)

## ✉️ Contact form email integration (no npm)
This template includes a contact form that POSTs to **`/api/contact`**.

### Option A (included): Resend (recommended)
1. Create an account at https://resend.com/
2. Get an API key.
3. In Vercel → Project → **Settings → Environment Variables**, add:
   - `RESEND_API_KEY` = your Resend API key
   - `CONTACT_TO_EMAIL` = where you want to receive messages (your inbox)
   - *(optional)* `CONTACT_FROM_EMAIL` = a verified sender on your Resend account

Resend API reference (Send Email): https://resend.com/docs/api-reference/emails/send-email

### Option B (easy alternative): Formspree
If you don’t want any serverless code, you can also use Formspree and point a plain HTML form action to their endpoint.
Docs: https://formspree.io/html/

## Notes
Because this uses CDNs, your deployed site needs internet access to load React/Tailwind.
