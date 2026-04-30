import React, { useState } from "react";

function CounterProduksi() {
  // State jumlah produksi
  const [jumlah, setJumlah] = useState(0);

  // State target
  const [target, setTarget] = useState(10);

  // 🔥 State emergency
  const [isEmergency, setIsEmergency] = useState(false);

  // Tambah produksi
  const tambahProduksi = () => {
    if (!isEmergency) {
      setJumlah(jumlah + 1);
    }
  };

  // Reset produksi
  const reset = () => {
    setJumlah(0);
    setIsEmergency(false);
  };

  // Aktifkan emergency
  const aktifkanEmergency = () => {
    setIsEmergency(true);
  };

  return (
    <div className="text-center p-4 border rounded">
      <h3>Simulasi Produksi</h3>

      <h1>{jumlah}</h1>
      <p>Target: {target} Unit</p>

      {/* 🔥 CONDITIONAL RENDERING */}
      {isEmergency ? (
        <div className="alert alert-danger">🚨 EMERGENCY STOP AKTIF!</div>
      ) : jumlah >= target ? (
        <div className="alert alert-success">Target Tercapai!</div>
      ) : (
        <div className="alert alert-secondary">Produksi Berjalan...</div>
      )}

      {/* 🔥 BUTTON */}
      <button onClick={tambahProduksi} disabled={isEmergency}>
        +1 Unit
      </button>

      <button onClick={reset}>Reset</button>

      <button onClick={aktifkanEmergency}>Emergency Stop</button>
    </div>
  );
}

export default CounterProduksi;
