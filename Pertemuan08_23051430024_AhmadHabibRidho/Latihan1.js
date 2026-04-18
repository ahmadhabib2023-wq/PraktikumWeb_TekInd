const btnLoad = document.getElementById("btnLoad");
const btnTambah = document.getElementById("btnTambah");
const container = document.getElementById("containerKaryawan");
const loading = document.getElementById("loading");

// ENDPOINT API
const API_URL = "https://jsonplaceholder.typicode.com/users";

// ==========================
// LOAD DATA (GET)
// ==========================
btnLoad.addEventListener("click", function () {
  loading.classList.remove("d-none");
  container.innerHTML = "";

  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      renderData(data);
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
// POST DATA BARU
// ==========================
btnTambah.addEventListener("click", function () {
  const dataBaru = {
    name: "Ahmad Habib Ridho",
    email: "ahmad@email.com",
    company: {
      name: "PT Industri Maju",
    },
  };

  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataBaru),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Data berhasil ditambahkan:");
      console.log(result);

      alert("Data dummy berhasil dikirim! Cek Console.");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

// ==========================
// RENDER DATA
// ==========================
function renderData(data) {
  data.forEach((karyawan) => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-3";

    col.innerHTML = `
      <div class="card shadow-sm h-100">
        <div class="card-body">
          <h5>${karyawan.name}</h5>
          <p>Email: ${karyawan.email}</p>
          <p>Perusahaan: ${karyawan.company.name}</p>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
}
