// ================= NaveBar Button =================
let NaveBar = document.querySelector("header nav");
let CloseNaveBar = document.querySelector("header nav .fa-close");
let OpenNaveBar = document.querySelector("header .Icons .fa-bars");
OpenNaveBar.onclick = () => {
	NaveBar.classList.toggle("Active");
	Search.classList.remove("Active");
	User.classList.remove("Active");
};
CloseNaveBar.onclick = () => NaveBar.classList.remove("Active");

// ================= Search Button =================
let Search = document.querySelector("header .SearchForm");
let SearchButton = document.querySelector("header .Icons .fa-search");
SearchButton.onclick = () => {
	Search.classList.toggle("Active");
	NaveBar.classList.remove("Active");
	User.classList.remove("Active");
};

// ================= User Button =================
let User = document.querySelector("header .UserForm");
let OpenUserButton = document.querySelector("header .Icons .fa-user");
let CloseUserButton = document.querySelector("header .UserForm .fa-close");
OpenUserButton.onclick = () => {
	User.classList.toggle("Active");
	Search.classList.remove("Active");
	NaveBar.classList.remove("Active");
};
CloseUserButton.onclick = () => User.classList.remove("Active");

// ================= NightMode Button =================
let body = document.querySelector("body");
let MoonButton = document.querySelector("header .Icons .fa-moon");
MoonButton.onclick = () => body.classList.toggle("Active");

// ================= OnScroll =================
window.onscroll = () => {
	let header = document.querySelector("header");
	let Icons = document.querySelector("header .Icons");
	if (window.scrollY > 0) {
		header.classList.add("Active");
		Icons.classList.add("Active");
	} else {
		header.classList.remove("Active");
		Icons.classList.remove("Active");
	}
};

// ================= OnLoad =================
window.onload = () => {
	let header = document.querySelector("header");
	let Icons = document.querySelector("header .Icons");
	if (window.scrollY > 0) {
		header.classList.add("Active");
		Icons.classList.add("Active");
	} else {
		header.classList.remove("Active");
		Icons.classList.remove("Active");
	}
};

// ================= Feasures Galory =================
// ====== Galory One ======
let Small1 = document.querySelectorAll(".Featured .Catagory .box1 .img .Small img");
let Big1 = document.querySelectorAll(".Featured .Catagory .box1 .img .Big img");
Small1.forEach((event) => {
	event.onclick = (click) => {
		Small1.forEach((el) => (el.style.opacity = "0.5"));
		event.style.opacity = "1";

		Big1.forEach((el) => (el.style.opacity = "0"));
		document.querySelector(event.dataset.img).style.opacity = "1";
	};
});

// ====== Galory two ======
let Small2 = document.querySelectorAll(".Featured .Catagory .box2 .img .Small img");
let Big2 = document.querySelectorAll(".Featured .Catagory .box2 .img .Big img");
Small2.forEach((event) => {
	event.onclick = (click) => {
		// Hide All Small Images WithOut The Active One
		Small2.forEach((im) => (im.style.opacity = "0.5"));
		click.currentTarget.style.opacity = "1";

		Big2.forEach((el) => (el.style.opacity = "0"));
		document.querySelector(event.dataset.img).style.opacity = "1";
	};
});

// ====== Galory three ======
let Small3 = document.querySelectorAll(".Featured .Catagory .box3 .img .Small img");
let Big3 = document.querySelectorAll(".Featured .Catagory .box3 .img .Big img");
Small3.forEach((Small) => {
	Small.onclick = (e) => {
		Small3.forEach((item) => (item.style.opacity = "0.5"));
		Small.style.opacity = "1";
		Big3.forEach((img) => (img.src = e.target.getAttribute("src")));
	};
});

// ================= Timer OF Deal =================
let LastYear = new Date("Dec 31, 2022 00:00:00").getTime();
function Timer() {
	let TimeNow = new Date().getTime();
	// Get The Time Between LastYear And TimeNow With MilliSeconds /(1000s * 60m * 60h * 24d)
	Range = LastYear - TimeNow;

	const Second = 1000;
	const Minute = Second * 60;
	const Hour = Minute * 60;
	const Day = Hour * 24;

	let NumberOfDays = Math.floor(Range / Day);
	let NumberOfHours = Math.floor((Range % Day) / Hour);
	let NumberOfMinutes = Math.floor((Range % Hour) / Minute);
	let NumberOfSeconds = Math.floor((Range % Minute) / Second);

	document.querySelector(".Deal .Catagory .left .Time .Days").innerHTML = NumberOfDays;
	document.querySelector(".Deal .Catagory .left .Time .Hours").innerHTML = NumberOfHours;
	document.querySelector(".Deal .Catagory .left .Time .Minutes").innerHTML = NumberOfMinutes;
	document.querySelector(".Deal .Catagory .left .Time .Seconds").innerHTML = NumberOfSeconds;
}

let Clear = setInterval(function () {
	Timer();
}, 1000);

// ================= Swipper =================
var swiper = new Swiper(".Products .Galory .Produc", {
	spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},
});

var swiper = new Swiper(".Reviews .Catagory", {
	spaceBetween: 10,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},
});
