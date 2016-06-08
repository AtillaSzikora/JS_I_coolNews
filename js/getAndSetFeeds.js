var url = document.getElementById("url");
var feedName = document.getElementById("feedName");
var newsCount = document.getElementById("newsCount");
var addButton = document.getElementById("addButton");

function localStoreFeed() {
    var localStorageLength = (localStorage.length + 1).toString();
    var feedObj = {
        url: url.value,
        feedName: feedName.value,
        newsCount: newsCount.value
    };
    var feedStr = JSON.stringify(feedObj);
    localStorage.setItem(localStorageLength, feedStr);
}

function listFeeds() {
    var feedStr;
    var feedObj;
    var jumbo = document.getElementsByClassName("jumbotron");
    var formFields = '<div class="form">\
                            <div class="form-group"><input type="url" class="form-control"></div>\
                            <div class="form-group"><input type="text" class="form-control"></div>\
                            <div class="form-group"><input type="number" class="form-control"></div>\
                          </div>';
    for (var i = 0; i < localStorage.length; i++) {
        jumbo[0].innerHTML += formFields;
    }
    var form = document.getElementsByClassName("form");
    for (var j = 1; j < form.length; j++) {
        feedStr = localStorage.getItem((j).toString());
        feedObj = JSON.parse(feedStr);
        form[j].getElementsByTagName("input")[0].value = feedObj.url;
        form[j].getElementsByTagName("input")[1].value = feedObj.feedName;
        form[j].getElementsByTagName("input")[2].value = feedObj.newsCount;
    }
}
addButton.addEventListener("click", localStoreFeed);
addButton.addEventListener("click", listFeeds);
