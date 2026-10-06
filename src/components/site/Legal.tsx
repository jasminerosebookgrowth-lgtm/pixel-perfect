import { Shell, PageHero, EMAIL } from "./Layout";

export function Legal({ title, sections }: { title: string; sections: [string, string][] }) {
  return (
    <Shell>
      <PageHero eyebrow="Legal" title={title} text="Last updated: 2026. This placeholder text should be reviewed by a qualified legal professional before use." />
      <article className="container-x max-w-3xl space-y-10 py-20">
        {sections.map(([h, p]) => (
          <section key={h}>
            <h2 className="text-3xl text-primary">{h}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{p}</p>
          </section>
        ))}
        <section>
          <h2 className="text-3xl text-primary">Contact</h2>
          <p className="mt-3 text-muted-foreground">Questions? Email <a className="text-primary underline hover:text-gold" href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
        </section>
      </article>
    </Shell>
  );
}
