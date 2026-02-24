type NavbarProps = {
    name: string;
  };
  
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ] as const;
  
  export function Navbar({ name }: NavbarProps) {
    return (
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div className="font-semibold tracking-tight">{name}</div>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} className="hover:text-white" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    );
  }
  