import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Inventori() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data saat komponen dimuat
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((hasil) => {
        setProducts(hasil);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Terjadi error:", error);
        setLoading(false);
      });
  }, []);

  // Loading
  if (loading) {
    return (
      <div className="container mt-4">
        <h3>Memuat data...</h3>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Data Inventori Bahan Baku</h1>

      <Link to="/" className="btn btn-secondary mb-3">
        Kembali ke Dashboard
      </Link>

      <div className="table-responsive">
        <table className="table table-striped table-hover shadow-sm">
          <thead className="table-dark">
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
                  <Link
                    to={`/inventori/${item.id}`}
                    className="text-decoration-none"
                  >
                    {item.title}
                  </Link>
                </td>

                <td>
                  <span className="badge bg-success">Available</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Inventori;
