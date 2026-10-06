import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { Shell, PageHero, CtaBand, meta, EMAIL } from "@/components/site/Layout";

export const Route = createFileRoute("/faq")({
  head: () => meta("FAQ — Daniel Trade", "Answers to common questions about Daniel Trade, our services, getting started, and how consultations work."),
  component: Faq,
});

const faqs = [
  ["What is Daniel Trade?", "Daniel Trade is a professional trading and strategy brand focused on helping clients approach trading and business growth with confidence, structure, and clarity."],
  ["What services do you provide?", "We offer trading support, market opportunity insights, business growth strategy, investment guidance, strategic planning, and ongoing client support."],
  ["How can I get started?", "Simply reach out through our contact page or email us. We'll arrange an initial conversation to understand your goals."],
  ["How can I contact you?", `You can email us at ${EMAIL} or use the contact form on our Contact page. We aim to respond promptly.`],
  ["Do you guarantee trading profits?", "No. All trading and investing involve risk, including the potential loss of capital. Daniel Trade does not guarantee profits or specific outcomes. Our role is to provide professional guidance and strategy to help you make informed decisions."],
  ["How does the consultation process work?", "We begin with a conversation about your goals, experience, and risk comfort. From there, we outline possible next steps and explain them clearly — there's no obligation to proceed."],
];

function Faq() {
  return (
    <Shell>
      <PageHero eyebrow="FAQ" title="Frequently asked questions" />
      <section className="container-x max-w-3xl py-24">
        <div className="space-y-4">
          {faqs.map(([q, a]) => (
            <details key={q} className="group rounded-xl border border-border bg-card shadow-card transition open:border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-serif text-xl font-semibold text-primary">
                {q}
                <ChevronDown className="h-5 w-5 shrink-0 text-gold transition group-open:rotate-180" />
              </summary>
              <p className="px-6 pb-6 leading-relaxed text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </section>
      <CtaBand title="Still have questions?" text="We're happy to help — reach out anytime." label="Contact Daniel Trade" />
    </Shell>
  );
}
