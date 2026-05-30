import { useState } from "react";
import { useNavigate } from "react-router-dom";

function InputProduksi() {
  const navigate = useNavigate();

  const [tanggal, setTanggal] = useState("");
  const [shift, setShift] = useState("");
  const [mesin, setMesin] = useState("");
  const [produksi, setProduksi] = useState("");
  const [reject, setReject] = useState("");

  const netto = produksi - reject;

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataBaru = {
      id: Date.now(),
      tanggal,
      shift,
      mesin,
      produksi: Number(produksi),
      reject: Number(reject),
      netto: Number(netto),
    };

    const dataLama = JSON.parse(localStorage.getItem("produksi")) || [];

    dataLama.push(dataBaru);

    localStorage.setItem("produksi", JSON.stringify(dataLama));

    alert("Data berhasil disimpan!");

    navigate("/riwayat");
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Input Produksi</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Tanggal</label>

          <input
            type="date"
            className="form-control"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Shift</label>

          <select
            className="form-select"
            value={shift}
            onChange={(e) => setShift(e.target.value)}
          >
            <option value="">Pilih Shift</option>
            <option value="Pagi">Pagi</option>
            <option value="Siang">Siang</option>
            <option value="Malam">Malam</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Nama Mesin</label>

          <input
            type="text"
            className="form-control"
            value={mesin}
            onChange={(e) => setMesin(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Jumlah Produksi</label>

          <input
            type="number"
            className="form-control"
            value={produksi}
            onChange={(e) => setProduksi(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Jumlah Reject</label>

          <input
            type="number"
            className="form-control"
            value={reject}
            onChange={(e) => setReject(e.target.value)}
          />
        </div>

        <h4 className="mb-3">Netto: {netto}</h4>

        <button type="submit" className="btn btn-primary">
          Simpan
        </button>
      </form>
    </div>
  );
}

export default InputProduksi;
