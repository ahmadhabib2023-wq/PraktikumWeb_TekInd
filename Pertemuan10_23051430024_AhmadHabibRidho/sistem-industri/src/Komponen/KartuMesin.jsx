// 1. Import React + useState
import React, { useState } from "react";

// 2. Komponen
function KartuMesin(props) {
  // Ambil props
  const namaMesin = props.nama;
  const statusAwal = props.status;
  const produksi = props.produksi;

  // 🔥 State untuk status (ini yang baru)
  const [statusLokal, setStatusLokal] = useState(statusAwal);

  // 🔥 Logika warna berdasarkan status
  let badgeColor = "bg-secondary";
  if (statusLokal === "Running") badgeColor = "bg-success";
  if (statusLokal === "Stop") badgeColor = "bg-danger";
  if (statusLokal === "Maintenance") badgeColor = "bg-warning";

  return (
    <div className="card shadow-sm p-3 mb-3">
      <div className="card-body">
        <h5 className="card-title">{namaMesin}</h5>

        {/* STATUS */}
        <span className={`badge ${badgeColor}`}>{statusLokal}</span>

        <hr />

        <p>
          Produksi Saat Ini: <strong>{produksi}</strong> Unit
        </p>

        {/* 🔥 FORM INPUT (INI YANG DITAMBAH) */}
        <div className="mt-2">
          <select
            className="form-select form-select-sm"
            value={statusLokal}
            onChange={(e) => setStatusLokal(e.target.value)}
          >
            <option value="Running">Running</option>
            <option value="Stop">Stop</option>
            <option value="Maintenance">Maintenance</option>
          </select>
        </div>
      </div>
    </div>
  );
}

// 3. Export
export default KartuMesin;
