import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Dashboard from "./pages/Dashboard";
import InputLaporan from "./pages/InputLaporan";
import RiwayatData from "./pages/RiwayatData";

function App() {
  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/input" element={<InputLaporan />} />
          <Route path="/riwayat" element={<RiwayatData />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
