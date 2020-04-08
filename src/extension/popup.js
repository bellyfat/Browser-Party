
document.addEventListener('DOMContentLoaded', () => {
  // var button = document.getElementById('changeColor');

  // button.onclick = function (element) {

  //   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

  //     chrome.tabs.sendMessage(tabs[0].id, {type : 'initialize'}, (response) => {
  //       console.log(response.status)
  //     })
  //   })

  // };

  var joinServerButton = document.getElementById('joinServerButton')

  var hideMain = function() {
    var mainDiv = document.getElementsByClassName('main')[0];
    mainDiv.style.display = "none";
  };

  joinServerButton.addEventListener('click', () => {

    hideMain();
    var joinServerDiv = document.getElementsByClassName("join-server")[0]
    joinServerDiv.style.display = "block";
    
  })
})