import { createFileRoute, Link } from "@tanstack/react-router";
import { Briefcase, Brain, Users, Sprout, ArrowRight, MessageSquare, Eye, Handshake, ShieldCheck } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { Shell, SectionHead, CtaBand, meta } from "@/components/site/Layout";
import { services } from "@/components/site/data";
import { RotatingEmblem, PageLoader } from "@/components/site/Emblem";

export const Route = createFileRoute("/")({
  head: () => meta("Daniel Trade — Smart Trading. Stronger Growth.", "Daniel Trade creates professional trading opportunities and helps clients move forward with confidence, strategy, and clarity."),
  component: Home,
});

const pillars = [
  { icon: Briefcase, t: "Professional Approach" },
  { icon: Brain, t: "Strategic Thinking" },
  { icon: Users, t: "Client Focused" },
  { icon: Sprout, t: "Growth Oriented" },
];
const why = [
  { icon: MessageSquare, t: "Clear Communication", d: "Straightforward explanations with no jargon and no hidden agendas." },
  { icon: Eye, t: "Transparency", d: "We're honest about risk — trading involves uncertainty, and we never promise profits." },
  { icon: Brain, t: "Strategic Approach", d: "Every recommendation is grounded in careful thinking and a clear plan." },
  { icon: Handshake, t: "Long-Term Relationships", d: "We aim to be a dependable partner as your goals evolve over time." },
];

function Home() {
  return (
    <Shell>
      <PageLoader />
      <section className="relative overflow-hidden bg-primary-deep text-on-dark">
        <img src={hero} alt="" width={1280} height={1280} className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep via-primary-deep/85 to-primary-deep/40" />
        <div className="container-x relative grid items-center gap-12 py-20 md:py-32 lg:grid-cols-[1.4fr_1fr]">
          <div className="max-w-2xl animate-rise">
            <p className="eyebrow">Daniel Trade</p>
            <h1 className="mt-5 text-5xl leading-[1.05] md:text-7xl">Smart Trading. Stronger Growth. <span className="text-gold italic">Better Opportunities.</span></h1>
            <p className="mt-6 max-w-xl text-lg text-on-dark-muted">Professional trading and strategic business solutions designed around opportunity, clarity, and growth.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn btn-gold">Get Started <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/services" className="btn btn-outline-light">Explore Services</Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end"><RotatingEmblem /></div>
        </div>
      </section>

      <section className="border-b border-border bg-lavender">
        <div className="container-x grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {pillars.map(({ icon: I, t }) => (
            <div key={t} className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/50 bg-card text-gold"><I className="h-5 w-5" /></span>
              <span className="font-semibold text-primary">{t}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x grid items-center gap-14 py-24 md:grid-cols-2">
        <SectionHead eyebrow="About Daniel Trade" title="Built on clarity, discipline, and trust." text="Daniel Trade brings a professional, strategy-first approach to trading and business growth. We believe good decisions come from clear information, honest conversations, and a plan you understand." />
        <div className="rounded-2xl border border-border bg-lavender p-10">
          <ShieldCheck className="h-10 w-10 text-gold" />
          <p className="mt-6 font-serif text-2xl leading-snug text-primary">“We focus on helping clients think clearly, act strategically, and grow responsibly.”</p>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:text-gold">Read our story <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <section className="bg-lavender py-24">
        <div className="container-x">
          <SectionHead center eyebrow="Why Choose Us" title="A partner you can rely on" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {why.map(({ icon: I, t, d }) => (
              <div key={t} className="card-lux p-7">
                <I className="h-7 w-7 text-gold" />
                <h3 className="mt-5 text-2xl text-primary">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead eyebrow="Services" title="How we can help" />
          <Link to="/services" className="btn btn-outline">View all services</Link>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.slice(0, 3).map(({ icon: I, title, text }) => (
            <div key={title} className="card-lux p-8">
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-primary text-gold"><I className="h-6 w-6" /></span>
              <h3 className="mt-6 text-2xl text-primary">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand title="Ready to Take the Next Step?" text="Let's talk about your goals and how Daniel Trade can support you." label="Contact Daniel Trade" />
    </Shell>
  );
}
