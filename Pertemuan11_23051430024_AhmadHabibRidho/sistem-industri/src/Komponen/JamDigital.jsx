import React, { useState, useEffect } from "react";

function JamDigital() {
  // State waktu
  const [waktu, setWaktu] = useState(new Date());

  // 🔥 State kota (INI YANG BARU)
  const [kota, setKota] = useState("Yogyakarta");

  // 🔥 useEffect untuk JAM (real-time)
  useEffect(() => {
    const timer = setInterval(() => {
      setWaktu(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 🔥 useEffect untuk UPDATE TITLE (Dependency Array)
  useEffect(() => {
    document.title = `Jam ${kota}`;
  }, [kota]); // hanya jalan saat kota berubah

  return (
    <div className="text-center">
      <h3>Jam Digital</h3>

      <h1>{waktu.toLocaleTimeString()}</h1>

      <p>Kota: {kota}</p>

      {/* 🔥 INPUT KOTA */}
      <input
        type="text"
        placeholder="Masukkan nama kota"
        value={kota}
        onChange={(e) => setKota(e.target.value)}
      />
    </div>
  );
}

export default JamDigital;
