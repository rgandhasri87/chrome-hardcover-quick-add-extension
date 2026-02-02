chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed!");

    chrome.contextMenus.create({
        id: "add-to-hardcover",
        title: "Add \"%s\" to Hardcover",
        contexts: ["selection"]
    })
})


chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    if (info.menuItemId === "add-to-hardcover") {
        const selectedText = info.selectionText;
        console.log("User selected:", selectedText);
        
        await chrome.sidePanel.open({ windowId : tab.windowId})
    }
});