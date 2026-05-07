import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dasboard from "./Halaman/Dashboard.jsx";
import Inventori from "./Halaman/Inventori.jsx";
import NotFound from "./Halaman/NotFound.jsx";
import DetailInventori from "./Halaman/DetailInventori";
import LaporanKualitas from "./Halaman/LaporanKualitas";

// Komponen Navbar internal
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Sistem Pabrik
        </Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">
            Dashboard
          </Link>
          <Link className="nav-link" to="/inventori">
            Inventori
          </Link>
          <Link className="nav-link" to="/laporan-kualitas">
            Laporan Kualitas
          </Link>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          {/* Dashboard Utama */}
          <Route path="/" element={<Dasboard />} />

          {/* Halaman Inventori */}
          <Route path="/inventori" element={<Inventori />} />

          <Route path="/laporan-kualitas" element={<LaporanKualitas />} />

          <Route path="/inventori/:id" element={<DetailInventori />} />

          {/* Route untuk semua path lainnya (404 Not Found) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
