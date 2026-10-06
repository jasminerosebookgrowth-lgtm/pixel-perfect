import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Shell, PageHero, CtaBand, meta } from "@/components/site/Layout";
import { services } from "@/components/site/data";

export const Route = createFileRoute("/services")({
  head: () => meta("Services — Daniel Trade", "Trading support, market opportunities, growth strategy, investment guidance, strategic planning, and client support from Daniel Trade."),
  component: Services,
});

function Services() {
  return (
    <Shell>
      <PageHero eyebrow="Services" title="Professional support, tailored to you." text="Explore how Daniel Trade can help you approach trading and growth with strategy and clarity." />
      <section className="container-x py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: I, title, text }) => (
            <article key={title} className="card-lux flex flex-col p-8">
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-primary text-gold"><I className="h-6 w-6" /></span>
              <h2 className="mt-6 text-2xl text-primary">{title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold">Learn More <ArrowRight className="h-4 w-4" /></Link>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-14 max-w-3xl rounded-xl border border-gold/40 bg-gold-soft/40 p-6 text-center text-sm text-muted-foreground">
          <strong className="text-primary">Important:</strong> Trading and investing involve risk, including the possible loss of capital. Daniel Trade does not guarantee profits or specific results. Information provided is for guidance and educational purposes.
        </p>
      </section>
      <CtaBand title="Not sure where to start?" text="Tell us about your goals and we'll point you in the right direction." label="Contact Daniel Trade" />
    </Shell>
  );
}
