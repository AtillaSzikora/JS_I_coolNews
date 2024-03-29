var url = document.getElementById("url");
var feedName = document.getElementById("feedName");
var newsCount = document.getElementById("newsCount");
var addButton = document.getElementById("addButton");
var container = document.getElementsByClassName("container");
var formHTML = '<form>\
                    <div class="form-group col-sm-3"><input type="text" class="form-control" readonly></div>\
                    <div class="form-group col-sm-4"><input type="url" class="form-control" readonly></div>\
                    <div class="form-group col-sm-2"><input type="number" class="form-control" readonly></div>\
                    <div class="form-group col-sm-3">\
                        <button type="button" class="btn btn-default fav" aria-label="Left Align">\
                            <span class="glyphicon glyphicon-heart"></span>\
                        </button>\
                        <button type="button" class="btn btn-info" aria-label="Left Align">\
                            <span class="glyphicon glyphicon-pencil"></span>\
                        </button>\
                        <button type="button" class="btn btn-success" aria-label="Left Align" style="display: none;">\
                            <span class="glyphicon glyphicon-ok"></span>\
                        </button>\
                        <button type="button" class="btn btn-danger" aria-label="Left Align">\
                            <span class="glyphicon glyphicon-trash"></span>\
                        </button>\
                    </div>\
                </form>';

function listFeedsFromStorage() {
    var feedStr;
    var feedObj;
    var localStorageLength = localStorage.length;
    for (var i = 0; i < localStorageLength; i++) {
        container[0].insertAdjacentHTML('beforeend', formHTML); }
    var formsArray = document.getElementsByTagName("form");
    var formsArrayLength = formsArray.length;
    for (var j = 1; j < formsArrayLength; j++) {
        feedStr = localStorage.getItem((j).toString());
        feedObj = JSON.parse(feedStr);
        formsArray[j].getElementsByTagName("input")[0].value = feedObj.feedName;
        formsArray[j].getElementsByTagName("input")[1].value = feedObj.url;
        formsArray[j].getElementsByTagName("input")[2].value = feedObj.newsCount; } }

function storeNewFeed() {
    var localStorageLength = (localStorage.length + 1).toString();
    var feedObj = {
        feedName: feedName.value,
        url: url.value,
        newsCount: newsCount.value,
        favourite: 0 };
    var feedStr = JSON.stringify(feedObj);
    localStorage.setItem(localStorageLength, feedStr);
    listNewFeed();
    editFeed();
    saveFeed();
    favouriteFeed();
    deleteFeed(); }

function listNewFeed() {
    container[0].insertAdjacentHTML('beforeend', formHTML);
    var formsArray = document.getElementsByTagName("form");
    var formsArrayLength = formsArray.length;
    var localStorageLength = (localStorage.length).toString();
    var feedStr = localStorage.getItem(localStorageLength);
    var feedObj = JSON.parse(feedStr);
        formsArray[formsArrayLength - 1].getElementsByTagName("input")[0].value = feedObj.feedName;
        formsArray[formsArrayLength - 1].getElementsByTagName("input")[1].value = feedObj.url;
        formsArray[formsArrayLength - 1].getElementsByTagName("input")[2].value = feedObj.newsCount; }

function editFeed() {
    var editButtonsArray = document.getElementsByClassName("btn-info");
    for (var i = 0; i < editButtonsArray.length; i++) {
        editButtonsArray[i].addEventListener("click", function() {
            this.parentNode.parentNode.getElementsByTagName("input")[0].readOnly = false;
            this.parentNode.parentNode.getElementsByTagName("input")[1].readOnly = false;
            this.parentNode.parentNode.getElementsByClassName("btn-success")[0].style.display = '';
            this.style.display = 'none'; }); } }

function saveFeed() {
    var saveButtonsArray = document.getElementsByClassName("btn-success");
    for (var i = 0; i < saveButtonsArray.length; i++) {
        saveButtonsArray[i].num = i;
        saveButtonsArray[i].addEventListener("click", function() {
            this.parentNode.parentNode.getElementsByTagName("input")[0].readOnly = true;
            this.parentNode.parentNode.getElementsByTagName("input")[1].readOnly = true;
            this.parentNode.parentNode.getElementsByClassName("btn-info")[0].style.display = '';
            this.style.display = 'none';
            var newFeedName = this.parentNode.parentNode.getElementsByTagName("input")[0].value;
            var newUrl = this.parentNode.parentNode.getElementsByTagName("input")[1].value;
            var feedStr = localStorage.getItem(this.num + 1);
            var feedObj = JSON.parse(feedStr);
            feedObj.url = newUrl;
            feedObj.feedName = newFeedName;
            feedStr = JSON.stringify(feedObj);
            localStorage.setItem(this.num + 1, feedStr); }); } }

function favouriteFeed() {
    var favouriteButtonsArray = document.getElementsByClassName("fav");
    for (var i = 0; i < favouriteButtonsArray.length; i++) {
        favouriteButtonsArray[i].num = i;
        favouriteButtonsArray[i].addEventListener("click", function() {
            var oldFeedValue = localStorage.getItem(this.num + 1);
            var newFeedValue1 = oldFeedValue.substring(0, oldFeedValue.length - 2) + "1}";
            var newFeedValue0 = oldFeedValue.substring(0, oldFeedValue.length - 2) + "0}";
            if (this.classList.contains("btn-default")) {
                localStorage.setItem(this.num + 1, newFeedValue1);
                this.classList.remove("btn-default");
                this.classList.add("btn-warning"); }
            else if (this.classList.contains("btn-warning")) {
                this.classList.remove("btn-warning");
                this.classList.add("btn-default");
                localStorage.setItem(this.num + 1, newFeedValue0); }
        }); } }

function deleteFeed() {
    var deleteButtonsArray = document.getElementsByClassName("btn-danger");
    for (var i = 0; i < deleteButtonsArray.length; i++) {
        deleteButtonsArray[i].num = i;
        deleteButtonsArray[i].addEventListener("click", function() {
            this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
            localStorage.removeItem((this.num + 1).toString()); }); } }

listFeedsFromStorage();
addButton.addEventListener("click", storeNewFeed);
editFeed();
saveFeed();
favouriteFeed();
deleteFeed();