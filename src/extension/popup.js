var button = document.getElementById('changeColor');

  button.onclick = function(element) {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: 'content.js'});
    });
  };