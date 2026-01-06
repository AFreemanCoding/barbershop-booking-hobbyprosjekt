import type { Service } from "../api/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 16 }}>
      <div style={{ fontWeight: 700 }}>{service.name}</div>
      <div style={{ opacity: 0.8 }}>{service.durationMinutes} min</div>
      <div style={{ marginTop: 6 }}>{service.priceNok} kr</div>
    </div>
  );
}
