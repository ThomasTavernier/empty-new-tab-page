// set color value of input
setColor = function(){
	chrome.storage.sync.set({"bgColor": document.getElementById("bgColor").value});
	getColor();
}

// get color value of input
getColor = function(){
	chrome.storage.sync.get(["bgColor"], function(get){
	if (get.bgColor != undefined) {
		document.getElementById("bgColor").value = get.bgColor;
		document.getElementById("preview").style.backgroundColor = get.bgColor;
	}
});
}

// set image url value of input
setUrl = function(){
	if (document.getElementById("bgImageUrl").value == "") {
		chrome.storage.sync.set({"bgImageUrl": "/assets/noImage.png"});
	}
	else {
		chrome.storage.sync.set({"bgImageUrl": document.getElementById("bgImageUrl").value});
	}
	getUrl();
}


// get image url value of input
getUrl = function(){
	chrome.storage.sync.get(["bgImageUrl"], function(get){
	if (get.bgImageUrl != undefined) {
		if (get.bgImageUrl != "/assets/noImage.png") {
			document.getElementById("bgImageUrl").value = get.bgImageUrl;
		}
		document.getElementById("preview").src = get.bgImageUrl;
	}
});
}

// reset storage
resetdefaults = function(){
	chrome.storage.sync.clear();
	checkBgColor();
	checkBgImageUrl();
	
}

// launcher
launcher = function(){
getColor();
document.getElementById("bgColor").addEventListener("input", setColor);
getUrl();
document.getElementById("bgImageUrl").addEventListener("input", setUrl);
}

// launch script
setTimeout(launcher);
