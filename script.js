/* Demo purposes only */
$(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );
// Fungsi untuk mengirim kode OTP
function sendOTP(phoneNumber, otp) {
  // Simulasi pengiriman OTP (gantikan dengan logika pengiriman nyata)
  console.log("OTP sent to " + phoneNumber + ": " + otp);
}

// Event listener untuk tombol kirim OTP
document.getElementById("send-otp-btn").addEventListener("click", function() {
  var phoneNumber = document.getElementById("phone").value;
  
  // Generate OTP
  var otp = generateOTP();
  
  // Kirim OTP
  sendOTP(phoneNumber, otp);
  
  // Simpan OTP di local storage untuk verifikasi nantinya
  localStorage.setItem("otp", otp);
});

// Fungsi untuk menghasilkan kode OTP acak
function generateOTP() {
  // Generate 6-digit random OTP (simulated for demonstration)
  return Math.floor(100000 + Math.random() * 900000).toString();
}
