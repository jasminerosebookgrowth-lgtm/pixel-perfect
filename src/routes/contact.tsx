import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Mail, CheckCircle2 } from "lucide-react";
import { Shell, PageHero, meta, EMAIL } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => meta("Contact Daniel Trade", "Get in touch with Daniel Trade for inquiries and business opportunities. Email jasminerosebookgrowth@gmail.com."),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().max(30).regex(/^[0-9+()\-\s]*$/, "Please enter a valid phone number").optional(),
  subject: z.string().trim().min(2, "Please add a subject").max(150),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(2000),
});
type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const fields = [
  { name: "name", label: "Full Name", type: "text", auto: "name" },
  { name: "email", label: "Email Address", type: "email", auto: "email" },
  { name: "phone", label: "Phone Number (optional)", type: "tel", auto: "tel" },
  { name: "subject", label: "Subject", type: "text", auto: "off" },
] as const;

function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Errors = {};
      r.error.issues.forEach((i) => { errs[i.path[0] as keyof Errors] ??= i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    const v = r.data;
    const body = `Name: ${v.name}\nEmail: ${v.email}\nPhone: ${v.phone || "-"}\n\n${v.message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(v.subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const input = "mt-2 w-full rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-ring/30 aria-[invalid=true]:border-destructive";

  return (
    <Shell>
      <PageHero eyebrow="Contact" title="Let's Start a Conversation" text="Whether you have a question, an inquiry, or a business opportunity in mind, Daniel Trade would be glad to hear from you." />
      <section className="container-x grid gap-12 py-24 lg:grid-cols-5">
        <aside className="lg:col-span-2">
          <div className="rounded-2xl bg-royal p-10 text-on-dark">
            <p className="eyebrow">Email us</p>
            <a href={`mailto:${EMAIL}`} className="mt-4 flex items-start gap-3 break-all text-lg hover:text-gold"><Mail className="mt-1 h-5 w-5 shrink-0 text-gold" />{EMAIL}</a>
            <span className="gold-rule mt-8" />
            <p className="mt-6 text-sm leading-relaxed text-on-dark-muted">Reach out for inquiries, consultations, and business opportunities. We read every message and aim to reply promptly.</p>
          </div>
        </aside>
        <form noValidate onSubmit={onSubmit} className="card-lux space-y-5 p-8 hover:translate-y-0 lg:col-span-3">
          {sent && (
            <div className="flex items-start gap-3 rounded-lg border border-gold bg-gold-soft/50 p-4 text-sm text-primary" role="status">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" /> Thank you! Your email app should open with your message ready to send.
            </div>
          )}
          <div className="grid gap-5 sm:grid-cols-2">
            {fields.map((f) => (
              <label key={f.name} className="block text-sm font-semibold text-primary">
                {f.label}
                <input name={f.name} type={f.type} autoComplete={f.auto} aria-invalid={!!errors[f.name]} className={input} />
                {errors[f.name] && <span className="mt-1 block text-xs font-medium text-destructive">{errors[f.name]}</span>}
              </label>
            ))}
          </div>
          <label className="block text-sm font-semibold text-primary">
            Message
            <textarea name="message" rows={6} aria-invalid={!!errors.message} className={input} />
            {errors.message && <span className="mt-1 block text-xs font-medium text-destructive">{errors.message}</span>}
          </label>
          <button type="submit" className="btn btn-primary w-full sm:w-auto">Send Message</button>
        </form>
      </section>
    </Shell>
  );
}
