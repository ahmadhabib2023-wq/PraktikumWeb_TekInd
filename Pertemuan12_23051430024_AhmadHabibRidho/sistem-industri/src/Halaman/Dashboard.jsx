import React from "react";
import GrafikProduksi from "../Komponen/GrafikProduksi";
import KartuMesin from "../Komponen/KartuMesin";
import ProporsiCacat from "../Komponen/ProporsiCacat";

function Dashboard() {
  return (
    <div className="container mt-4">
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">Dashboard Pintar 4.0</h2>
        <hr />
      </div>

      {/* Grafik + KPI */}
      <div className="row g-4 mb-4">
        {/* Grafik Produksi */}
        <div className="col-lg-8">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <GrafikProduksi />
            </div>
          </div>
        </div>

        {/* KPI */}
        <div className="col-lg-4">
          <div className="d-flex flex-column gap-3 h-100">
            <div className="card bg-primary text-white shadow-sm flex-fill">
              <div className="card-body text-center d-flex flex-column justify-content-center">
                <h5 className="mb-3">Total Output Hari Ini</h5>
                <h1 className="fw-bold">1,030</h1>
                <p className="mb-1">Unit</p>
                <small>Update terakhir: 13:00</small>
              </div>
            </div>

            <div className="card bg-success text-white shadow-sm flex-fill">
              <div className="card-body text-center d-flex flex-column justify-content-center">
                <h5 className="mb-3">Efficiency Rate</h5>
                <h1 className="fw-bold">92.4%</h1>
                <small>+1.2% dari kemarin</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Proporsi Cacat */}
      <div className="row mb-4">
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <ProporsiCacat />
            </div>
          </div>
        </div>
      </div>

      {/* Status Mesin */}
      <div className="row">
        <div className="col-12 mb-3">
          <h4 className="fw-bold">Status Mesin Aktif</h4>
        </div>

        <div className="col-md-3 mb-3">
          <KartuMesin nama="CNC-01" status="Running" produksi={320} />
        </div>

        <div className="col-md-3 mb-3">
          <KartuMesin nama="CNC-02" status="Running" produksi={310} />
        </div>

        <div className="col-md-3 mb-3">
          <KartuMesin nama="Press-01" status="Stop" produksi={150} />
        </div>

        <div className="col-md-3 mb-3">
          <KartuMesin nama="Weld-04" status="Maintenance" produksi={0} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
