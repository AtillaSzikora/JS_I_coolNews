var url = document.getElementById("url");
var feedName = document.getElementById("feedName");
var newsCount = document.getElementById("newsCount");
var addButton = document.getElementById("addButton");
var showFeeds = document.getElementById("showFeeds");

function validateFeed() {
    function disableButton() {
        addButton.disabled = !!(newsCount.value < 1
        || feedName.value.length == 0
        || url.checkValidity() == false
        || url.value.substring(url.value.length - 4) != ".xml"); }

    function urlBorderColor() {
        if (url.checkValidity() == false ||
            url.value.substring(url.value.length - 4) != ".xml") {
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
    url.addEventListener("blur", disableButton);
    url.addEventListener("blur", urlBorderColor);
    feedName.addEventListener("blur", disableButton);
    feedName.addEventListener("blur", feedNameBorderColor);
    newsCount.addEventListener("keyup", disableButton);
    newsCount.addEventListener("keyup", newsCountBorderColor);
    newsCount.addEventListener("click", disableButton);
    newsCount.addEventListener("click", newsCountBorderColor); }

function addFeed() {
    function localStoreFeed() {
        var localStorageLength = (localStorage.length + 1).toString();
        var feedObj = {
            url: url.value,
            name: feedName.value,
            newsCount: newsCount.value };
        var feedStr = JSON.stringify(feedObj);
        localStorage.setItem(localStorageLength, feedStr); }

    function getFeedFromStorage() {
        var feedStr;
        var feedObj;
        var feedArray = [];
        for (var i = 1; i < localStorage.length + 1; i++) {
            feedStr = localStorage.getItem(i.toString());
            feedObj = JSON.parse(feedStr);
            feedArray.push(feedObj);
            appendFeedFields(); } }

    function appendFeedFields() {
        var feedFields = '<div class="form">\
                            <div class="form-group"><input type="url" class="form-control"></div>\
                            <div class="form-group"><input type="text" class="form-control"></div>\
                            <div class="form-group"><input type="number" class="form-control"></div>\
                          </div>';
        $(".jumbotron").append(feedFields);}

    addButton.addEventListener("click", localStoreFeed);
    showFeeds.addEventListener("click", getFeedFromStorage); }

validateFeed();
addFeed();
