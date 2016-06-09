var url = document.getElementById("url");
var feedName = document.getElementById("feedName");
var newsCount = document.getElementById("newsCount");
var addButton = document.getElementById("addButton");

var feedStr1;
var feedObj1;
var jumbo = document.getElementsByClassName("jumbotron");
var formRow = '<div class="form">\
                    <div class="form-group"><input type="url" class="form-control"></div>\
                    <div class="form-group"><input type="text" class="form-control"></div>\
                    <div class="form-group"><input type="number" class="form-control"></div>\
                </div>';

for (var i = 0; i < localStorage.length; i++) {
    jumbo[0].insertAdjacentHTML('beforeend', formRow);
}
var form = document.getElementsByClassName("form");
for (var j = 0; j < localStorage.length; j++) {
    feedStr1 = localStorage.getItem((j + 1).toString());
    feedObj1 = JSON.parse(feedStr1);
    form[j].getElementsByTagName("input")[0].value = feedObj1.url;
    form[j].getElementsByTagName("input")[1].value = feedObj1.feedName;
    form[j].getElementsByTagName("input")[2].value = feedObj1.newsCount;
}

function listFeeds() {
    var localStorageLength = (localStorage.length + 1).toString();
    var feedObj = {
        url: url.value,
        feedName: feedName.value,
        newsCount: newsCount.value
    };
    var feedStr = JSON.stringify(feedObj);
    localStorage.setItem(localStorageLength, feedStr);
    var feedStr1;
    var feedObj1;
    jumbo[0].insertAdjacentHTML('beforeend', formRow);

    var form = document.getElementsByClassName("form");
    var formLength = form.length - 1;
        feedStr1 = localStorage.getItem((formLength + 1).toString());
        feedObj1 = JSON.parse(feedStr1);
        form[formLength].getElementsByTagName("input")[0].value = feedObj1.url;
        form[formLength].getElementsByTagName("input")[1].value = feedObj1.feedName;
        form[formLength].getElementsByTagName("input")[2].value = feedObj1.newsCount;
}

addButton.addEventListener("click", listFeeds);
