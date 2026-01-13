import { Routes, Route } from "react-router-dom";
import { Layout } from "./app/Layout";
import { ServicesPage } from "./pages/ServicesPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ServicesPage />} />
      </Routes>
    </Layout>
  );
}
