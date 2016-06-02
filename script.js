var addButton = document.getElementById("addButton");
var url = document.getElementById("url");

function disableButton(bool) {
    addButton.disabled = bool; }

function borderColor() {
    if (this.checkValidity() == false || this.value.substring(this.value.length - 4) != ".xml") {
        url.classList.remove("greenBorder");
        url.classList.add("redBorder");
        disableButton(true); }
    else {
        url.classList.remove("redBorder");
        url.classList.add("greenBorder");
        disableButton(false); } }

url.addEventListener("keyup", disableButton);
url.addEventListener("keyup", borderColor);