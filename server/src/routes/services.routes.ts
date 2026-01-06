import { Router } from "express";

export const servicesRouter = Router();

const SERVICES = [
  { id: "clip", name: "Klipp", durationMinutes: 30, priceNok: 399 },
  { id: "skjegg", name: "Skjegg", durationMinutes: 30, priceNok: 299 },
  { id: "combo", name: "Klipp + skjegg", durationMinutes: 60, priceNok: 649 },
];

servicesRouter.get("/", (_req, res) => {
  res.json({ services: SERVICES });
});
