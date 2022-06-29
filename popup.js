// let changeQuality = document.getElementById("changeQuality");

// changeQuality.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setPageQuality,
//   });

//   window.close();
// });

// function setPageQuality() {
//   if(!document.URL.startsWith("https://www.youtube.com/watch?v=")) return;
//   // open settings menu
//   document.querySelector(".ytp-settings-button").click();

//   // open settings -> quality menu
//   document.querySelectorAll(".ytp-settings-menu .ytp-menuitem")[3].click();

//   // select hd option
//   for (const item of document.querySelectorAll(
//     ".ytp-quality-menu .ytp-menuitem"
//   )) {
//     if (item.innerText === "1080p60 HD") item.click();
//   }
// }
