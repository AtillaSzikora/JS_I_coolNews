var addButton = document.getElementById("addButton");
var url = document.getElementById("url");
var newsCount = document.getElementById("newsCount");

function disableButton() {
    if (newsCount.value < 1
        || url.checkValidity() == false
        || url.value.substring(this.value.length - 4) != ".xml")
        { addButton.disabled = true; }
    else {addButton.disabled = false; } }

function urlBorderColor() {
    if (this.checkValidity() == false ||
        this.value.substring(this.value.length - 4) != ".xml") {
        url.classList.remove("greenBorder");
        url.classList.add("redBorder"); }
    else {
        url.classList.remove("redBorder");
        url.classList.add("greenBorder"); } }

function newsCountBorderColor() {
    if (this.value < 1) {
        newsCount.classList.remove("greenBorder");
        newsCount.classList.add("redBorder"); }
    else {
        newsCount.classList.remove("redBorder");
        newsCount.classList.add("greenBorder"); } }

url.addEventListener("keyup", disableButton);
url.addEventListener("keyup", urlBorderColor);
url.addEventListener("click", disableButton);
url.addEventListener("click", newsCountBorderColor);
newsCount.addEventListener("keyup", disableButton);
newsCount.addEventListener("keyup", newsCountBorderColor);
newsCount.addEventListener("click", disableButton);
newsCount.addEventListener("click", newsCountBorderColor);
