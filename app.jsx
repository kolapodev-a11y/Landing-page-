const { useEffect, useMemo, useRef, useState } = React;

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function formatMoney(n) {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(n);
}

function useLocalStorageState(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw != null) return JSON.parse(raw);
    } catch (e) {}
    return typeof initialValue === "function" ? initialValue() : initialValue;
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {}
  }, [key, value]);

  return [value, setValue];
}

function useRevealOnScroll() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.14 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Icon({ name, className }) {
  const common = { className: cx("inline-block", className), fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "spark":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6L12 2z" />
        </svg>
      );
    case "bolt":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M13 2L3 14h8l-1 8 11-14h-8l0-6z" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "moon":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8z" />
        </svg>
      );
    case "sun":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="M4.93 4.93l1.41 1.41" />
          <path d="M17.66 17.66l1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="M4.93 19.07l1.41-1.41" />
          <path d="M17.66 6.34l1.41-1.41" />
        </svg>
      );
    case "menu":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M6 6l12 12" />
          <path d="M18 6L6 18" />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M20 6L9 17l-5-5" />
        </svg>
      );
    case "arrow":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M5 12h12" />
          <path d="M13 6l6 6-6 6" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" className={cx("inline-block", className)} aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 .5a11.5 11.5 0 0 0-3.63 22.42c.57.11.78-.25.78-.55v-2c-3.16.69-3.83-1.35-3.83-1.35-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.52-2.52-.29-5.17-1.26-5.17-5.62 0-1.24.44-2.25 1.17-3.05-.12-.29-.51-1.45.11-3.03 0 0 .95-.3 3.1 1.16a10.74 10.74 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.62 1.58.23 2.74.11 3.03.73.8 1.17 1.81 1.17 3.05 0 4.37-2.66 5.33-5.2 5.61.41.35.77 1.05.77 2.12v3.14c0 .3.21.67.79.55A11.5 11.5 0 0 0 12 .5Z"
          />
        </svg>
      );
    default:
      return null;
  }
}

function LogoMark() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-9 w-9 rounded-xl gradient-border glass flex items-center justify-center">
        <div className="h-9 w-9 rounded-xl flex items-center justify-center">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-500 via-fuchsia-500 to-emerald-400 blur-[0.2px]" />
        </div>
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold tracking-wide">NovaLaunch</div>
        <div className="text-xs text-slate-400">React • No npm • Vercel</div>
      </div>
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
      {children}
    </span>
  );
}

function SectionTitle({ kicker, title, desc }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {kicker ? (
        <div className="reveal inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          {kicker}
        </div>
      ) : null}
      <h2 className="reveal mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {desc ? (
        <p className="reveal mt-3 text-base leading-relaxed text-slate-300">
          {desc}
        </p>
      ) : null}
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="reveal gradient-border glass rounded-2xl p-5">
      <div className="flex items-start gap-4">
        <div className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
          <Icon name={icon} className="h-5 w-5 text-emerald-300" />
        </div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="mt-1 text-sm leading-relaxed text-slate-300">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="reveal glass rounded-2xl border border-white/10 px-4 py-3">
      <div className="text-xl font-semibold tracking-tight">{value}</div>
      <div className="text-xs text-slate-400">{label}</div>
    </div>
  );
}

