// ==========================
// SELEKSI ELEMEN
// ==========================
const formProduksi = document.getElementById("formProduksi");
const tableBody = document.getElementById("tableBody");
const btnHapusSemua = document.getElementById("btnHapusSemua");
const searchOperator = document.getElementById("searchOperator");

// KEY STORAGE
const STORAGE_KEY = "DATA_PRODUKSI";

// ==========================
// LOAD DATA AWAL
// ==========================
document.addEventListener("DOMContentLoaded", function () {
  loadDataFromStorage();
});

// ==========================
// SUBMIT FORM
// ==========================
formProduksi.addEventListener("submit", function (event) {
  event.preventDefault();

  const tanggal = document.getElementById("tanggal").value;
  const operator = document.getElementById("operator").value;
  const shift = document.getElementById("shift").value;
  const jumlah = document.getElementById("jumlah").value;

  if (jumlah <= 0) {
    alert("Jumlah produksi harus lebih dari 0!");
    return;
  }

  const dataBaru = {
    id: Date.now(),
    tanggal: tanggal,
    operator: operator,
    shift: shift,
    jumlah: parseInt(jumlah),
  };

  saveData(dataBaru);
  formProduksi.reset();
  loadDataFromStorage();
});

// ==========================
// SIMPAN DATA
// ==========================
function saveData(data) {
  let dataLama = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  dataLama.push(data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataLama));
}

// ==========================
// LOAD + FILTER DATA
// ==========================
function loadDataFromStorage(keyword = "") {
  let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  let filteredData = data.filter((item) =>
    item.operator.toLowerCase().includes(keyword.toLowerCase())
  );

  tableBody.innerHTML = "";

  filteredData.forEach(function (item) {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${item.tanggal}</td>
      <td>${item.operator}</td>
      <td>${item.shift}</td>
      <td>${item.jumlah}</td>
      <td>
        <button class="btn btn-sm btn-danger" onclick="hapusData(${item.id})">Hapus</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

// ==========================
// SEARCH REAL-TIME
// ==========================
searchOperator.addEventListener("input", function () {
  loadDataFromStorage(this.value);
});

// ==========================
// HAPUS DATA PER ITEM
// ==========================
function hapusData(id) {
  let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  let dataBaru = data.filter((item) => item.id !== id);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataBaru));
  loadDataFromStorage();
}

// ==========================
// HAPUS SEMUA DATA
// ==========================
btnHapusSemua.addEventListener("click", function () {
  if (confirm("Semua data akan dihapus!")) {
    localStorage.removeItem(STORAGE_KEY);
    loadDataFromStorage();
  }
});
