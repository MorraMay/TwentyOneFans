
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const signUp_2Button = document.getElementById('signUp_2');
const signIn_2Button = document.getElementById('signIn_2');
const signUp_3Button = document.getElementById('signUp_3');
const signIn_3Button = document.getElementById('signIn_3');
const container = document.getElementById('container');
const container_2 = document.getElementById('container_2');
const container_3 = document.getElementById('container_3');


signUpButton.addEventListener('click', () =>
container.classList.add('right-panel-active'));

signUp_2Button.addEventListener('click', () =>
container_2.classList.add('right-panel-active'));

signUp_3Button.addEventListener('click', () =>
container_3.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
container.classList.remove('right-panel-active'));

signIn_2Button.addEventListener('click', () =>
container_2.classList.remove('right-panel-active'));

signIn_3Button.addEventListener('click', () =>
container_3.classList.remove('right-panel-active'));



const track = document.getElementById("track");
const background = document.getElementById("background");
const trackArtist = document.getElementById("track-artist");
const trackTitle = document.getElementById("track-title");
const progressBar = document.getElementById("progressBar");
const currentTime = document.getElementById("currentTime");
const durationTime = document.getElementById("durationTime");



let play = document.getElementById("play");
let pause = document.getElementById("pause");
let next = document.getElementById("next-track");
let prev = document.getElementById("prev-track");
let stop = document.getElementById("stop");
let back = document.getElementById("back10");
let forward = document.getElementById("forward10");
trackIndex = 0;


tracks = [
  "/audio/Blurry/twenty one pilots - heavydirtysoul.mp3",
  "/audio/Blurry/twenty one pilots - stressed out.mp3",
  "/audio/Blurry/twenty one pilots - ride.mp3",
  "/audio/Blurry/twenty one pilots - fairly local.mp3",
  "/audio/Blurry/twenty one pilots - tear in my heart.mp3",
  "/audio/Blurry/twenty one pilots - lane boy.mp3",
  "/audio/Blurry/twenty one pilots - the judge.mp3",
  "/audio/Blurry/twenty one pilots - doubt.mp3",
  "/audio/Blurry/twenty one pilots - polarize.mp3",
  "/audio/Blurry/twenty one pilots - we don't believe what's on tv.mp3",
  "/audio/Blurry/twenty one pilots - message man.mp3",
  "/audio/Blurry/twenty one pilots - not today.mp3",
  "/audio/Blurry/twenty one pilots - goner.mp3"
];

trackArtists = ["Twenty One Pilots", "Twenty One Pilots", "Twenty One Pilots", "Twenty One Pilots", "Twenty One Pilots", "Twenty One Pilots", "Twenty One Pilots", "Twenty One Pilots", "Twenty One Pilots", "Twenty One Pilots", "Twenty One Pilots", "Twenty One Pilots", "Twenty One Pilots", "Twenty One Pilots",];
trackTitles = ["Heavydirtysoul", "Stressed out", "Ride", "Fairly Local", "Tear In My Heart", "Lane Boy", "The Judge", "Doubt", "Polarize", "WDBWOT", "Message Man", "Not Today", "Goner",];


let playing = true;

function pausePlay() {
  if (playing) {
    play.style.display = "none";
    pause.style.display = "block";
    

    //thumbnail.style.transform = "scale(1.25)";
    
    track.play();
    playing = false;
  } else {
    pause.style.display = "none";
    play.style.display = "block";
    

    //thumbnail.style.transform = "scale(1)";
    
    track.pause();
    playing = true;
  }
}
play.addEventListener("click", pausePlay);
pause.addEventListener("click", pausePlay);

function stoptrack() {
  playing = false;
  pausePlay();
  track.currentTime = 0;
}
stop.addEventListener("click", stoptrack);

function back10() {
  track.currentTime = track.currentTime - 10;
}
back.addEventListener("click", back10);

