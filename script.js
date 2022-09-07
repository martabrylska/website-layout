const bar = document.querySelector(".header__bar");
const main = document.querySelector(".wrapper");
const story = document.querySelector(".story");
const facebookPlus = document.querySelector(".socials__facebook-plus");
const facebookYes = document.querySelector(".socials__facebook-yes");
const twitterPlus = document.querySelector(".socials__twitter-plus");
const twitterYes = document.querySelector(".socials__twitter-yes");
const followFacebook = document.querySelector(".socials__facebook-follow");
const followTwitter = document.querySelector(".socials__twitter-follow");
const arrowLeft = document.querySelector(".story__arrow-left");
const arrowRight = document.querySelector(".story__arrow-right");
const dots = document.querySelectorAll(".story__dot")

const images = ["console.jpg", "board.jpg", "laptop.jpg", "phone.jpg"];
let active = 0;

let flagF = false;
let flagT = true;

function showMain() {
main.classList.toggle("wrapper__main--open");
story.classList.toggle("story__main--open");
bar.classList.toggle("header__bar--active")
}

bar.addEventListener('click', showMain)

function followFace() {
    flagF = !flagF
    facebookYes.classList.toggle("socials__yes--active")
    facebookPlus.classList.toggle("socials__plus--active")
    if (flagF === true) {
        followFacebook.textContent = "Following";
    } else {
        followFacebook.textContent = "Follow";
    }
}

facebookPlus.addEventListener('click', followFace)
facebookYes.addEventListener('click', followFace)

function followTwit() {
    flagT = !flagT;
    twitterYes.classList.toggle("socials__yes--active")
    twitterPlus.classList.toggle("socials__plus--active")
    if (flagT === true) {
        followTwitter.textContent = "Following";
    } else {
        followTwitter.textContent = "Follow";
    }
}

twitterPlus.addEventListener('click', followTwit)
twitterYes.addEventListener('click', followTwit)

function changeSlide() {
    active++
    if (active>=images.length) {
        active = 0
    }
        story.style.backgroundImage = `url(${images[active]})`
    changeDot()
    return active;
    }

let banerStart = setInterval(changeSlide, 3000);

function changeImage() {
    clearInterval(banerStart)
    if (this === arrowLeft){
    active--;
    } 
    if (this === arrowRight) {
        active++;
    }
    if (active===-1) {
        active = images.length-1;
    }
    if (active >= images.length) {
        active = 0;
    }    
    story.style.backgroundImage = `url(${images[active]})`
    changeDot()
    banerStart = setInterval(changeSlide, 3000);
    return active;
}

function changeDot() {
dots.forEach((dot, index) => {
if (index === active) {
    dot.classList.add("story__dot--active")
} else {
    dot.classList.remove("story__dot--active")
}
})
}

arrowLeft.addEventListener('click', changeImage)
arrowRight.addEventListener('click', changeImage)
