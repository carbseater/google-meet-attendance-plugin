console.log("back111")
chrome.browserAction.onClicked.addListener(buttonClicked);


function buttonClicked(tab) {
    let msg = {
        text:"hello"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}