chrome.runtime.onInstalled.addListener(() => {

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          
            conditions: [
            new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {urlContains: 'www.primevideo.com/detail/'},
            css : ["video"]
          }),
          
            new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {urlContains: 'www.youtube.com/watch'},
            css: ["video"],
          })
          ],
            
          actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
      });

});