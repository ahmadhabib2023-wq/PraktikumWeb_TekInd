// Ambil elemen
const inputDaya = document.getElementById("daya");
const inputJam = document.getElementById("jam");

const hasilKwh = document.getElementById("hasilKwh");
const hasilBiaya = document.getElementById("hasilBiaya");

// Harga listrik per kWh
const tarif = 1500;

// Function hitung
function hitungListrik() {
  let daya = parseFloat(inputDaya.value);
  let jam = parseFloat(inputJam.value);

  // Validasi kosong
  if (isNaN(daya) || isNaN(jam)) {
    hasilKwh.innerText = "Total kWh: 0";
    hasilBiaya.innerText = "Estimasi Biaya: Rp 0";
    return;
  }

  // Hitung kWh
  let kwh = (daya * jam) / 1000;

  // Hitung biaya
  let biaya = kwh * tarif;

  // Tampilkan hasil (dibulatkan)
  hasilKwh.innerText = "Total kWh: " + kwh.toFixed(2);
  hasilBiaya.innerText = "Estimasi Biaya: Rp " + biaya.toLocaleString("id-ID");
}

// Event real-time (tanpa tombol)
inputDaya.addEventListener("input", hitungListrik);
inputJam.addEventListener("input", hitungListrik);
