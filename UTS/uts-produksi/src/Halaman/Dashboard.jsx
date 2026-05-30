import { useEffect, useState } from "react";

function Dashboard() {
  const [dataProduksi, setDataProduksi] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("produksi")) || [];

    setDataProduksi(data);
  }, []);

  // total produksi
  const totalProduksi = dataProduksi.reduce(
    (total, item) => total + item.produksi,
    0
  );

  // total reject
  const totalReject = dataProduksi.reduce(
    (total, item) => total + item.reject,
    0
  );

  // output baik
  const outputBaik = totalProduksi - totalReject;

  // yield
  const yieldPersen =
    totalProduksi > 0 ? ((outputBaik / totalProduksi) * 100).toFixed(2) : 0;

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Dashboard Produksi</h1>

      <div className="row">
        <div className="col-md-4">
          <div className="card text-center mb-3">
            <div className="card-body">
              <h5>Total Produksi</h5>

              <h2>{totalProduksi}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center mb-3">
            <div className="card-body">
              <h5>Total Reject</h5>

              <h2>{totalReject}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center mb-3">
            <div className="card-body">
              <h5>Yield</h5>

              <h2>{yieldPersen}%</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
