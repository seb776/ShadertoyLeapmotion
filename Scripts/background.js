chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.iconOn) {
            chrome.browserAction.setIcon({
                path:"../Images/OKicon.png",
                tabId: sender.tab.id
            });
        }
        if(!request.iconOn) {
            chrome.browserAction.setIcon({
                  path:"../Images/KOicon.png",
                tabId: sender.tab.id
            });
        }
    }
);