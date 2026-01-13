import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="app">
      <header className="site-header">
        <div className="container header-content">
          <div className="logo">
            <span className="logo-mark" aria-hidden="true">
              ✂
            </span>
            <span>Nordic Fade Studio</span>
          </div>
          <nav className="nav">
            <a href="#services">Tjenester</a>
            <a href="#experience">Opplevelsen</a>
            <a href="#testimonials">Anmeldelser</a>
            <button className="button button-secondary">Book tid</button>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container footer-content">
          <div>
            <strong>Nordic Fade Studio</strong>
            <p>Storgata 7, Oslo</p>
          </div>
          <div>
            <p>Åpningstider</p>
            <p>Man–Fre 10:00–19:00</p>
            <p>Lør 10:00–16:00</p>
          </div>
          <div>
            <p>Kontakt</p>
            <p>post@nordicfade.no</p>
            <p>+47 900 00 000</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
