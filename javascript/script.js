// DOM Manipulation
function ubahTeks() {
  document.getElementById("teks").innerText = "Teks sudah diubah!";
}

function ubahGambar() {
  document.getElementById("gambar").src = "../images/html-vs-html5.png";
}

function ubahSelector(){
    document.querySelector("#paragraf").innerHTML = "Teks sudah diubah menggunakan selector id";
    document.querySelector(".teks").innerHTML = "Teks sudah diubah menggunakan selector class"
}

// Event Handling
document.getElementById("btn").addEventListener("click", function () {
  document.getElementById("output").innerText = "Tombol sudah diklik!";
});

// Form Validation
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault(); // cegah submit default
  let nama = document.getElementById("nama").value.trim();
  let email_text = document.getElementById("email_text").value.trim();
  let error = "";

  if (nama === "" || email_text === "") {
    error = "Nama dan Emailwajib diisi!";
  } else if (!email_text.includes("@")) {
    error = "Format email tidak valid!";
  }

  if (error) {
    document.getElementById("error").innerText = error;
  } else {
    document.getElementById("error").innerText = "";
    alert("Form berhasil dikirim!");
  }
});
