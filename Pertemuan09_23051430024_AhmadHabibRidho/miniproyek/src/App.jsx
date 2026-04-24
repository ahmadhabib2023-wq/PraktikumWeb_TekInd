import KartuKaryawan from "./Komponen/KartuKaryawan";

function App() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Data Karyawan Industri</h2>

      <div className="row">
        {/* Karyawan 1 */}
        <div className="col-md-4">
          <KartuKaryawan
            nama="Budi Santoso"
            jabatan="Manager Produksi"
            bagian="Produksi"
          />
        </div>

        {/* Karyawan 2 */}
        <div className="col-md-4">
          <KartuKaryawan
            nama="Siti Aminah"
            jabatan="Operator Mesin"
            bagian="Produksi"
          />
        </div>

        {/* Karyawan 3 */}
        <div className="col-md-4">
          <KartuKaryawan
            nama="Andi Pratama"
            jabatan="Quality Control"
            bagian="QC"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
