var videoPlayer, pButton, contentScriptLoaded = false;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

    if (request.type == 'initialize' && !contentScriptLoaded) {

        videoPlayer = document.getElementsByTagName('video')[0];

        videoPlayer.addEventListener('sendPause',()=>{
            //change this to send pause message
            console.log('paused');
        })
        
        videoPlayer.addEventListener('sendPlay',()=>{
            //change this to send play message
            console.log('resumed');
        })

        contentScriptLoaded = true;
        sendResponse({status : true});
    }

    if(request.type == 'pauseReceived')
    {
        videoPlayer.pause();
        sendResponse({status : true});
    }

    if(request.type == 'playReceived')
    {
        videoPlayer.play();
        sendResponse({status : true});
    }

})
