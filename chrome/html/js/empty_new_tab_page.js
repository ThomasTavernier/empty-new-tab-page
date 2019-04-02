chrome.storage.sync.get(["bgColor"], function(get){
	document.getElementById("setBackgroundStyle").style.backgroundColor = get.bgColor;
});

chrome.storage.sync.get(["bgImageUrl"], function(get){
	document.getElementById("setBackgroundStyle").style.backgroundImage = "url(" + get.bgImageUrl + ")";
});