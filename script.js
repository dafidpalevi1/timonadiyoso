document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Contoh validasi sederhana
  if (username === "admin" && password === "admin123") {
      // Set status login ke "true" di local storage
      localStorage.setItem("isLoggedIn", "true");
      // Redirect ke halaman utama setelah login berhasil
      window.location.href = "index.html"; // Ganti index.html dengan URL halaman utama yang sesuai
  } else {
      // Tampilkan pesan error jika login gagal
      document.getElementById("error-message").innerText = "Username atau password salah!";
  }
});





/* Demo purposes only */
$(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );
