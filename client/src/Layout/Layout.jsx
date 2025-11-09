// src/layouts/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="relative min-h-screen">
      {/* Background layer */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bgHero.jpg')", // place in public/
        }}
      />

      {/* Overlay layer */}
      <div className="fixed inset-0 bg-slate-100/70 dark:bg-slate-950/80 backdrop-blur-sm" />

      {/* Page Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
