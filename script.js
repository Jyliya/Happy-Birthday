let wowBtn = document.querySelector("#wow-button");
let sound = new Audio("photos/notif.wav");
sound.volume = 0.5;
let music = new Audio("photos/Usher_and_PitBull_-_Dj_got_us_falling_in_love_agai_(mp3.pm).mp3")
music.volume = 0.1;

wowBtn.addEventListener("click", () => {
    document.querySelectorAll(".frame-one").forEach(elem => {
        elem.style.display = "none"
    })
    document.querySelectorAll(".frame-two").forEach(elem => {
        elem.style.display = "block"
    })
    document.querySelector("#congrats").textContent = "🎂Вітання від Hot Book Man!🎂";
    document.querySelector("#confetti").style.display = "block"
    music.play();
    setTimeout(() => {
        document.querySelector("#letter-notif").style.display = "block";
        sound.play();
    }, 5000)
})

let letterBtn = document.querySelector("#open-letter");

letterBtn.addEventListener("click", () => {
    document.querySelectorAll(".frame-two").forEach(elem => {
        elem.style.display = "none"
    })
    document.querySelectorAll(".frame-three").forEach(elem => {
        elem.style.display = "block"
    })
    document.querySelector("#letter-notif").style.display = "none";
    document.querySelector("#congrats").textContent = "Happy Birthday!"
})

document.querySelector("#back-to-rhys").addEventListener("click", () => {
    document.querySelectorAll(".frame-three").forEach(elem => {
        elem.style.display = "none"
    })
    document.querySelectorAll(".frame-two").forEach(elem => {
        elem.style.display = "block"
    })

})
