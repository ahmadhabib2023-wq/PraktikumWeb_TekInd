function RiwayatData() {
  return (
    <div>
      <h2 className="mb-4">Riwayat Data Produksi</h2>

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>No</th>
              <th>Tanggal</th>
              <th>Operator</th>
              <th>Shift</th>
              <th>Produksi</th>
              <th>Reject</th>
              <th>Netto</th>
              <th>Yield</th>
              <th>Aksi</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default RiwayatData;
