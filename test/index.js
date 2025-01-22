//kaas
//Ik ben iets aan het doen Nielson!!!
let informatie = document.getElementById("info");
let standpunten = document.getElementById("standpunt");
let verandering = document.getElementById("verandering");
let overons = document.getElementById("overons");
let tekst = document.getElementById("stem")

function veranderTekst() {
  if (buttonId === "info") {
    window.location.href = "zv3b.github.io/standpunten.html"; 
  } else if (buttonId === "standpunt") {
    window.location.href = "zv3b.github.io/standpunten.html"; /
  } else if (buttonId === "verandering") {
    window.location.href = "zv3b.github.io/standpunten.html"; 
  } else if (buttonId === "overons") {
    window.location.href = "zv3b.github.io/standpunten.html";
  } else {
    document.body.style.backgroundColor = "green"; 
  }
}
