chrome.tabs.onActivated.addListener(activeInfo => {
  handleTabChange(activeInfo.tabId);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.active) {
    handleTabChange(tabId);
  }
});

function handleTabChange(tabId) {
  chrome.tabs.get(tabId, (tab) => {
    if (tab.url.includes('youtube.com/watch')) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: playVideo
      });
    } else {
      chrome.tabs.query({ url: '*://www.youtube.com/*' }, (tabs) => {
        tabs.forEach((youtubeTab) => {
          chrome.scripting.executeScript({
            target: { tabId: youtubeTab.id },
            function: pauseVideo
          });
        });
      });
    }
  });
}

function playVideo() {
  const video = document.querySelector('video');
  if (video && video.paused) {
    video.play();
  }
}

function pauseVideo() {
  const video = document.querySelector('video');
  if (video && !video.paused) {
    video.pause();
  }
}
