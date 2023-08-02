// popup.js

document.addEventListener("DOMContentLoaded", function () {
  const debugToggle = document.getElementById("debugToggle");
  debugToggle.addEventListener("change", function () {
    const isEnabled = debugToggle.checked;
    browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
      const activeTab = tabs[0];
      browser.tabs.sendMessage(activeTab.id, { toggleDebugging: isEnabled });
      // write to local storage
        browser.storage.local.set({ debuggingEnabled: isEnabled });
    });
  });
});
