// Funktion för att visa en alertruta med valfritt innehåll
function showAlert() {
    alert("Detta är en alertruta!");
  }
  
  // Funktion för att skriva ut valfritt innehåll i en p-tagg
  function printText() {
    var outputElement = document.getElementById("output");
    outputElement.textContent = "Detta är den utskrivna texten.";
  }
  
  // Hämta referens till alert-knappen och lägg till klickhändelse
  var alertButton = document.getElementById("alertButton");
  alertButton.addEventListener("click", showAlert);
  
  // Hämta referens till print-knappen och lägg till klickhändelse
  var printButton = document.getElementById("printButton");
  printButton.addEventListener("click", printText);
  