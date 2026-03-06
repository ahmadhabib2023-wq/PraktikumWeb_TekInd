// Latihan 1 - Perhitungan Gaji dengan Lembur

let gajiPokok = 3500000; // gaji pokok per bulan
let jamLembur = 5; // jumlah jam lembur

// upah lembur per jam = 1.5 × (gaji pokok / 173)
let upahLemburPerJam = 1.5 * (gajiPokok / 173);

// total gaji
let totalGaji = gajiPokok + jamLembur * upahLemburPerJam;

// tampilkan hasil
console.log("Gaji Pokok: Rp " + gajiPokok);
console.log("Jam Lembur: " + jamLembur + " jam");
console.log("Upah Lembur per Jam: Rp " + upahLemburPerJam.toFixed(2));
console.log("Total Gaji: Rp " + totalGaji.toFixed(2));
// Latihan 2 - Logika Switch (Konversi Kode Shift)

let kodeShift = 4; // ganti angka 1, 2, atau 3

switch (kodeShift) {
  case 1:
    console.log("Shift: Pagi");
    break;
  case 2:
    console.log("Shift: Siang");
    break;
  case 3:
    console.log("Shift: Malam");
    break;
  default:
    console.log("Shift Tidak Valid");
}
