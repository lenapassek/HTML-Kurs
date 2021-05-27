const video = document.querySelector("video");
var newTime = 0;

let playMedia = function () {
    video.play();
    progressLoop();
}
let playButton = document.querySelector("#playButton");
playButton.addEventListener("click", playMedia);

let pauseMedia = function () {
    video.pause();
}
let pauseButton = document.querySelector("#pauseButton");
pauseButton.addEventListener("click", pauseMedia);

let stopMedia = function() {
    video.currentTime = 0;
    video.pause();
}
let stopButton = document.querySelector("#stopButton");
stopButton.addEventListener("click", stopMedia);

let forwardMedia = function() {
    newTime = video.currentTime + 5;

    if(newTime>video.duration) {
        video.currentTime = 0;
        video.pause();
    }else{
        video.currentTime = newTime;
    }
}
let forwardButton = document.querySelector("#forwardButton");
forwardButton.addEventListener("click", forwardMedia);

let backwardMedia = function() {
    newTime = video.currentTime - 5;

    if(newTime<0){
        video.currentTime = 0;
        video.pause();
    }else{
        video.currentTime = newTime;
    }
}
let backwardButton = document.querySelector("#backwardButton");
backwardButton.addEventListener("click", backwardMedia);

let mediaMuted = function() {

    /*if(video.muted){
        video.muted = false;
    }else{
        video.muted = true;
    }*/
    video.muted = !(video.muted);
}
let muteButton = document.querySelector("#muteButton");
muteButton.addEventListener("click", mediaMuted);

const progress = document.getElementById( "progress" );

function progressLoop() {
    setInterval(function () {
        progress.value = Math.round(
            (video.currentTime / video.duration) * 100);
    });
  }