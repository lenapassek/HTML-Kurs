const video = document.querySelector('video');

let playMedia = function () {
    video.play();
}
let playButton = document.querySelector("#playButton");
playButton.addEventListener("click", playMedia);

let pauseMedia = function () {
    video.pause();
}
let pauseButton = document.querySelector("#pauseButton");
pauseButton.addEventListener("click", pauseMedia);
