function generateQRCode() {
  let boeNumber = document.getElementById("boeInput").value.trim();
  if (boeNumber === "") {
    alert("Please enter a BOE number!");
    return;
  }

  // Clear previous QR code
  document.getElementById("qrcode").innerHTML = "";

  // LOCAL TESTING: Change 'boe.html' to your local HTML output page
  let boeUrl = `https://endanso1.github.io/assessed-page/assessed.html?boe_no=${boeNumber}`;

  // Generate QR Code
  new QRCode(document.getElementById("qrcode"), {
    text: boeUrl,
    width: 120,
    height: 120,
  });
}

//Reset button
function resetQRCode() {
  document.getElementById("boeInput").value = ""; // Clear input field
  document.getElementById("qrcode").innerHTML = ""; // Clear QR code
}
