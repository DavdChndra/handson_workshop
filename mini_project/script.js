// DOM Manipulation
function ubahStatus() {
  document.getElementById("status").innerText = "Pendaftaran sedang diproses...";
}

// Event Handling + Form Validation
document.getElementById("daftarForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let nama = document.getElementById("nama").value.trim();
  let email = document.getElementById("email").value.trim();
  let jurusan = document.getElementById("jurusan").value;
  let error = "";

  if (nama === "" || email === "" || jurusan === "") {
    error = "Semua field wajib diisi!";
  } else if (!email.includes("@")) {
    error = "Format email tidak valid!";
  }

  if (error) {
    document.getElementById("error").innerText = error;
  } else {
    document.getElementById("error").innerText = "";
    alert("Pendaftaran berhasil!\nNama: " + nama + "\nEmail: " + email + "\nJurusan: " + jurusan);
    document.getElementById("status").innerText = "Pendaftaran berhasil dikirim!";
    document.getElementById("daftarForm").reset();
  }
});
