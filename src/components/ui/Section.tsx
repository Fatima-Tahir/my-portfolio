type SectionProps = {
    id: string;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
  };
  
  export function Section({ id, title, subtitle, children }: SectionProps) {
    return (
      <section id={id} className="border-t border-white/10 py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold">{title}</h2>
            {subtitle ? <p className="mt-2 text-sm text-white/70">{subtitle}</p> : null}
          </div>
        </div>
        <div className="mt-6">{children}</div>
      </section>
    );
  }
  