function forward10() {
  track.currentTime = track.currentTime + 10;
}
forward.addEventListener("click", forward10);

track.addEventListener("ended", nextTrack);

function nextTrack() {
  trackIndex++;
  if (trackIndex > tracks.length - 1) {
    trackIndex = 0;
  }
  track.src = tracks[trackIndex];
  //thumbnail.src = thumbnails[trackIndex];
  //background.src = thumbnails[trackIndex];
  trackArtist.textContent = trackArtists[trackIndex];
  trackTitle.textContent = trackTitles[trackIndex];

  playing = true;
  pausePlay();
}
next.addEventListener("click", nextTrack);

function prevTrack() {
  trackIndex--;
  if (trackIndex < 0) {
    trackIndex = tracks.length - 1;
  }
  track.src = tracks[trackIndex];
  //thumbnail.src = thumbnails[trackIndex];
  //background.src = thumbnails[trackIndex];

  trackArtist.textContent = trackArtists[trackIndex];
  trackTitle.textContent = trackTitles[trackIndex];

  playing = true;
  pausePlay();
}
prev.addEventListener("click", prevTrack);

function progressValue() {
  progressBar.max = track.duration;
  progressBar.value = track.currentTime;

  currentTime.textContent = formatTime(track.currentTime);

  if (Number.isNaN(track.duration)) {
    durationTime.textContent = "--:--";
  } else {
    durationTime.textContent = formatTime(track.duration);
  }

}
setInterval(progressValue, 500);


