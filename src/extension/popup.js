
document.addEventListener('DOMContentLoaded', () => {
  var button = document.getElementById('changeColor');

  button.onclick = function (element) {

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

      chrome.tabs.sendMessage(tabs[0].id, {type : 'initialize'}, (response) => {
        console.log(response.status)
      })
    })

  };
})