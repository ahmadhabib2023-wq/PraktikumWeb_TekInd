import { useEffect, useState } from "react";

function Riwayat() {
  const [dataProduksi, setDataProduksi] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("produksi")) || [];

    setDataProduksi(data);
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Riwayat Produksi</h1>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Tanggal</th>
            <th>Shift</th>
            <th>Mesin</th>
            <th>Produksi</th>
            <th>Reject</th>
            <th>Netto</th>
          </tr>
        </thead>

        <tbody>
          {dataProduksi.map((item) => (
            <tr key={item.id}>
              <td>{item.tanggal}</td>
              <td>{item.shift}</td>
              <td>{item.mesin}</td>
              <td>{item.produksi}</td>
              <td>{item.reject}</td>
              <td>{item.netto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Riwayat;
