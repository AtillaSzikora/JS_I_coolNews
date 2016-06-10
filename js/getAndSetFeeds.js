var url = document.getElementById("url");
var feedName = document.getElementById("feedName");
var newsCount = document.getElementById("newsCount");
var addButton = document.getElementById("addButton");
var jumbo = document.getElementsByClassName("jumbotron");
var formRow = '<div class="form">\
                    <div class="form-group url"><input type="url" class="form-control"></div>\
                    <div class="form-group"><input type="text" class="form-control"></div>\
                    <div class="form-group"><input type="number" class="form-control"></div>\
                </div>';

function listFeedsFromStorage() {
    var feedStr;
    var feedObj;
    var localStorageLength = localStorage.length;
    for (var i = 0; i < localStorageLength; i++) {
        jumbo[0].insertAdjacentHTML('beforeend', formRow); }
    var formsArray = document.getElementsByClassName("form");
    var formsArrayLength = formsArray.length;
    for (var j = 1; j < formsArrayLength; j++) {
        feedStr = localStorage.getItem((j).toString());
        feedObj = JSON.parse(feedStr);
        formsArray[j].getElementsByTagName("input")[0].value = feedObj.url;
        formsArray[j].getElementsByTagName("input")[1].value = feedObj.feedName;
        formsArray[j].getElementsByTagName("input")[2].value = feedObj.newsCount; } }

function storeNewFeed() {
    var localStorageLength = (localStorage.length + 1).toString();
    var feedObj = {
        url: url.value,
        feedName: feedName.value,
        newsCount: newsCount.value };
    var feedStr = JSON.stringify(feedObj);
    localStorage.setItem(localStorageLength, feedStr);
    listNewFeed(); }

function listNewFeed() {
    jumbo[0].insertAdjacentHTML('beforeend', formRow);
    var formsArray = document.getElementsByClassName("form");
    var formsArrayLength = formsArray.length;
    var localStorageLength = (localStorage.length).toString();
    var feedStr = localStorage.getItem(localStorageLength);
    var feedObj = JSON.parse(feedStr);
        formsArray[formsArrayLength - 1].getElementsByTagName("input")[0].value = feedObj.url;
        formsArray[formsArrayLength - 1].getElementsByTagName("input")[1].value = feedObj.feedName;
        formsArray[formsArrayLength - 1].getElementsByTagName("input")[2].value = feedObj.newsCount; }

addButton.addEventListener("click", storeNewFeed);
listFeedsFromStorage();
