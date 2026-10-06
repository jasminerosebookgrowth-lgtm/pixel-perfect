import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Gem, Scale, Heart, Lightbulb } from "lucide-react";
import { Shell, PageHero, SectionHead, CtaBand, meta } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => meta("About Daniel Trade — Our Mission & Values", "Learn about Daniel Trade's mission, vision, values, and client-focused approach to trading and business growth."),
  component: About,
});

const values = [
  { icon: Scale, t: "Integrity", d: "Honest guidance, even when the answer is “not right now.”" },
  { icon: Eye, t: "Transparency", d: "Clear about risks, costs, and what we can and cannot do." },
  { icon: Lightbulb, t: "Clarity", d: "Complex ideas, explained simply." },
  { icon: Heart, t: "Respect", d: "Every client and every question matters." },
];

function About() {
  return (
    <Shell>
      <PageHero eyebrow="About Us" title="A professional partner for confident decisions." text="Daniel Trade exists to help clients navigate trading and business opportunities with strategy, structure, and clarity." />
      <section className="container-x grid gap-14 py-24 md:grid-cols-2">
        <SectionHead eyebrow="Introduction" title="Who we are" />
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>Daniel Trade is a professional trading and strategy brand built around one simple belief: people make better decisions when they have clear information and a thoughtful plan.</p>
          <p>Our approach is calm, disciplined, and grounded. We don't chase hype and we never promise guaranteed returns. Instead, we focus on understanding your goals and helping you move forward responsibly.</p>
        </div>
      </section>
      <section className="bg-royal py-24 text-on-dark">
        <div className="container-x grid gap-8 md:grid-cols-2">
          {[{ icon: Target, t: "Our Mission", d: "To create professional trading opportunities and give clients the clarity, strategy, and support they need to grow with confidence." },
            { icon: Gem, t: "Our Vision", d: "To be a trusted, established name known for integrity, thoughtful strategy, and lasting client relationships." }].map(({ icon: I, t, d }) => (
            <div key={t} className="rounded-2xl border border-gold/30 p-10">
              <I className="h-8 w-8 text-gold" />
              <h2 className="mt-6 text-4xl">{t}</h2>
              <span className="gold-rule mt-4" />
              <p className="mt-5 text-on-dark-muted leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container-x py-24">
        <SectionHead center eyebrow="Our Values" title="What guides every conversation" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: I, t, d }) => (
            <div key={t} className="card-lux p-7 text-center">
              <I className="mx-auto h-7 w-7 text-gold" />
              <h3 className="mt-4 text-2xl text-primary">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-lavender py-24">
        <div className="container-x grid gap-12 md:grid-cols-2">
          <div><SectionHead eyebrow="Professional Approach" title="Structured, steady, strategic" text="We listen first, assess carefully, and recommend only what makes sense for your situation. Every step is explained so you always understand the why behind the plan." /></div>
          <div><SectionHead eyebrow="Client-Focused Philosophy" title="Your goals lead the way" text="There is no one-size-fits-all strategy. We tailor our support to your objectives, timeline, and comfort with risk — and we stay available when questions come up." /></div>
        </div>
      </section>
      <CtaBand title="Work With Us" text="Start a conversation with Daniel Trade today." label="Work With Us" />
    </Shell>
  );
}