function PricingCard({ tier, price, periodLabel, desc, features, highlight, ctaLabel }) {
  return (
    <div
      className={cx(
        "reveal rounded-3xl p-6",
        highlight ? "gradient-border glass" : "glass border border-white/10"
      )}
    >
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold">{tier}</div>
        {highlight ? (
          <span className="rounded-full bg-emerald-500/15 text-emerald-200 border border-emerald-500/25 px-3 py-1 text-xs">
            Most popular
          </span>
        ) : null}
      </div>

      <div className="mt-4">
        <div className="flex items-end gap-2">
          <div className="text-4xl font-semibold tracking-tight">{price}</div>
          <div className="pb-1 text-sm text-slate-400">{periodLabel}</div>
        </div>
        <div className="mt-2 text-sm leading-relaxed text-slate-300">{desc}</div>
      </div>

      <div className="mt-5">
        <a
          href="#cta"
          className={cx(
            "inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition",
            highlight
              ? "bg-emerald-400 text-slate-950 hover:bg-emerald-300"
              : "bg-white/10 hover:bg-white/15 border border-white/10"
          )}
        >
          {ctaLabel}
          <Icon name="arrow" className="h-4 w-4" />
        </a>

        <ul className="mt-5 space-y-3 text-sm text-slate-200">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-300" />
              <span className="text-slate-300">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="reveal glass rounded-2xl border border-white/10">
      <button
        className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <div className="font-semibold">{q}</div>
        <div className={cx("h-8 w-8 rounded-lg grid place-items-center border border-white/10 bg-white/5 transition", open && "rotate-45")}>
          <span className="text-xl leading-none">+</span>
        </div>
      </button>
      <div className={cx("px-5 pb-4 text-sm text-slate-300", open ? "block" : "hidden")}>
        {a}
      </div>
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [botField, setBotField] = useState("");
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ state: "loading", message: "Sending…" });

    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, botField })
      });

      const data = await resp.json().catch(() => ({}));

      if (!resp.ok || !data?.ok) {
        throw new Error(data?.error || "Failed to send message");
      }

      setStatus({ state: "success", message: "Message sent! I’ll reply soon." });
      setName("");
      setEmail("");
      setMessage("");
      setBotField("");
    } catch (err) {
      setStatus({ state: "error", message: String(err?.message || err || "Something went wrong") });
    }
  }

  return (
    <form onSubmit={onSubmit} className="reveal glass border border-white/10 rounded-2xl p-6">
      <div className="text-lg font-semibold">Send a message</div>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        This form sends email through a Vercel Serverless Function (no npm).
      </p>

      {/* Honeypot field (spam protection). Keep hidden. */}
      <div className="hidden" aria-hidden="true">
        <label className="text-sm">Do not fill</label>
        <input value={botField} onChange={(e) => setBotField(e.target.value)} />
      </div>

      <div className="mt-5 grid gap-3">
        <div className="grid gap-2">
          <label className="text-sm text-slate-600 dark:text-slate-300">Your name</label>
          <input
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-emerald-400/60"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
            required
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm text-slate-600 dark:text-slate-300">Email</label>
          <input
            type="email"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-emerald-400/60"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@email.com"
            required
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm text-slate-600 dark:text-slate-300">Message</label>
          <textarea
            className="min-h-[120px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-emerald-400/60"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me about your project…"
            required
          />
        </div>

        <button
          type="submit"
          disabled={status.state === "loading"}
          className={cx(
            "mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition",
            status.state === "loading"
              ? "bg-white/10 text-slate-400 cursor-not-allowed"
              : "bg-emerald-400 text-slate-950 hover:bg-emerald-300"
          )}
        >
          {status.state === "loading" ? "Sending…" : "Send message"}
          <Icon name="arrow" className="h-4 w-4" />
        </button>

        {status.state !== "idle" ? (
          <div
            className={cx(
              "mt-3 rounded-xl border px-4 py-3 text-sm",
              status.state === "success"
                ? "border-emerald-500/25 bg-emerald-500/10 text-emerald-200"
                : status.state === "error"
                ? "border-rose-500/25 bg-rose-500/10 text-rose-200"
                : "border-white/10 bg-white/5 text-slate-300"
            )}
          >
            {status.message}
          </div>
        ) : null}
      </div>

      <div className="mt-4 text-xs text-slate-500 dark:text-slate-400">
        Tip: Add your email provider keys in Vercel Project → Settings → Environment Variables.
      </div>
    </form>
  );
}

