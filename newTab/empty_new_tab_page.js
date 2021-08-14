chrome.storage.sync.get(['bgColor'], ({ bgColor }) => {
  const {
    body: { style },
  } = document;
  style.backgroundColor = bgColor;
  chrome.storage.local.onChanged.addListener(({ bgColor: { newValue } }) => (style.backgroundColor = newValue));
});
