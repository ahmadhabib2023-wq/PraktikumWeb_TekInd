import React, { useState } from "react";

function OEECalculator() {
  // 🔥 STATE INPUT
  const [planTime, setPlanTime] = useState(0);
  const [runTime, setRunTime] = useState(0);
  const [totalParts, setTotalParts] = useState(0);
  const [goodParts, setGoodParts] = useState(0);

  // 🔥 PERHITUNGAN OEE
  const availability = planTime > 0 ? runTime / planTime : 0;
  const performance = runTime > 0 ? totalParts / runTime : 0;
  const quality = totalParts > 0 ? goodParts / totalParts : 0;

  const oee = availability * performance * quality * 100;

  // 🔥 WARNA BERDASARKAN NILAI
  let warna = "black";
  if (oee < 50) warna = "red";
  else if (oee > 85) warna = "green";

  return (
    <div className="p-4 border rounded">
      <h3>Kalkulator OEE</h3>

      {/* INPUT */}
      <div>
        <p>Plan Time</p>
        <input
          type="number"
          value={planTime}
          onChange={(e) => setPlanTime(Number(e.target.value))}
        />

        <p>Run Time</p>
        <input
          type="number"
          value={runTime}
          onChange={(e) => setRunTime(Number(e.target.value))}
        />

        <p>Total Parts</p>
        <input
          type="number"
          value={totalParts}
          onChange={(e) => setTotalParts(Number(e.target.value))}
        />

        <p>Good Parts</p>
        <input
          type="number"
          value={goodParts}
          onChange={(e) => setGoodParts(Number(e.target.value))}
        />
      </div>

      {/* OUTPUT */}
      <h2 style={{ color: warna }}>OEE: {oee.toFixed(2)}%</h2>
    </div>
  );
}

export default OEECalculator;
