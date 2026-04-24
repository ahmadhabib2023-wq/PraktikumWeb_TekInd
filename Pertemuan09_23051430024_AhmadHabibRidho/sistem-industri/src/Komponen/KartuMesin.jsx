function KartuMesin({ nama, status, produksi = 0 }) {
  let badgeColor = "bg-secondary";

  if (status === "Running") badgeColor = "bg-success";
  else if (status === "Stop") badgeColor = "bg-danger";
  else if (status === "Maintenance") badgeColor = "bg-warning";

  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <h5 className="card-title">{nama}</h5>

        <span className={`badge ${badgeColor}`}>{status}</span>

        <p className="mt-2">
          Produksi Saat Ini: <strong>{produksi}</strong> Unit
        </p>
      </div>
    </div>
  );
}

export default KartuMesin;
