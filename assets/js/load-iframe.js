// References: 
// - https://developers.google.com/youtube/iframe_api_reference
// - https://webninjadeveloper.com/javascript/javascript-iframe-youtube-api-example-to-embed-video-with-advanced-controls-in-browser/

console.log("Loaded load-iframe.js")

const videoID = "sK0J62VFC78" // Blue Serve -- Bill Evans
function videoURL(videoID) {
  return `https://www.youtube.com/v/${videoID}?version=3`
}

// 2. This code loads the IFrame Player API code asynchronously.
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player) after the API code
// downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: videoID,
    playerVars: {
      playsinline: 1,
      autoplay: 0,
      controls: 1,
    },
    events: {
      onReady: onPlayerReady,
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
  showSavedSections()
}
