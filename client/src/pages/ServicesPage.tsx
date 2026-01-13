import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getServices } from "../api/services";
import type { Service } from "../api/services";
import ServiceCard from "../components/ServiceCard";
import "../App.css";
import "../styles/layout.css";

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    getServices().then(setServices).catch(console.error);
  }, []);

  return (
    <div className="landing">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <p className="hero-kicker">Velkommen</p>
            <h1>Bestill din neste klipp enkelt</h1>
            <p className="hero-subtitle">
              Velg en tjeneste, finn tidspunkt, og møt opp. Raskt og ryddig.
            </p>

            <div className="hero-actions">
              <Link className="button" to="/booking">
                Book time
              </Link>
              <a className="button button-secondary" href="#tjenester">
                Se tjenester
              </a>
            </div>
          </div>

          <aside className="hero-card">
            <h3>Dagens anbefaling</h3>
            <p>Herreklipp · 299 kr</p>
          </aside>
        </div>
      </section>

      <section id="tjenester">
        <div className="container">
          <div className="section-header">
            <p>Tjenester</p>
            <h2>Våre mest populære</h2>
          </div>

          <div className="card-grid">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}