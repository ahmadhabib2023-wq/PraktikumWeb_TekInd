import React from "react";

function LaporanKualitas() {
  // Mock data cacat produksi
  const dataCacat = [
    {
      id: 1,
      produk: "Gearbox",
      jumlah: 5,
    },
    {
      id: 2,
      produk: "Panel Mesin",
      jumlah: 2,
    },
    {
      id: 3,
      produk: "Komponen Otomotif",
      jumlah: 7,
    },
  ];

  return (
    <div className="container mt-4">
      <h1>Laporan Kualitas Produksi</h1>

      <table className="table table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>No</th>
            <th>Produk</th>
            <th>Jumlah Cacat</th>
          </tr>
        </thead>

        <tbody>
          {dataCacat.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.produk}</td>
              <td>{item.jumlah}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LaporanKualitas;
