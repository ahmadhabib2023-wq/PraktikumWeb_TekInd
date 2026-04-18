const btnLoad = document.getElementById("btnLoad");
const container = document.getElementById("containerKaryawan");
const loading = document.getElementById("loading");

const API_URL = "https://jsonplaceholder.typicode.com/users";

// ==========================
// AMBIL DATA + FILTER
// ==========================
btnLoad.addEventListener("click", function () {
  loading.classList.remove("d-none");
  container.innerHTML = "";

  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      // FILTER KOTA MENGANDUNG HURUF S
      const hasilFilter = data.filter((item) =>
        item.address.city.toLowerCase().includes("s")
      );

      renderData(hasilFilter);
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
  data.forEach((karyawan) => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-3";

    col.innerHTML = `
      <div class="card shadow-sm h-100">
        <div class="card-body">
          <h5>${karyawan.name}</h5>
          <p>Email: ${karyawan.email}</p>
          <p>Kota: ${karyawan.address.city}</p>
          <p>Perusahaan: ${karyawan.company.name}</p>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
}