function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mt-3 glass border border-white/10 rounded-2xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <LogoMark />
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition grid place-items-center"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {theme === "dark" ? (
                <Icon name="sun" className="h-5 w-5 text-amber-200" />
              ) : (
                <Icon name="moon" className="h-5 w-5 text-slate-200" />
              )}
            </button>

            <a
              href="#cta"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-emerald-400 text-slate-950 px-4 py-2 text-sm font-semibold hover:bg-emerald-300 transition"
            >
              Get the template
              <Icon name="arrow" className="h-4 w-4" />
            </a>

            <button
              className="md:hidden h-10 w-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition grid place-items-center"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <Icon name={open ? "x" : "menu"} className="h-5 w-5" />
            </button>
          </div>
        </div>

        {open ? (
          <div className="md:hidden mt-2 glass border border-white/10 rounded-2xl p-3">
            <div className="flex flex-col gap-2 text-sm text-slate-300">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-3 py-2 hover:bg-white/5 hover:text-white transition"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#cta"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 text-slate-950 px-4 py-2 font-semibold"
                onClick={() => setOpen(false)}
              >
                Get the template
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

function App() {
  const [theme, setTheme] = useLocalStorageState("novalaunch.theme", () => {
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  const [billing, setBilling] = useLocalStorageState("novalaunch.billing", "monthly");

  useRevealOnScroll();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const pricing = useMemo(() => {
    const yearly = billing === "yearly";
    const price = (m) => (yearly ? Math.round(m * 10) : m);
    return {
      starter: { amount: price(12), label: yearly ? "/yr" : "/mo" },
      pro: { amount: price(24), label: yearly ? "/yr" : "/mo" },
      team: { amount: price(48), label: yearly ? "/yr" : "/mo" }
    };
  }, [billing]);

  const features = [
    {
      icon: "spark",
      title: "Modern UI (Glass + Aurora)",
      desc: "A premium look with a lightweight, mobile-first layout and subtle motion."
    },
    {
      icon: "bolt",
      title: "Zero npm build",
      desc: "React runs via CDN + Babel. Upload to GitHub and deploy to Vercel instantly."
    },
    {
      icon: "shield",
      title: "Accessible & responsive",
      desc: "Keyboard-friendly components and sensible contrast that works on phones."
    },
    {
      icon: "spark",
      title: "Reusable sections",
      desc: "Features, pricing, testimonials, FAQ, and CTA are clean React components."
    },
    {
      icon: "bolt",
      title: "Fast interactions",
      desc: "Smooth scroll, intersection-based reveals, and snappy UI states."
    },
    {
      icon: "shield",
      title: "Deploy-ready",
      desc: "Static output (no server). Works perfectly on Vercel’s free tier."
    }
  ];

  const testimonials = [
    {
      name: "Amina",
      role: "Frontend developer",
      quote:
        "I needed something that looks premium without a complicated setup. This shipped to Vercel in minutes."
    },
    {
      name: "Diego",
      role: "Indie hacker",
      quote:
        "Clean components, great spacing, and the pricing toggle is a nice touch. Perfect portfolio project."
    },
    {
      name: "Sofia",
      role: "Student",
      quote:
        "Works on mobile, looks modern, and the code is easy to understand. Exactly what I needed."
    }
  ];

  const faq = [
    {
      q: "Do I need Node.js / npm?",
      a: "No. This project uses React + ReactDOM via CDN and compiles JSX in the browser using Babel."
    },
    {
      q: "Can I deploy it on Vercel?",
      a: "Yes. Deploy as a static site (Framework: Other). No build command needed. Output directory is the project root."
    },
    {
      q: "Is this ‘real React’?",
      a: "Yes. It’s React 18 running in the browser. It’s perfect for a portfolio landing page when you can’t run a build toolchain."
    },
    {
      q: "How do I customize it?",
      a: "Edit the text arrays (features/testimonials/faq) and update the CTA links. The sections are clearly separated inside app.jsx."
    }
  ];

  return (
    <div id="top" className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 rounded-lg bg-slate-900 text-white px-3 py-2"
      >
        Skip to content
      </a>

      <Navbar theme={theme} setTheme={setTheme} />

      <main id="main" className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero */}
        <section className="pt-14 sm:pt-16">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <div className="reveal flex flex-wrap items-center gap-2">
                <Pill>
                  <Icon name="spark" className="h-4 w-4 text-emerald-300" />
                  Portfolio-ready template
                </Pill>
                <Pill>
                  <span className="h-2 w-2 rounded-full bg-brand-400"></span>
                  No npm required
                </Pill>
              </div>

              <h1 className="reveal mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                A simple, advanced & modern
                <span className="block bg-gradient-to-r from-brand-400 via-fuchsia-400 to-emerald-300 bg-clip-text text-transparent">
                  React landing page
                </span>
              </h1>

              <p className="reveal mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                NovaLaunch is a clean one-page product site built with React components, Tailwind (CDN), dark mode,
                pricing toggle, FAQ accordion, and smooth reveal animations — deployable as static files.
              </p>

              <div className="reveal mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 text-slate-950 px-5 py-3 text-sm font-semibold hover:bg-emerald-300 transition"
                >
                  Deploy on Vercel
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition dark:text-slate-100"
                >
                  Explore features
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-7 grid grid-cols-3 gap-3">
                <Stat label="Lighthouse-friendly" value="A+" />
                <Stat label="Sections" value="7" />
                <Stat label="Setup" value="0 npm" />
              </div>

              <div className="reveal mt-6 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <Icon name="shield" className="h-4 w-4 text-emerald-300" />
                  Mobile-first
                </span>
                <span className="inline-flex items-center gap-2">
                  <Icon name="bolt" className="h-4 w-4 text-brand-300" />
                  Fast deploy
                </span>
              </div>
            </div>

            {/* Hero visual */}
            <div className="reveal">
              <div className="gradient-border glass rounded-3xl p-5">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">Live preview</div>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      online
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-semibold">Launch checklist</div>
                        <span className="text-xs text-slate-400">Today</span>
                      </div>
                      <div className="mt-3 space-y-2 text-sm">
                        {["Customize copy", "Add your GitHub link", "Deploy on Vercel"].map((t) => (
                          <div key={t} className="flex items-center gap-2">
                            <span className="h-6 w-6 rounded-lg bg-emerald-500/15 border border-emerald-500/25 grid place-items-center">
                              <Icon name="check" className="h-4 w-4 text-emerald-200" />
                            </span>
                            <span className="text-slate-300">{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <div className="text-xs text-slate-400">Conversion</div>
                        <div className="mt-1 text-2xl font-semibold">+32%</div>
                        <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                          <div className="h-full w-3/4 bg-gradient-to-r from-brand-400 to-emerald-300" />
                        </div>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <div className="text-xs text-slate-400">Bounce rate</div>
                        <div className="mt-1 text-2xl font-semibold">-18%</div>
                        <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                          <div className="h-full w-2/3 bg-gradient-to-r from-fuchsia-400 to-brand-400" />
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-4 shimmer">
                      <div className="text-xs text-slate-300">Tip</div>
                      <div className="mt-1 text-sm text-slate-200">
                        Replace NovaLaunch with your own brand and deploy in one click.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logos */}
          <div className="reveal mt-12 glass border border-white/10 rounded-2xl p-4">
            <div className="text-center text-xs text-slate-500 dark:text-slate-400">
              Designed to look great next to modern tools
            </div>
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
              {["Vercel", "GitHub", "React", "Tailwind"].map((x) => (
                <div
                  key={x}
                  className="rounded-xl border border-white/10 bg-white/5 py-3 text-center font-semibold text-slate-700 dark:text-slate-200"
                >
                  {x}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="pt-16 sm:pt-20">
          <SectionTitle
            kicker="Everything you need to impress"
            title="Modern sections + real UI polish"
            desc="A clean component structure you can show to recruiters and clients — without complicated tooling."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="pt-16 sm:pt-20">
          <SectionTitle
            kicker="A super simple workflow"
            title="Upload → Deploy → Share"
            desc="This is optimized for a mobile workflow: edit a few lines, push to GitHub, deploy on Vercel."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Edit your brand",
                desc: "Update name, links, and sections in app.jsx. All content is in one file."
              },
              {
                step: "02",
                title: "Upload to GitHub",
                desc: "Create a new repository and upload the files. No build tools required."
              },
              {
                step: "03",
                title: "Deploy on Vercel",
                desc: "Import the repo on Vercel and choose Framework: Other. Done."
              }
            ].map((s) => (
              <div key={s.step} className="reveal glass border border-white/10 rounded-2xl p-6">
                <div className="text-xs text-slate-500 dark:text-slate-400">STEP {s.step}</div>
                <div className="mt-2 text-lg font-semibold">{s.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="pt-16 sm:pt-20">
          <SectionTitle
            kicker="Simple pricing"
            title="Choose a plan that fits"
            desc="A clean pricing layout with a monthly/yearly toggle and a highlighted plan."
          />

          <div className="reveal mt-8 flex items-center justify-center">
            <div className="glass border border-white/10 rounded-2xl p-2 inline-flex items-center gap-2">
              <button
                onClick={() => setBilling("monthly")}
                className={cx(
                  "rounded-xl px-4 py-2 text-sm font-semibold transition",
                  billing === "monthly" ? "bg-white/10" : "hover:bg-white/5"
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("yearly")}
                className={cx(
                  "rounded-xl px-4 py-2 text-sm font-semibold transition",
                  billing === "yearly" ? "bg-white/10" : "hover:bg-white/5"
                )}
              >
                Yearly
              </button>
              {billing === "yearly" ? (
                <span className="ml-1 rounded-xl bg-emerald-500/15 text-emerald-200 border border-emerald-500/25 px-3 py-2 text-xs">
                  Save ~17%
                </span>
              ) : null}
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <PricingCard
              tier="Starter"
              price={formatMoney(pricing.starter.amount)}
              periodLabel={pricing.starter.label}
              desc="Clean portfolio landing page for one project."
              features={["All sections included", "Dark mode", "Smooth reveal animations", "Deploy on Vercel"]}
              ctaLabel="Use Starter"
            />
            <PricingCard
              tier="Pro"
              price={formatMoney(pricing.pro.amount)}
              periodLabel={pricing.pro.label}
              desc="Best for showcasing a product or SaaS idea."
              features={["Everything in Starter", "Pricing toggle", "FAQ accordion", "More UI polish"]}
              highlight
              ctaLabel="Use Pro"
            />
            <PricingCard
              tier="Team"
              price={formatMoney(pricing.team.amount)}
              periodLabel={pricing.team.label}
              desc="For agencies and multiple landing pages."
              features={["Everything in Pro", "Easy component reuse", "Brand-ready sections", "Future-proof layout"]}
              ctaLabel="Use Team"
            />
          </div>

          <div className="reveal mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
            Pricing is demo content. Replace with your real plans.
          </div>
        </section>

        {/* Testimonials */}
        <section className="pt-16 sm:pt-20">
          <SectionTitle
            kicker="Loved by builders"
            title="Looks premium in a portfolio"
            desc="A clean testimonial grid helps your project feel like a real product."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="reveal glass border border-white/10 rounded-2xl p-6">
                <div className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">“{t.quote}”</div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{t.role}</div>
                  </div>
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-brand-500 to-emerald-400 opacity-90" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="pt-16 sm:pt-20">
          <SectionTitle
            kicker="FAQ"
            title="Questions, answered"
            desc="Everything you need to know for deploying from a phone." 
          />

          <div className="mt-10 grid gap-3 max-w-3xl mx-auto">
            {faq.map((x) => (
              <FAQItem key={x.q} q={x.q} a={x.a} />
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="pt-16 sm:pt-20">
          <SectionTitle
            kicker="Contact"
            title="Let’s build something"
            desc="Send a message and it will email you directly (via Vercel Function + Resend)."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <ContactForm />

            <div className="reveal glass border border-white/10 rounded-2xl p-6">
              <div className="text-lg font-semibold">Contact details</div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Update these with your real info in <span className="font-semibold">app.jsx</span>.
              </p>

              <div className="mt-5 grid gap-3 text-sm">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-slate-500 dark:text-slate-400">Email</div>
                  <a className="mt-1 inline-block font-semibold hover:underline" href="mailto:you@example.com">
                    you@example.com
                  </a>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-slate-500 dark:text-slate-400">Typical response</div>
                  <div className="mt-1 font-semibold">Within 24 hours</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-slate-500 dark:text-slate-400">Links</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <a
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10 transition"
                      href="https://github.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon name="github" className="h-4 w-4" />
                      GitHub
                    </a>
                    <a
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10 transition"
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="h-2 w-2 rounded-full bg-brand-400" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-slate-500 dark:text-slate-400">Note</div>
                <div className="mt-1 text-sm text-slate-700 dark:text-slate-200">
                  The form works after deployment because the email is sent from <span className="font-semibold">/api/contact</span> on Vercel.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="pt-16 sm:pt-20 pb-16">
          <div className="reveal gradient-border glass rounded-3xl p-8 sm:p-10">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Ready to deploy
                </div>
                <h3 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">
                  Make it yours in 5 minutes
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Replace the copy, set your links, upload to GitHub, and deploy. This template is intentionally simple
                  while still looking advanced and modern.
                </p>

                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://vercel.com/new"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 text-slate-950 px-5 py-3 text-sm font-semibold hover:bg-emerald-300 transition"
                  >
                    Open Vercel
                    <Icon name="arrow" className="h-4 w-4" />
                  </a>
                  <a
                    href="https://github.com/new"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition"
                  >
                    Create GitHub repo
                    <Icon name="github" className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="glass border border-white/10 rounded-2xl p-5">
                <div className="text-sm font-semibold">Quick customization checklist</div>
                <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {[
                    "Change ‘NovaLaunch’ to your project name",
                    "Update CTA links (GitHub, Vercel)",
                    "Edit features & testimonials arrays",
                    "Replace pricing with your own",
                    "Optional: add your real screenshots"
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-300" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-slate-500 dark:text-slate-400">Pro tip</div>
                  <div className="mt-1 text-sm text-slate-700 dark:text-slate-200">
                    Keep the repo clean: only <span className="font-semibold">index.html</span>, <span className="font-semibold">app.jsx</span>,
                    and <span className="font-semibold">styles.css</span>.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400">
              <div>
                Built with React 18 + Tailwind CDN. No npm required.
              </div>
              <div className="flex items-center gap-3">
                <a href="#top" className="hover:text-slate-900 dark:hover:text-white transition">Back to top</a>
                <span className="opacity-50">•</span>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-900 dark:hover:text-white transition"
                >
                  Your GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <LogoMark />
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} NovaLaunch. Customize and use in your portfolio.
          </div>
        </div>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