function formatTime(sec) {
  let minutes = Math.floor(sec / 60);
  let seconds = Math.floor(sec - minutes * 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

function changeProgressBar() {
  track.currentTime = progressBar.value;
}
progressBar.addEventListener("click", changeProgressBar);


//ВТОРОЙ ПЛЕЕР//

const trackTrench = document.getElementById("track__trench");
const backgroundTrench = document.getElementById("background__trench");
const trackArtistTrench = document.getElementById("track-artist__trench");
const trackTitleTrench = document.getElementById("track-title__trench");
const progressBarTrench = document.getElementById("progressBar__trench");
const currentTimeTrench = document.getElementById("currentTime__trench");
const durationTimeTrench = document.getElementById("durationTime__trench");

let playTrench = document.getElementById("play__trench");
let pauseTrench = document.getElementById("pause__trench");
let nextTrench = document.getElementById("next-track__trench");
let prevTrench = document.getElementById("prev-track__trench");
let stopTrench = document.getElementById("stop__trench");
let backTrench = document.getElementById("back10__trench");
let forwardTrench = document.getElementById("forward10__trench");
trackIndexTrench = 0;

trackss = [
  "/audio/Trench/twenty one pilots - Jumpsuit.mp3",
  "/audio/Trench/twenty one pilots - Levitate.mp3",
  "/audio/Trench/twenty one pilots - Morph.mp3",
  "/audio/Trench/twenty one pilots - My Blood.mp3",
  "/audio/Trench/twenty one pilots - Chlorine.mp3",
  "/audio/Trench/twenty one pilots - Smithereens.mp3",
  "/audio/Trench/twenty one pilots - Neon Gravestones.mp3",
  "/audio/Trench/twenty one pilots - The Hype.mp3",
  "/audio/Trench/twenty one pilots - Nico And The Niners.mp3",
  "/audio/Trench/twenty one pilots - Cut My Lip.mp3",
  "/audio/Trench/twenty one pilots - Bandito.mp3",
  "/audio/Trench/twenty one pilots - Pet Cheetah.mp3",
  "/audio/Trench/twenty one pilots - Legend.mp3",
  "/audio/Trench/twenty one pilots - Leave The City.mp3",
];
trackArtistss = ["Twenty One Pilots", "Twenty One Pilots", "Twenty One Pilots", "Twenty One Pilots", "Twenty One Pilots", "Twenty One Pilots", "Twenty One Pilots", "Twenty One Pilots", "Twenty One Pilots", "Twenty One Pilots", "Twenty One Pilots", "Twenty One Pilots", "Twenty One Pilots", "Twenty One Pilots"];
trackTitless = ["Jumpsuit", "Levitate", "Morph", "My Blood","Chlorine","Smithereens","Neon Gravestones","The Hype","Nico And The Niners","Cut My Lip","Bandito","Pet Cheetah","Legend","Leave The City",];



function pausePlayTrench() {
  if (playing) {
    playTrench.style.display = "none";
    pauseTrench.style.display = "block";
    

    //thumbnail.style.transform = "scale(1.25)";
    
    trackTrench.play();
    playing = false;
  } else {
    pauseTrench.style.display = "none";
    playTrench.style.display = "block";
    

    //thumbnail.style.transform = "scale(1)";
    
    trackTrench.pause();
    playing = true;
  }
}
playTrench.addEventListener("click", pausePlayTrench);
pauseTrench.addEventListener("click", pausePlayTrench);

function stoptrackTrench() {
  playing = false;
  pausePlayTrench();
  trackTrench.currentTime = 0;
}
stopTrench.addEventListener("click", stoptrackTrench);

function back10Trench() {
  trackTrench.currentTime = trackTrench.currentTime - 10;
}
backTrench.addEventListener("click", back10Trench);

function forward10Trench() {
  trackTrench.currentTime = trackTrench.currentTime + 10;
}
forwardTrench.addEventListener("click", forward10Trench);

trackTrench.addEventListener("ended", nextTrackTrench);

function nextTrackTrench() {
  trackIndexTrench++;
  if (trackIndexTrench > trackss.length - 1) {
    trackIndexTrench = 0;
  }
  trackTrench.src = trackss [trackIndexTrench];
  //thumbnail.src = thumbnails[trackIndex];
  //background.src = thumbnails[trackIndex];

  trackArtistTrench.textContent = trackArtistss[trackIndexTrench];
  trackTitleTrench.textContent = trackTitless[trackIndexTrench];

  playing = true;
  pausePlayTrench();
}
nextTrench.addEventListener("click", nextTrackTrench);

function prevTrackTrench() {
  trackIndexTrench--;
  if (trackIndexTrench < 0) {
    trackIndexTrench = trackss.length - 1;
  }
  trackTrench.src = trackss[trackIndexTrench];
  //thumbnail.src = thumbnails[trackIndex];
  //background.src = thumbnails[trackIndex];
  trackArtistTrench.textContent = trackArtistss[trackIndexTrench];
  trackTitleTrench.textContent = trackTitless[trackIndexTrench];

  playing = true;
  pausePlayTrench();
}
prevTrench.addEventListener("click", prevTrackTrench);

function progressValueTrench() {
  progressBarTrench.max = trackTrench.duration;
  progressBarTrench.value = trackTrench.currentTime;

  currentTimeTrench.textContent = formatTime(trackTrench.currentTime);
  if (Number.isNaN(trackTrench.duration)) {
    durationTimeTrench.textContent = "--:--";
  } else {
    durationTimeTrench.textContent = formatTime(trackTrench.duration);
  }
}
setInterval(progressValueTrench, 500);

function formatTime(sec) {
  let minutes = Math.floor(sec / 60);
  let seconds = Math.floor(sec - minutes * 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

function changeProgressBarTrench() {
  trackTrench.currentTime = progressBarTrench.value;
}
progressBarTrench.addEventListener("click", changeProgressBarTrench);


//ТРЕТИЙ ПЛЕЕР//

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

//Выпадающий список//

$(document).ready(function () {
  $('.name-lirycs-1').click(function(event) {
  $('.name-lirycs-1, .track-lirycs-sub-1').toggleClass('active');
  });

  $('.name-lirycs-2').click(function(event) {
    $('.name-lirycs-2, .track-lirycs-sub-2').toggleClass('active');
    });

  $('.name-lirycs-3').click(function(event) {
    $('.name-lirycs-3, .track-lirycs-sub-3').toggleClass('active');
    });

  $('.name-lirycs-4').click(function(event) {
    $('.name-lirycs-4, .track-lirycs-sub-4').toggleClass('active');
    });

  $('.name-lirycs-5').click(function(event) {
    $('.name-lirycs-5, .track-lirycs-sub-5').toggleClass('active');
    });

  $('.name-lirycs-6').click(function(event) {
    $('.name-lirycs-6, .track-lirycs-sub-6').toggleClass('active');
    }); 

  $('.name-lirycs-7').click(function(event) {
     $('.name-lirycs-7, .track-lirycs-sub-7').toggleClass('active');
    });
    
  $('.name-lirycs-8').click(function(event) {
    $('.name-lirycs-8, .track-lirycs-sub-8').toggleClass('active');
    });
    
  $('.name-lirycs-9').click(function(event) {
    $('.name-lirycs-9, .track-lirycs-sub-9').toggleClass('active');
    }); 
      
  $('.name-lirycs-10').click(function(event) {
    $('.name-lirycs-10, .track-lirycs-sub-10').toggleClass('active');
    });

  $('.name-lirycs-11').click(function(event) {
    $('.name-lirycs-11, .track-lirycs-sub-11').toggleClass('active');
    });
  
  $('.name-lirycs-12').click(function(event) {
    $('.name-lirycs-12, .track-lirycs-sub-12').toggleClass('active');
    }); 
      
  $('.name-lirycs-13').click(function(event) {
    $('.name-lirycs-13, .track-lirycs-sub-13').toggleClass('active');
    });     
  $('.name-lirycs-14').click(function(event) {
    $('.name-lirycs-14, .track-lirycs-sub-14').toggleClass('active');
    });

    $('.name-liryc-1').click(function(event) {
      $('.name-liryc-1, .track-liryc-sub-1').toggleClass('active');
      });
  
    $('.name-liryc-2').click(function(event) {
      $('.name-liryc-2, .track-liryc-sub-2').toggleClass('active');
    });
    
    $('.name-liryc-3').click(function(event) {
      $('.name-liryc-3, .track-liryc-sub-3').toggleClass('active');
      });
      $('.name-liryc-4').click(function(event) {
        $('.name-liryc-4, .track-liryc-sub-4').toggleClass('active');
        });
        $('.name-liryc-5').click(function(event) {
     $('.name-liryc-5, .track-liryc-sub-5').toggleClass('active');
    });
    $('.name-liryc-6').click(function(event) {
    $('.name-liryc-6, .track-liryc-sub-6').toggleClass('active');
    });
    $('.name-liryc-7').click(function(event) {
     $('.name-liryc-7, .track-liryc-sub-7').toggleClass('active');
     });
    $('.name-liryc-8').click(function(event) {
      $('.name-liryc-8, .track-liryc-sub-8').toggleClass('active');
    });
    $('.name-liryc-9').click(function(event) {
    $('.name-liryc-9, .track-liryc-sub-9').toggleClass('active');
    });
    $('.name-liryc-10').click(function(event) {
      $('.name-liryc-10, .track-liryc-sub-10').toggleClass('active');
    });
    $('.name-liryc-11').click(function(event) {
      $('.name-liryc-11, .track-liryc-sub-11').toggleClass('active');
    });
    $('.name-liryc-12').click(function(event) {
      $('.name-liryc-12, .track-liryc-sub-12').toggleClass('active');
    });
    $('.name-liryc-13').click(function(event) {
      $('.name-liryc-13, .track-liryc-sub-13').toggleClass('active');
    });
    $('.name-liryc-14').click(function(event) {
      $('.name-liryc-14, .track-liryc-sub-14').toggleClass('active');
    });

    //TRENCH LIST//

    $('.name-liry-1').click(function(event) {
      $('.name-liry-1, .track-liry-sub-1').toggleClass('active');
      });
    
      $('.name-liry-2').click(function(event) {
        $('.name-liry-2, .track-liry-sub-2').toggleClass('active');
        });
    
      $('.name-liry-3').click(function(event) {
        $('.name-liry-3, .track-liry-sub-3').toggleClass('active');
        });
    
      $('.name-liry-4').click(function(event) {
        $('.name-liry-4, .track-liry-sub-4').toggleClass('active');
        });
    
      $('.name-liry-5').click(function(event) {
        $('.name-liry-5, .track-liry-sub-5').toggleClass('active');
        });
    
      $('.name-liry-6').click(function(event) {
        $('.name-liry-6, .track-liry-sub-6').toggleClass('active');
        }); 
    
      $('.name-liry-7').click(function(event) {
         $('.name-liry-7, .track-liry-sub-7').toggleClass('active');
        });
        
      $('.name-liry-8').click(function(event) {
        $('.name-liry-8, .track-liry-sub-8').toggleClass('active');
        });
        
      $('.name-liry-9').click(function(event) {
        $('.name-liry-9, .track-liry-sub-9').toggleClass('active');
        }); 
          
      $('.name-liry-10').click(function(event) {
        $('.name-liry-10, .track-liry-sub-10').toggleClass('active');
        });
    
      $('.name-liry-11').click(function(event) {
        $('.name-liry-11, .track-liry-sub-11').toggleClass('active');
        });
      
      $('.name-liry-12').click(function(event) {
        $('.name-liry-12, .track-liry-sub-12').toggleClass('active');
        }); 
          
      $('.name-liry-13').click(function(event) {
        $('.name-liry-13, .track-liry-sub-13').toggleClass('active');
        });     
      $('.name-liry-14').click(function(event) {
        $('.name-liry-14, .track-liry-sub-14').toggleClass('active');
        });
    
        $('.name-lir-1').click(function(event) {
          $('.name-lir-1, .track-lir-sub-1').toggleClass('active');
          });
        $('.name-lir-2').click(function(event) {
          $('.name-lir-2, .track-lir-sub-2').toggleClass('active');
        });
        $('.name-lir-3').click(function(event) {
          $('.name-lir-3, .track-lir-sub-3').toggleClass('active');
          });
          $('.name-lir-4').click(function(event) {
            $('.name-lir-4, .track-lir-sub-4').toggleClass('active');
            });
            $('.name-lir-5').click(function(event) {
         $('.name-lir-5, .track-lir-sub-5').toggleClass('active');
        });
        $('.name-lir-6').click(function(event) {
        $('.name-lir-6, .track-lir-sub-6').toggleClass('active');
        });
        $('.name-lir-7').click(function(event) {
         $('.name-lir-7, .track-lir-sub-7').toggleClass('active');
         });
        $('.name-lir-8').click(function(event) {
          $('.name-lir-8, .track-lir-sub-8').toggleClass('active');
        });
        $('.name-lir-9').click(function(event) {
          $('.name-lir-9, .track-lir-sub-9').toggleClass('active');
        });
        $('.name-lir-10').click(function(event) {
          $('.name-lir-10, .track-lir-sub-10').toggleClass('active');
        });
        $('.name-lir-11').click(function(event) {
          $('.name-lir-11, .track-lir-sub-11').toggleClass('active');
        });
        $('.name-lir-12').click(function(event) {
          $('.name-lir-12, .track-lir-sub-12').toggleClass('active');
        });
        $('.name-lir-13').click(function(event) {
          $('.name-lir-13, .track-lir-sub-13').toggleClass('active');
        });
        $('.name-lir-14').click(function(event) {
          $('.name-lir-14, .track-lir-sub-14').toggleClass('active');
        });
});    

