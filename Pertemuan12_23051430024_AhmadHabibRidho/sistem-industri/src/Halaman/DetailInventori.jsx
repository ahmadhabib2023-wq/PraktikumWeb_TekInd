import React from "react";
import { useParams, Link } from "react-router-dom";

function DetailInventori() {
  // Ambil parameter id dari URL
  const { id } = useParams();

  return (
    <div className="container mt-4">
      <h1>Detail Inventori</h1>

      <div className="card p-3">
        <h4>ID Item: {id}</h4>
        <p>
          Halaman ini menampilkan detail bahan baku berdasarkan ID yang dipilih.
        </p>

        <Link to="/inventori" className="btn btn-secondary">
          Kembali ke Inventori
        </Link>
      </div>
    </div>
  );
}

export default DetailInventori;
