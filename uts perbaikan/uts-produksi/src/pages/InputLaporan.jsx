function InputLaporan() {
  return (
    <div>
      <h2 className="mb-4">Input Laporan Produksi</h2>

      <form>
        <div className="mb-3">
          <label className="form-label">Tanggal Produksi</label>
          <input type="date" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Nama Operator</label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Jumlah Produksi</label>
          <input type="number" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Jumlah Reject</label>
          <input type="number" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Shift</label>

          <select className="form-select">
            <option>Pagi</option>
            <option>Siang</option>
            <option>Malam</option>
          </select>
        </div>

        <button className="btn btn-primary">Simpan Laporan</button>
      </form>
    </div>
  );
}

export default InputLaporan;
