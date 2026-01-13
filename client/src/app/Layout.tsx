type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header style={{ padding: "16px 24px", borderBottom: "1px solid #eee" }}>
        <strong>Barbershop</strong>
      </header>

      <main style={{ padding: "24px" }}>{children}</main>

      <footer style={{ padding: "16px 24px", borderTop: "1px solid #eee" }}>
        <small>© 2025 Barbershop</small>
      </footer>
    </div>
  );
}
