import { API_BASE_URL } from "../config";

export type Service = {
  id: string;
  name: string;
  durationMinutes: number;
  priceNok: number;
};

export async function fetchServices(): Promise<Service[]> {
  const res = await fetch(`${API_BASE_URL}/services`);
  if (!res.ok) throw new Error(`HTTP ${res.status} when fetching /services`);
  const data = (await res.json()) as { services: Service[] };
  return data.services;
}

