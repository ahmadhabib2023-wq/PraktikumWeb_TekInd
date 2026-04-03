// ==========================
// SELEKSI ELEMEN
// ==========================
const formProduksi = document.getElementById("formProduksi");
const tableBody = document.getElementById("tableBody");
const btnHapusSemua = document.getElementById("btnHapusSemua");
const searchOperator = document.getElementById("searchOperator");
const btnSortJumlah = document.getElementById("btnSortJumlah");

// STORAGE KEY
const STORAGE_KEY = "DATA_PRODUKSI";

// MODE SORTING
let isSorted = false;

// ==========================
// LOAD AWAL
// ==========================
document.addEventListener("DOMContentLoaded", function () {
  loadDataFromStorage();
});

// ==========================
// SUBMIT FORM
// ==========================
formProduksi.addEventListener("submit", function (e) {
  e.preventDefault();

  const dataBaru = {
    id: Date.now(),
    tanggal: document.getElementById("tanggal").value,
    operator: document.getElementById("operator").value,
    shift: document.getElementById("shift").value,
    jumlah: parseInt(document.getElementById("jumlah").value),
  };

  if (dataBaru.jumlah <= 0) {
    alert("Jumlah harus lebih dari 0!");
    return;
  }

  saveData(dataBaru);
  formProduksi.reset();
  loadDataFromStorage(searchOperator.value);
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
// LOAD + FILTER + SORT
// ==========================
function loadDataFromStorage(keyword = "") {
  let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  // FILTER
  let filteredData = data.filter((item) =>
    item.operator.toLowerCase().includes(keyword.toLowerCase())
  );

  // SORT
  if (isSorted) {
    filteredData.sort((a, b) => b.jumlah - a.jumlah);
  }

  tableBody.innerHTML = "";

  filteredData.forEach((item) => {
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
// SEARCH
// ==========================
searchOperator.addEventListener("input", function () {
  loadDataFromStorage(this.value);
});

// ==========================
// SORT BUTTON
// ==========================
btnSortJumlah.addEventListener("click", function () {
  isSorted = !isSorted;

  loadDataFromStorage(searchOperator.value);

  this.innerText = isSorted ? "Urutkan Normal" : "Sortir Jumlah (Terbesar)";
});

// ==========================
// HAPUS PER DATA
// ==========================
function hapusData(id) {
  let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  let dataBaru = data.filter((item) => item.id !== id);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataBaru));
  loadDataFromStorage(searchOperator.value);
}

// ==========================
// HAPUS SEMUA
// ==========================
btnHapusSemua.addEventListener("click", function () {
  if (confirm("Hapus semua data?")) {
    localStorage.removeItem(STORAGE_KEY);
    loadDataFromStorage();
  }
});
