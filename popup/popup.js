function setColor() {
	chrome.storage.sync.set({ "bgColor": document.getElementById("bgColor").value });
}

function getColor() {
	chrome.storage.sync.get(["bgColor"], function (get) {
		get.bgColor !== undefined ? document.getElementById("bgColor").value = get.bgColor : '';
	});
}

function init() {
	getColor();
	document.getElementById("bgColor").addEventListener("input", setColor);
}

setTimeout(init);
