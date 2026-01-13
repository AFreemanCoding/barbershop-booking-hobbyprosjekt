import type { Service } from "../api/services";

interface Props {
  service: Service;
}

export default function ServiceCard({ service }: Props) {
  return (
    <article className="card">
      <header className="card-header">
        <div className="card-title">{service.name}</div>
        <span className="pill">{service.durationMinutes} min</span>
      </header>

      {service.description ? (
        <div className="card-meta">{service.description}</div>
      ) : (
        <div className="card-meta">Profesjonell behandling.</div>
      )}

      <footer className="card-footer">
        <div className="price">{service.priceNok} kr</div>
        <button className="button button-secondary" type="button">
          Velg
        </button>
      </footer>
    </article>
  );
}
