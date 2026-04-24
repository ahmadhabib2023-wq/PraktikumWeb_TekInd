function KartuKaryawan({ nama, jabatan, bagian }) {
  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body text-center">
        <h5 className="card-title">{nama}</h5>

        <p className="mb-1">
          <strong>Jabatan:</strong> {jabatan}
        </p>

        <p>
          <strong>Bagian:</strong> {bagian}
        </p>
      </div>
    </div>
  );
}

export default KartuKaryawan;
