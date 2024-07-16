const deliveryLogo = document.getElementById("deliveryLogo");

deliveryLogo.addEventListener("click", function () {
  homePage();
});

function homePage() {
  window.location.href = "http://127.0.0.1:5500/index.html";
}

/* Copyright & Current Year */
document.getElementById(
  "copyright"
).textContent += ` ${new Date().getFullYear()} Food Delivery`;
