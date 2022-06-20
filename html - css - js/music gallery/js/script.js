let Boxes = document.querySelectorAll(".Catagory .box");
let Close = document.querySelector(".FitchAudio .fa-close");
let Audio = document.querySelector(".FitchAudio audio");
let Fitch = document.querySelector(".FitchAudio");
let BoxText = document.querySelectorAll(".Catagory .box .Content h1");
let AudioText = document.querySelector(".FitchAudio h1");

Boxes.forEach((Box) => {
    Box.onclick = function () {
        Fitch.classList.add("Active");
        Audio.src = Box.dataset.audio;
        AudioText.innerText = Box.querySelector(".Content h1").innerHTML;
        console.log();
    };
    Close.onclick = function () {
        Fitch.classList.remove("Active");
        Audio.src = "";
    };
});
