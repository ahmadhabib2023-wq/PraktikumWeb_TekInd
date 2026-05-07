import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Inventori() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // Fetch Data saat komponen pertama kali dimuat
  useEffect(() => {
    setLoading(true);

    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((hasil) => {
        setData(hasil);

        // loading selesai
        setLoading(false);
      });
  }, []);
  // TAMBAHAN BARU
  if (loading) {
    return (
      <div className="container mt-4">
        <h3>Memuat data...</h3>
      </div>
    );
  }
  return (
    <div className="container mt-4">
      <h1>Data Inventori Bahan Baku</h1>

      <Link to="/" className="btn btn-secondary mb-3">
        Kembali ke Dashboard
      </Link>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID Item</th>
            <th>Nama Bahan</th>
            <th>Status Supplier</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <Link to={`/inventori/${item.id}`}>{item.title}</Link>
              </td>{" "}
              {/* Menggunakan field 'title' dari API sebagai nama bahan */}
              <td>
                <span className="badge bg-success">Available</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventori;
