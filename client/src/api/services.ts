// client/src/api/services.ts
import axios from "axios";
import { API_URL } from "./config";

export interface Service {
  id: string;
  name: string;
  durationMinutes: number;
  priceNok: number;
  description?: string;
}

const api = axios.create({ baseURL: API_URL });

export async function getServices(): Promise<Service[]> {
  const res = await api.get<Service[]>("/services");
  return res.data;
}
