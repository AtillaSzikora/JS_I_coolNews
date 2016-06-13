var url = document.getElementById("url");
var feedName = document.getElementById("feedName");
var newsCount = document.getElementById("newsCount");
var addButton = document.getElementById("addButton");

function disableButton() {
    addButton.disabled = !!(newsCount.value < 1
                         || feedName.value.length == 0
                         || url.checkValidity() == false
                         || url.value.substring(url.value.length - 4) != ".xml"); }

function urlBorderColor() {
    if (this.checkValidity() == false || this.value.substring(this.value.length - 4) != ".xml") {
        this.parentNode.classList.remove("has-success");
        this.parentNode.classList.add("has-error"); }
    else {
        this.parentNode.classList.remove("has-error");
        this.parentNode.classList.add("has-success"); } }

function feedNameBorderColor() {
    if (this.value.length == 0) {
        this.parentNode.classList.remove("has-success");
        this.parentNode.classList.add("has-error"); }
    else {
        this.parentNode.classList.remove("has-error");
        this.parentNode.classList.add("has-success"); } }

function newsCountBorderColor() {
    if (this.value < 1) {
        this.parentNode.classList.remove("has-success");
        this.parentNode.classList.add("has-error"); }
    else {
        this.parentNode.classList.remove("has-error");
        this.parentNode.classList.add("has-success"); } }

newsCount.value = 5;
url.addEventListener("keyup", disableButton);
url.addEventListener("keyup", urlBorderColor);
feedName.addEventListener("keyup", disableButton);
feedName.addEventListener("keyup", feedNameBorderColor);
newsCount.addEventListener("keyup", disableButton);
newsCount.addEventListener("keyup", newsCountBorderColor);
newsCount.addEventListener("click", disableButton);
newsCount.addEventListener("click", newsCountBorderColor);
