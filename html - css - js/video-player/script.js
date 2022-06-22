// video player
const video_player = document.querySelector("#video-player");
const video = video_player.querySelector("video");
const video_controls = video_player.querySelector(".video-controls");

// progress Area
const progress_area = video_player.querySelector(".progress-area");
const progress_timeline = progress_area.querySelector(".progress-timeline");
const progress_bar = progress_area.querySelector(".progress-bar");
const progress_watched = progress_area.querySelector(".progress-watched");

// left controls
const left_controls = video_player.querySelector(".left-controls");
const play = left_controls.querySelector(".play");
const back_ward = left_controls.querySelector(".replay");
const next_ward = left_controls.querySelector(".forward");
const volume = left_controls.querySelector(".volume");
const volume_range = left_controls.querySelector(".volume-icon [type='range']");
const current_timer = left_controls.querySelector(".timer .current");
const duration_timer = left_controls.querySelector(".timer .duration");

// right controls
const right_controls = video_player.querySelector(".right-controls");
const auto_play = right_controls.querySelector(".auto-play");
const settings = right_controls.querySelector(".settings");
const picture = right_controls.querySelector(".picture");
const fullscreen = right_controls.querySelector(".fullscreen");

// video settings
const settings_list = video_player.querySelector(".video-settings");
const settings_option = settings_list.querySelectorAll(".list-option");

// ================================================== play & pause =================================================
function playVideo() {
	play.textContent = "pause";
	play.title = "pause";
	video_player.classList.remove("paused");
	video.play();
}

function pauseVideo() {
	play.textContent = "play_arrow";
	play.title = "play";
	video_player.classList.add("paused");
	video.pause();
}

function control_play_pause() {
	const isPaused = video_player.classList.contains("paused");
	!isPaused ? pauseVideo() : playVideo();
}

// play while Click On The Play Icon
play.addEventListener("click", () => {
	control_play_pause();
});

// play while Click On The Video wedget
video.addEventListener("click", () => {
	control_play_pause();
});

// play while Click On The space key
document.addEventListener("keydown", (event) => {
	if (event.key === " ") {
		control_play_pause();
	}
});

// ========================================= increate & decrease timeline ==========================================
// Increase The Video 10 Second
next_ward.addEventListener("click", () => {
	video.currentTime += 10;
});

// Decrease The Video 10 Second
back_ward.addEventListener("click", () => {
	video.currentTime -= 10;
});

