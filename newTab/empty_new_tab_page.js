chrome.storage.sync.get(["bgColor"],
	function (get) {
		document.getElementsByTagName('body')[0].style.backgroundColor = get.bgColor;
	}
);