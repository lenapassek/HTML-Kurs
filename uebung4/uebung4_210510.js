const video = document.querySelector('video');

let playMedia = function () {
    video.play();
}
let playButton = document.querySelector("#playButtonBox");
playButton.addEventListener("click", playMedia);

let pauseMedia = function () {
    video.pause();
}
let pauseButton = document.querySelector("#pauseButtonBox");
pauseButton.addEventListener("click", pauseMedia);
