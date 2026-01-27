interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-16">
      <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-6">
        {title}
      </h2>
      <div className="text-neutral-600 leading-relaxed">{children}</div>
    </section>
  );
}
