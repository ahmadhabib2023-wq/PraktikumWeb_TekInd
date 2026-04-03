// ==========================
// SELEKSI ELEMEN
// ==========================
const form5S = document.getElementById("form5S");
const tableBody = document.getElementById("tableBody");

const STORAGE_KEY = "DATA_5S";

// ==========================
// LOAD DATA AWAL
// ==========================
document.addEventListener("DOMContentLoaded", function () {
  loadData();
});

// ==========================
// SUBMIT FORM
// ==========================
form5S.addEventListener("submit", function (e) {
  e.preventDefault();

  const auditor = document.getElementById("auditor").value;

  const checklist = [
    document.getElementById("seiri").checked,
    document.getElementById("seiton").checked,
    document.getElementById("seiso").checked,
    document.getElementById("seiketsu").checked,
    document.getElementById("shitsuke").checked,
  ];

  // HITUNG SKOR
  const totalChecked = checklist.filter((item) => item === true).length;
  const skor = (totalChecked / 5) * 100;

  const dataBaru = {
    tanggal: new Date().toLocaleDateString(),
    auditor: auditor,
    skor: skor,
  };

  saveData(dataBaru);
  form5S.reset();
  loadData();
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
// LOAD DATA KE TABEL
// ==========================
function loadData() {
  let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  tableBody.innerHTML = "";

  data.forEach((item) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${item.tanggal}</td>
      <td>${item.auditor}</td>
      <td>${item.skor}%</td>
    `;

    tableBody.appendChild(row);
  });
}
