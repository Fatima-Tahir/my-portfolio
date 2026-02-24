type ContainerProps = { children: React.ReactNode };

export function Container({ children }: ContainerProps) {
  return <main className="mx-auto max-w-5xl px-4 pb-16">{children}</main>;
}

