let h1 = document.querySelector("#header1");
let hiddenP = document.querySelector("#hidden-p");
let btn = document.querySelector("#btn1");
let img = document.querySelector("#img1");
let song = document.querySelector("#song");

btn.addEventListener("click", show);
img.addEventListener("click", click21)

function show() {
    hiddenP.hidden = false;
    img.hidden = false;
    btn.hidden = true;
    document.body.style.backgroundImage = "url(balloons.gif)";
    document.body.style.backgroundColor = "#39FF14"
    document.body.style.backgroundSize = "cover";
    song.volume = 0.08;
    song.play();
    // var audio = new Audio('WOW.mp3');
    // audio.play();
}
let index = 0;

function click21() {
    index++;
    if (index == 21) {
        song.src = "Димин День.mp3"
        song.play()
        song.volume = 0.23;
    }
}