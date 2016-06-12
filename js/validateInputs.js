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
    if (url.checkValidity() == false || url.value.substring(url.value.length - 4) != ".xml") {
        url.parentNode.classList.remove("has-success");
        url.parentNode.classList.add("has-error"); }
    else {
        url.parentNode.classList.remove("has-error");
        url.parentNode.classList.add("has-success"); } }

function feedNameBorderColor() {
    if (feedName.value.length == 0) {
        feedName.parentNode.classList.remove("has-success");
        feedName.parentNode.classList.add("has-error"); }
    else {
        feedName.parentNode.classList.remove("has-error");
        feedName.parentNode.classList.add("has-success"); } }

function newsCountBorderColor() {
    if (newsCount.value < 1) {
        newsCount.parentNode.classList.remove("has-success");
        newsCount.parentNode.classList.add("has-error"); }
    else {
        newsCount.parentNode.classList.remove("has-error");
        newsCount.parentNode.classList.add("has-success"); } }

newsCount.value = 5;
url.addEventListener("keyup", disableButton);
url.addEventListener("keyup", urlBorderColor);
feedName.addEventListener("keyup", disableButton);
feedName.addEventListener("keyup", feedNameBorderColor);
newsCount.addEventListener("keyup", disableButton);
newsCount.addEventListener("keyup", newsCountBorderColor);
newsCount.addEventListener("click", disableButton);
newsCount.addEventListener("click", newsCountBorderColor);
