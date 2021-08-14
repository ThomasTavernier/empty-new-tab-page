chrome.storage.local.get(['bgColor'], ({ bgColor }) => {
  const input = document.getElementById('bgColor');
  input.addEventListener('input', () => chrome.storage.local.set({ bgColor: input.value }));
  input.addEventListener('blur', () => chrome.storage.sync.set({ bgColor: input.value }));
  if (bgColor) input.value = bgColor;
});
