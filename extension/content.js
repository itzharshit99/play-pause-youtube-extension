chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'pause') {
    const video = document.querySelector('video');
    if (video && !video.paused) {
      video.pause();
    }
  }
  if (message.action === 'play') {
    const video = document.querySelector('video');
    if (video && video.paused) {
      video.play();
    }
  }
});
