import { useEffect, useState } from "react";
import { fetchServices, type Service } from "../api/services";
import { ServiceCard } from "../components/ServiceCard";

export function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        const data = await fetchServices();
        if (alive) setServices(data);
      } catch (e) {
        const msg = e instanceof Error ? e.message : "Unknown error";
        if (alive) setError(msg);
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  return (
    <div style={{ padding: 24, maxWidth: 720, margin: "0 auto" }}>
      <h1>Barbershop</h1>

      {loading && <p>Laster tjenester...</p>}

      {!loading && error && (
        <div style={{ border: "1px solid red", padding: 12, borderRadius: 10 }}>
          <div style={{ fontWeight: 700 }}>Feil:</div>
          <div>{error}</div>
          <div style={{ marginTop: 8, opacity: 0.8 }}>
            Sjekk at backend kjører og at <code>/services</code> fungerer på{" "}
            <code>http://localhost:4000/services</code>
          </div>
        </div>
      )}

      {!loading && !error && (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      )}
    </div>
  );
}
