import { Link } from "react-router-dom";
import "../styles/layout.css";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <Link className="logo" to="/">
          <span className="logo-mark">B</span>
          Barbershop Booking
        </Link>
        <nav className="nav" aria-label="Primary">
          <Link to="/">Hjem</Link>
          <Link to="/booking">Book time</Link>
        </nav>
      </div>
    </header>
  );
}