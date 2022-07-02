const trackVessel = document.getElementById("track__vessel");
const backgroundVessel = document.getElementById("background__vessel");
const trackArtistVessel = document.getElementById("track-artist__vessel");
const trackTitleVessel = document.getElementById("track-title__vessel");
const progressBarVessel = document.getElementById("progressBar__vessel");
const currentTimeVessel = document.getElementById("currentTime__vessel");
const durationTimeVessel = document.getElementById("durationTime__vessel");

let playVessel = document.getElementById("play__vessel");
let pauseVessel = document.getElementById("pause__vessel");
let nextVessel = document.getElementById("next-track__vessel");
let prevVessel = document.getElementById("prev-track__vessel");
let stopVessel = document.getElementById("stop__vessel");
let backVessel = document.getElementById("back10__vessel");
let forwardVessel = document.getElementById("forward10__vessel");
trackIndexVessel = 0;

tracksv = [
  "https://res.cloudinary.com/cbanlawi/video/upload/v1614140796/HarryStyles-WatermelonSugar_f5471p.mp3",
  "https://res.cloudinary.com/cbanlawi/video/upload/v1614144520/Justin_Bieber-Yummy_vercib.mp3",

  "https://res.cloudinary.com/cbanlawi/video/upload/v1614186705/Loud_Luxury_ft._Brando_-_Body_fm7cdr.mp3"
];
trackArtistsv = ["Harry Styles", "Justin Bieber", "Loud Luxury ft. Brando"];
trackTitlesv = ["Watermelon Sugar", "Yummy", "Body"];


function pausePlayVessel() {
  if (playing) {
    playVessel.style.display = "none";
    pauseVessel.style.display = "block";
    

    
    trackVessel.play();
    playing = false;
  } else {
    pauseVessel.style.display = "none";
    playVessel.style.display = "block";
    
    
    trackTrench.pause();
    playing = true;
  }
}
playVessel.addEventListener("click", pausePlayVessel);
pauseVessel.addEventListener("click", pausePlayVessel);

function stoptrackVessel() {
  playing = false;
  pausePlayVessel();
  trackVessel.currentTime = 0;
}
stopVessel.addEventListener("click", stoptrackVessel);

function back10Vessel() {
  trackVessel.currentTime = trackVessel.currentTime - 10;
}
backVessel.addEventListener("click", back10Vessel);

function forward10Vessel() {
  trackVessel.currentTime = trackVessel.currentTime + 10;
}
forwardVessel.addEventListener("click", forward10Vessel);

trackVessel.addEventListener("ended", nextTrackVessel);

function nextTrackVessel() {
  trackIndexVessel++;
  if (trackIndexVessel > tracksv.length - 1) {
    trackIndexVessel = 0;
  }
  trackVessel.src = tracksv [trackIndexVessel];
 

  trackArtistVessel.textContent = trackArtistsv[trackIndexVessel];
  trackTitleVessel.textContent = trackTitlesv[trackIndexVessel];

  playing = true;
  pausePlayVessel();
}
nextVessel.addEventListener("click", nextTrackVessel);

function prevTrackVessel() {
  trackIndexVessel--;
  if (trackIndexVessel < 0) {
    trackIndexVessel = tracksv.length - 1;
  }
  trackVessel.src = tracksv[trackIndexVessel];

  trackArtistVessel.textContent = trackArtistsv[trackIndexVessel];
  trackTitleVessel.textContent = trackTitlesv[trackIndexVessel];

  playing = true;
  pausePlayVessel();
}
prevVessel.addEventListener("click", prevTrackVessel);

function progressValueVessel() {
  progressBarVessel.max = trackVessel.duration;
  progressBarVessel.value = trackVessel.currentTime;

  currentTimeVessel.textContent = formatTime(trackVessel.currentTime);
  if (Number.isNaN(trackVessel.duration)) {
    durationTimeVessel.textContent = "--:--";
  } else {
    durationTimeVessel.textContent = formatTime(trackVessel.duration);
  }
}
setInterval(progressValueVessel, 500);

function formatTime(sec) {
  let minutes = Math.floor(sec / 60);
  let seconds = Math.floor(sec - minutes * 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}


function changeProgressBarVessel() {
  trackVessel.currentTime = progressBarVessel.value;
}
progressBarVessel.addEventListener("click", changeProgressBarVessel);