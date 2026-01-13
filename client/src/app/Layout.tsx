import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/layout.css";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="site-content">{children}</main>
      <Footer />
    </div>
  );
}
