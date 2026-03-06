function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

function hitungBiaya() {
  let biayaBahanBaku = Number(document.getElementById("bahan").value);
  let biayaTenagaKerja = Number(document.getElementById("tenaga").value);
  let biayaOverhead = Number(document.getElementById("overhead").value);
  let jumlahProduksi = Number(document.getElementById("jumlah").value);

  if (
    biayaBahanBaku < 0 ||
    biayaTenagaKerja < 0 ||
    biayaOverhead < 0 ||
    jumlahProduksi <= 0 ||
    isNaN(biayaBahanBaku) ||
    isNaN(biayaTenagaKerja) ||
    isNaN(biayaOverhead) ||
    isNaN(jumlahProduksi)
  ) {
    alert("Masukkan angka yang valid!");
    return;
  }

  let totalPerUnit =
    (biayaBahanBaku + biayaTenagaKerja + biayaOverhead) / jumlahProduksi;

  document.getElementById("hasil").innerHTML =
    "Biaya Produksi per Unit : " + formatRupiah(totalPerUnit.toFixed(0));

  let status = document.getElementById("status");

  if (jumlahProduksi < 100) {
    status.innerHTML = "Biaya Tinggi (Ekonomi Skala Kecil)";
    status.className = "merah";
  } else {
    status.innerHTML = "Biaya Efisien";
    status.className = "hijau";
  }
}
