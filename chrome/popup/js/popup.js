// set color value of input
function setColor() {
	chrome.storage.sync.set({ "bgColor": document.getElementById("bgColor").value });
	getColor();
}

// get color value of input
function getColor() {
	chrome.storage.sync.get(["bgColor"], function (get) {
		if (get.bgColor != undefined) {
			document.getElementById("bgColor").value = get.bgColor;
			document.getElementById("preview").style.backgroundColor = get.bgColor;
		}
	});
}

// set image url value of input
function setUrl() {
	if (document.getElementById("bgImageUrl").value == "") {
		chrome.storage.sync.set({ "bgImageUrl": "/assets/noImage.png" });
	}
	else {
		chrome.storage.sync.set({ "bgImageUrl": document.getElementById("bgImageUrl").value });
	}
	getUrl();
}


// get image url value of input
function getUrl() {
	chrome.storage.sync.get(["bgImageUrl"], function (get) {
		var imageUrl = get.bgImageUrl;
		if (imageUrl != undefined) {
			if (imageUrl !== "/assets/noImage.png") {
				document.getElementById("bgImageUrl").value = get.bgImageUrl;
				if(imageUrl.includes("http")) {
					document.getElementById("preview").src = get.bgImageUrl;
				} else {
					document.getElementById("preview").src = chrome.extension.getURL('/PUT_YOUR_IMAGES_HERE/' + imageUrl);
				}
			} else {
				document.getElementById("preview").src = get.bgImageUrl;
			}
		}
	});
}

// reset storage
function resetdefaults() {
	chrome.storage.sync.clear();
	checkBgColor();
	checkBgImageUrl();

}

// init
function init() {
	getColor();
	document.getElementById("bgColor").addEventListener("input", setColor);
	getUrl();
	document.getElementById("bgImageUrl").addEventListener("input", setUrl);
}

// launch script
setTimeout(init);
