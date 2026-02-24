type CardProps = {
    title: string;
    description: string;
    footer?: React.ReactNode;
  };
  
  export function Card({ title, description, footer }: CardProps) {
    return (
      <article className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm transition hover:bg-white/10">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-white/80">{description}</p>
        {footer ? <div className="mt-4">{footer}</div> : null}
      </article>
    );
  }
  