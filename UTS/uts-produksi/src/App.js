import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./Halaman/Dashboard";
import InputProduksi from "./Halaman/InputProduksi";
import Riwayat from "./Halaman/Riwayat";
import Navbar from "./Komponen/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/input" element={<InputProduksi />} />
        <Route path="/riwayat" element={<Riwayat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
