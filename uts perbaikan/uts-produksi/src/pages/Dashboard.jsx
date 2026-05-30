function Dashboard() {
  return (
    <div>
      <h2 className="mb-4">Dashboard Produksi</h2>

      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card text-bg-primary">
            <div className="card-body text-center">
              <h5>Total Produksi</h5>
              <h2>1200</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card text-bg-success">
            <div className="card-body text-center">
              <h5>Total Netto</h5>
              <h2>1150</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card text-bg-warning">
            <div className="card-body text-center">
              <h5>Yield</h5>
              <h2>95%</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
