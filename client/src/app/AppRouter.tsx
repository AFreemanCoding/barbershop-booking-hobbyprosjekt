// client/src/app/AppRouter.tsx
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ServicesPage from "../pages/ServicesPage";
import BookingPage from "../pages/BookingPage";

export default function AppRouter() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ServicesPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </Layout>
  );
}

