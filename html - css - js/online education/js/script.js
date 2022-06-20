// ====================== NaveBar ======================
let NaveBar = document.querySelector("header nav");
let NaveBtn = document.querySelector("header .Icons .fa-bars");
NaveBtn.onclick = function () {
    NaveBar.classList.toggle("Active");
};

// ====================== Video ========================
let CloseVideo = document.querySelector(".Course-3 .FitchVideo .fa-close");
let MainVideos = document.querySelectorAll(".Course-3 .Catagory3 .box video");
let FitchVideo = document.querySelector(".Course-3 .FitchVideo video");
let Fitch = document.querySelector(".Course-3 .FitchVideo");

MainVideos.forEach((Video) => {
    Video.onclick = function () {
        FitchVideo.src = Video.getAttribute("src");
        Fitch.classList.add("Show");
        console.log(FitchVideo);
    };
    CloseVideo.onclick = function () {
        Fitch.classList.remove("Show");
    };
});

// ====================== Vue.Js ========================
let app = new Vue({
    el: ".Catagory6 form",
});
