import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const EMAIL = "jasminerosebookgrowth@gmail.com";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/why-choose-us", label: "Why Choose Us" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Daniel Trade home">
      <span className="grid h-9 w-9 place-items-center rounded-full border border-gold bg-primary font-serif text-lg font-semibold text-gold">D</span>
      <span className="font-serif text-2xl font-semibold tracking-tight">Daniel <span className="text-gold">Trade</span></span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="container-x flex h-18 items-center justify-between py-4">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary data-[status=active]:text-primary">
              {n.label}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-gold py-2.5">Get Started</Link>
        </nav>
        <button className="lg:hidden p-2 text-primary" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background lg:hidden" aria-label="Mobile">
          <div className="container-x flex flex-col py-4">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: true }}
                className="border-b border-border/60 py-3 font-medium data-[status=active]:text-primary">{n.label}</Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-gold mt-4">Get Started</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  const links = [...nav.filter((n) => n.to !== "/why-choose-us"), { to: "/privacy-policy", label: "Privacy Policy" }, { to: "/terms", label: "Terms & Conditions" }] as const;
  return (
    <footer className="bg-primary-deep text-on-dark">
      <div className="container-x grid gap-10 py-16 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl font-semibold">Daniel <span className="text-gold">Trade</span></p>
          <span className="gold-rule mt-4" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-on-dark-muted">Professional trading and strategic business solutions designed around opportunity, clarity, and growth.</p>
        </div>
        <div>
          <p className="eyebrow">Navigate</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {links.map((l) => <li key={l.to}><Link to={l.to} className="text-on-dark-muted hover:text-gold">{l.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Contact</p>
          <a href={`mailto:${EMAIL}`} className="mt-4 flex items-center gap-2 break-all text-sm text-on-dark-muted hover:text-gold"><Mail className="h-4 w-4 shrink-0 text-gold" />{EMAIL}</a>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Linkedin, Twitter].map((I, i) => (
              <a key={i} href="#" aria-label="Social media (coming soon)" className="grid h-9 w-9 place-items-center rounded-full border border-on-dark/20 text-on-dark-muted transition hover:border-gold hover:text-gold"><I className="h-4 w-4" /></a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-on-dark/10 py-6 text-center text-xs text-on-dark-muted">© 2026 Daniel Trade. All rights reserved.</div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <section className="bg-royal text-on-dark">
      <div className="container-x py-20 md:py-28 animate-rise">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl md:text-6xl">{title}</h1>
        <span className="gold-rule mt-6" />
        {text && <p className="mt-6 max-w-2xl text-lg text-on-dark-muted">{text}</p>}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, text, center }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl text-primary md:text-5xl">{title}</h2>
      <span className={`gold-rule mt-5 ${center ? "mx-auto" : ""}`} />
      {text && <p className="mt-5 text-muted-foreground leading-relaxed">{text}</p>}
    </div>
  );
}

export function CtaBand({ title, text, label }: { title: string; text: string; label: string }) {
  return (
    <section className="container-x py-20">
      <div className="relative overflow-hidden rounded-2xl bg-royal px-8 py-16 text-center text-on-dark md:px-16">
        <div className="absolute inset-3 rounded-xl border border-gold/30 pointer-events-none" />
        <h2 className="text-3xl md:text-5xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-on-dark-muted">{text}</p>
        <Link to="/contact" className="btn btn-gold mt-8">{label}</Link>
      </div>
    </section>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  return <div className="flex min-h-screen flex-col"><Header /><main className="flex-1">{children}</main><Footer /></div>;
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
