// Seleksi Elemen DOM
const btnStart = document.getElementById("btnStart");
const btnStop = document.getElementById("btnStop");
const btnReset = document.getElementById("btnReset");
const btnMaintenance = document.getElementById("btnMaintenance");

const statusIndicator = document.getElementById("statusIndicator");
const suhuMesin = document.getElementById("suhuMesin");
const teksStatus = statusIndicator.querySelector("strong");

const inputRPM = document.getElementById("inputRPM");
const pesanError = document.getElementById("pesanError");

const card = document.querySelector(".card");

// Variabel State
let suhu = 25;
let intervalId = null;

// =======================
// START
// =======================
btnStart.addEventListener("click", function () {
  statusIndicator.className = "alert alert-success";
  teksStatus.innerText = "RUNNING";

  intervalId = setInterval(function () {
    suhu += 1;
    suhuMesin.innerText = suhu + " °C";

    if (suhu > 80) {
      statusIndicator.className = "alert alert-danger";
      teksStatus.innerText = "OVERHEAT WARNING";
      suhuMesin.style.color = "red";
    }
  }, 1000);

  btnStart.disabled = true;
  btnStop.disabled = false;
});

// =======================
// STOP
// =======================
btnStop.addEventListener("click", function () {
  clearInterval(intervalId);
  statusIndicator.className = "alert alert-secondary";
  teksStatus.innerText = "STOPPED";

  btnStart.disabled = false;
  btnStop.disabled = true;
});

// =======================
// RESET
// =======================
btnReset.addEventListener("click", function () {
  clearInterval(intervalId);

  suhu = 25;
  suhuMesin.innerText = suhu + " °C";
  suhuMesin.style.color = "black";

  statusIndicator.className = "alert alert-secondary";
  teksStatus.innerText = "UNKNOWN";

  btnStart.disabled = false;
  btnStop.disabled = true;

  // reset maintenance
  card.classList.remove("maintenance-mode");
  suhuMesin.classList.remove("maintenance-text");
});

// =======================
// MAINTENANCE MODE
// =======================
btnMaintenance.addEventListener("click", function () {
  card.classList.add("maintenance-mode");

  statusIndicator.className = "alert alert-warning";
  teksStatus.innerText = "MAINTENANCE";

  suhuMesin.classList.add("maintenance-text");
});

// =======================
// VALIDASI INPUT RPM
// =======================
inputRPM.addEventListener("input", function () {
  let val = parseInt(this.value);

  if (val > 2000) {
    pesanError.classList.remove("d-none");
    this.classList.add("is-invalid");
  } else {
    pesanError.classList.add("d-none");
    this.classList.remove("is-invalid");
  }
});

// =======================
// LATIHAN 2 - MOUSE EVENT
// =======================

// Mouse masuk → biru
suhuMesin.addEventListener("mouseover", function () {
  this.style.color = "blue";
});

// Mouse keluar → kembali normal
suhuMesin.addEventListener("mouseout", function () {
  // kalau lagi overheat jangan override merah
  if (suhu > 80) {
    this.style.color = "red";
  } else {
    this.style.color = "black";
  }
});