// ==================================================== Video ======================================================
function durationLength(element) {
	let videoDuration = video.duration;
	let minutes = Math.floor(videoDuration / 60);
	let seconds = Math.floor(videoDuration % 60);
	element.innerHTML = `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function currentLength(event, element) {
	let currentTime = event.target.currentTime;
	let minutes = Math.floor(currentTime / 60);
	let seconds = Math.floor(currentTime % 60);
	element.innerHTML = `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
	return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

// get The Video Length
video.addEventListener("loadeddata", () => {
	durationLength(duration_timer);
});

// get The Video Current Length & The The Current Timeline Width
video.addEventListener("timeupdate", (event) => {
	currentLength(event, current_timer);

	// set The Current Timeline Width
	let videoDuration = event.target.duration;
	let currentTime = event.target.currentTime;
	let timeLineWidth = (currentTime / videoDuration) * 100000;
	progress_bar.value = timeLineWidth;
	progress_watched.style.width = `${(currentTime / videoDuration) * progress_area.clientWidth}px`;
});

// Repeat The Video After Ended
video.addEventListener("ended", () => {
	if (auto_play.classList.contains("active")) {
		playVideo();
	} else {
		pauseVideo();
	}
});

// Prevent The Normal Control To Show By Right Mouse Click Menu
video.addEventListener("contextmenu", (event) => {
	event.preventDefault();
});

// ==================================================== volume =====================================================
// Enable Muteable The Video
volume.addEventListener("click", () => {
	video_player.classList.toggle("muted");
	let isMuted = video_player.classList.contains("muted");

	if (isMuted) {
		volume.innerHTML = `volume_off`;
		volume.style.color = "red";
		volume_range.value = 0;
		video.volume = 0;
	} else {
		volume.innerHTML = `volume_up`;
		volume.style.color = "white";
		volume_range.value = 80;
		video.volume = volume_range.value / 100;
	}
});

// control In The Volume Range [ get Decimal Number ]
volume_range.addEventListener("change", () => {
	video.volume = volume_range.value / 100;
	if (+volume_range.value === 0) {
		volume.innerHTML = "volume_off";
		volume.style.color = "red";
	} else if (+volume_range.value < 50) {
		volume.innerHTML = "volume_down";
		volume.style.color = "white";
	} else {
		volume.innerHTML = "volume_up";
		volume.style.color = "white";
	}
});

// ================================================= Progress Area =================================================
// Step The Current Video Timeline
progress_area.addEventListener("click", (event) => {
	let videoDuration = video.duration; // get The Video Duration
	let progressAreaWidth = progress_area.clientWidth; // get The Progress Area Width
	let clickOffsetX = event.offsetX; // get The Current Click Point Offset From 0 To This press
	let currentTime = (clickOffsetX / progressAreaWidth) * videoDuration;
	video.currentTime = currentTime;
});

// Enable Timeline To Follow The Progress bar
progress_area.addEventListener("mousemove", (event) => {
	let offsetX = event.offsetX;
	let progressAreaWidth = progress_area.clientWidth;
	let videoDuration = video.duration;

	// set The Timeline Location In The Progressbar
	progress_timeline.style.setProperty("--mouse-offset-x", `${offsetX}px`);

	// get The Current Video Length
	let progressTime = Math.floor((offsetX / progressAreaWidth) * videoDuration);
	let minutes = Math.floor(progressTime / 60);
	let seconds = Math.floor(progressTime % 60);
	progress_timeline.innerHTML = `${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
});

// =================================================== Auto play ===================================================
// Enable Autoplay Switcher
auto_play.addEventListener("click", () => {
	auto_play.classList.toggle("active");
	if (auto_play.classList.contains("active")) {
		auto_play.innerHTML = "repeat_one";
		auto_play.title = "repeat On";
	} else {
		auto_play.innerHTML = "repeat";
		auto_play.title = "repeat off";
	}
});

// =================================================== picture =====================================================
// Enable Small Video Wedget
picture.addEventListener("click", () => {
	video.requestPictureInPicture();
});

// =================================================== Fullscreen ==================================================
// Enable Fullscreen Video
fullscreen.addEventListener("click", () => {
	if (!video_player.classList.contains("open-full-screen")) {
		video_player.classList.add("open-full-screen");
		fullscreen.innerHTML = "fullscreen_exit";
		video_player.requestFullscreen();
	} else {
		video_player.classList.remove("open-full-screen");
		fullscreen.innerHTML = "fullscreen";
		document.exitFullscreen();
	}
});

// =================================================== Settings ====================================================
// open & close settings list
settings.addEventListener("click", () => {
	settings.classList.toggle("active");
	if (settings.classList.contains("active")) {
		settings_list.style.transform = "scaleY(1)";
	} else {
		settings_list.style.transform = "scaleY(0)";
	}
});

// active option
settings_option.forEach((option) => {
	option.addEventListener("click", () => {
		settings_option.forEach((otherOptions) => otherOptions.classList.remove("active"));
		option.classList.add("active");
		video.playbackRate = option.getAttribute("data-speed");
	});
});

// Mind Close Video Control While The Settings List Is Opened
video_player.addEventListener("mouseleave", () => {
	if (settings.classList.contains("active")) {
		video_controls.style.bottom = "0";
	} else {
		video_controls.removeAttribute("style");
	}
});
