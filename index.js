let video = document.querySelector(".video");
let toggleBtn = document.querySelector(".toggleButton");
let progress = document.querySelector(".progress");
let progressBar = document.querySelector(".progress_filled");
console.log(progress.offsetWidth);
console.log(video.duration);



function togglePlay(){
    if(video.paused || video.ended){
        video.play();
    }
    else{
      video.pause();    }
}
function changeBtnText(){
    toggleBtn.innerHTML = video.paused ? "<i class='fa-solid fa-play'></i>" : "<i class='fa-solid fa-pause'></i>"
}

if(video.duration == 5.000000){
    video.pause();
}

toggleBtn.addEventListener("click",togglePlay);
toggleBtn.addEventListener("click",changeBtnText)
video.addEventListener("click",togglePlay);
video.addEventListener("click",changeBtnText);

video.addEventListener("timeupdate",handleProgress);
progress.addEventListener(("click",scrub));
let mousedown = false;
progress.addEventListener("mousedown",()=>{   //track pressing of mouse button
    mousedown = true;   // track mouse button pressing
});
progress.addEventListener("mousemove",(e) =>{  // mouse actions are performs to enable sliding through the video
    console.log(e);
    mousedown && scrub(e);
});

progress.addEventListener("mouseup", ()=>{ //detect mouse release action
    mousedown = false;
})

function handleProgress(){
    const progresspercentage = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${progresspercentage}%`;
}
function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration; //offsetx= curson positin in x(in pixels),offsetWidth=width of element(in pixels)
    video.currentTime = scrubTime;
}