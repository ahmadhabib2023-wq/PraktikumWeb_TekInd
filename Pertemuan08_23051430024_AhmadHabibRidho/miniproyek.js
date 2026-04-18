const btnLoad = document.getElementById("btnLoad");
const container = document.getElementById("containerInsiden");
const loading = document.getElementById("loading");

const API_URL = "https://jsonplaceholder.typicode.com/posts";

// DATA CONTOH INSIDEN UNY
const judulInsiden = [
  "Komputer Lab SIT Tidak Menyala",
  "Proyektor Kelas RBB 3 Bermasalah",
  "Jaringan WiFi Gedung FT Terputus",
  "Printer Laboratorium Error",
  "AC Ruang Kelas Tidak Dingin",
  "Lampu Kelas Mati Sebagian",
  "Keyboard Komputer Rusak",
  "Mouse Tidak Berfungsi",
  "Server Akademik Lambat",
  "Scanner Administrasi Tidak Terdeteksi",
];

const deskripsiInsiden = [
  "Unit komputer di Laboratorium SIT gagal booting saat praktikum dimulai.",
  "Proyektor tidak menampilkan gambar ketika dosen memulai perkuliahan.",
  "Mahasiswa tidak dapat mengakses internet di area Fakultas Teknik.",
  "Printer laboratorium mengalami paper jam dan tidak bisa mencetak dokumen.",
  "Suhu ruangan terlalu panas sehingga mengganggu proses pembelajaran.",
  "Beberapa lampu di kelas mati sehingga pencahayaan kurang optimal.",
  "Keyboard pada salah satu komputer tidak merespon input pengguna.",
  "Mouse pada unit PC mengalami kerusakan sensor.",
  "Sistem akademik mengalami loading lama saat jam sibuk.",
  "Scanner pada bagian administrasi tidak terbaca oleh komputer.",
];

// ==========================
// LOAD DATA INSIDEN
// ==========================
btnLoad.addEventListener("click", function () {
  loading.classList.remove("d-none");
  container.innerHTML = "";

  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      const laporanTerbaru = data.slice(0, 10);

      renderData(laporanTerbaru);
    })
    .catch((error) => {
      container.innerHTML = `
        <div class="alert alert-danger">
          Error: ${error.message}
        </div>
      `;
    })
    .finally(() => {
      loading.classList.add("d-none");
    });
});

// ==========================
// TAMPILKAN DATA
// ==========================
function renderData(data) {
  data.forEach((item, index) => {
    const col = document.createElement("div");
    col.className = "col-md-6 mb-3";

    col.innerHTML = `
      <div class="card shadow-sm h-100 border-primary">
        <div class="card-body">
          <h5 class="card-title text-danger">Insiden #${item.id}</h5>
          <h6 class="text-primary">${judulInsiden[index]}</h6>
          <p>${deskripsiInsiden[index]}</p>

          <button class="btn btn-warning"
            onclick="tindakLanjut(${item.id})">
            Tindak Lanjut
          </button>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
}

// ==========================
// TINDAK LANJUT
// ==========================
function tindakLanjut(id) {
  alert("Tiket ID " + id + " sedang diproses oleh Tim Maintenance UNY");
}
