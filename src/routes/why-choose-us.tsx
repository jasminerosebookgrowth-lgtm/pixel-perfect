import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, MessageSquare, Brain, Eye, Users, Handshake } from "lucide-react";
import { Shell, PageHero, SectionHead, CtaBand, meta } from "@/components/site/Layout";

export const Route = createFileRoute("/why-choose-us")({
  head: () => meta("Why Choose Daniel Trade", "Professional service, clear communication, transparency, and long-term relationships — why clients choose Daniel Trade."),
  component: Why,
});

const items = [
  { icon: Briefcase, t: "Professional Service", d: "Organized, punctual, and respectful — the standard you should expect." },
  { icon: MessageSquare, t: "Clear Communication", d: "We explain the plan, the reasoning, and the risks in plain language." },
  { icon: Brain, t: "Strategic Approach", d: "Decisions are guided by structure and research, not impulse." },
  { icon: Eye, t: "Transparency", d: "No hidden agendas and no unrealistic promises — ever." },
  { icon: Users, t: "Client-Focused Solutions", d: "Support shaped around your goals, timeline, and comfort with risk." },
  { icon: Handshake, t: "Long-Term Relationships", d: "We value partnerships that grow steadily over years, not days." },
];
const stats = ["Years of experience", "Clients supported", "Markets covered", "Client satisfaction"];

function Why() {
  return (
    <Shell>
      <PageHero eyebrow="Why Choose Us" title="Trust is earned. Here's how we earn it." />
      <section className="container-x py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: I, t, d }) => (
            <div key={t} className="card-lux p-8">
              <I className="h-7 w-7 text-gold" />
              <h2 className="mt-5 text-2xl text-primary">{t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-lavender py-24">
        <div className="container-x">
          <SectionHead center eyebrow="At a Glance" title="Daniel Trade by the numbers" text="Figures will be added once verified information is available." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s} className="rounded-xl border-t-2 border-gold bg-card p-8 text-center shadow-card">
                <p className="font-serif text-5xl text-primary/40">—</p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Ready to Take the Next Step?" text="Let's start a conversation about your goals." label="Contact Daniel Trade" />
    </Shell>
  );
}
