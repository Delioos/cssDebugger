// content.js

let isDebuggingEnabled = false;

function applyCSSDebug() {
    const divs = document.querySelectorAll("div");
    divs.forEach((div) => {
        div.style.border = "1px solid purple";
    });
    const containers = document.querySelectorAll("container");
    containers.forEach((container) => {
        container.style.border = "2px solid blue";
    });

    const spans = document.querySelectorAll("span");
    spans.forEach((span) => {
        span.style.border = "1px solid white";
    });

    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach((paragraph) => {
        paragraph.style.border = "1px solid grey";
    });
}

function removeCSSDebug() {
    const divs = document.querySelectorAll("div");
    divs.forEach((div) => {
        div.style.border = "none";
    });
    const containers = document.querySelectorAll("container");
    containers.forEach((container) => {
        container.style.border = "none";
    });

    const spans = document.querySelectorAll("span");
    spans.forEach((span) => {
        span.style.border = "none";
    });

    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach((paragraph) => {
        paragraph.style.border = "none";
    });
}

function toggleDebugging() {
    isDebuggingEnabled = !isDebuggingEnabled;
    if (isDebuggingEnabled) {
        applyCSSDebug();
    } else {
        removeCSSDebug();
    }
    browser.storage.local.set({ debuggingEnabled: isDebuggingEnabled });
}

function handleMessage(request, sender, sendResponse) {
    if (request.toggleDebugging !== undefined) {
        isDebuggingEnabled = request.toggleDebugging;
        if (isDebuggingEnabled) {
            applyCSSDebug();
        } else {
            removeCSSDebug();
        }
    }
}

browser.runtime.onMessage.addListener(handleMessage);
