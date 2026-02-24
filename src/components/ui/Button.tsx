import clsx from "clsx";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "secondary",
  external = false,
  className,
}: ButtonProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={clsx(
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition",
        variant === "primary"
          ? "bg-white text-slate-950 hover:bg-white/90"
          : "border border-white/15 bg-white/5 text-white hover:bg-white/10",
        className
      )}
    >
      {children}
    </a>
  );
}
