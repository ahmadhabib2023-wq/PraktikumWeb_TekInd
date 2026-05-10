import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Komponen/Layout";

import Dashboard from "./Halaman/Dashboard";
import Inventori from "./Halaman/Inventori";
import DetailInventori from "./Halaman/DetailInventori";
import LaporanKualitas from "./Halaman/LaporanKualitas";
import NotFound from "./Halaman/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/inventori" element={<Inventori />} />

        <Route path="/inventori/:id" element={<DetailInventori />} />

        <Route path="/laporan-kualitas" element={<LaporanKualitas />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
