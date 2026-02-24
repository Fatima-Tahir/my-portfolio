type FooterProps = { name: string };

export function Footer({ name }: FooterProps) {
  return (
    <footer className="border-t border-white/10 py-8 text-sm text-white/60">
      {/* © {new Date().getFullYear()} {name} • Built with React + TypeScript + TailwindCSS */}
      {name}
    </footer>
  );
}
