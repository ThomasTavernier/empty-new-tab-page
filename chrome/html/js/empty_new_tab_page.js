chrome.storage.sync.get(["bgColor"], function (get) {
	document.getElementById("setBackgroundStyle").style.backgroundColor = get.bgColor;
});

chrome.storage.sync.get(["bgImageUrl"], function (get) {
	var imageUrl = get.bgImageUrl;
	if (imageUrl !== undefined) {
		if (imageUrl.includes("http")) {
			document.getElementById("setBackgroundStyle").style.backgroundImage = "url(" + imageUrl + ")";
		} else {
			document.getElementById("setBackgroundStyle").style.backgroundImage = "url(" + chrome.extension.getURL('/PUT_YOUR_IMAGES_HERE/' + imageUrl) + ")";
		}
	}
});