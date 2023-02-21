// ======================= Header =========================
let Progress = document.querySelector("header .Progress");
let Max = window.document.body.scrollHeight - window.innerHeight;
window.onload = () => (Progress.style.width = `${(window.scrollY / Max) * 100}%`);
window.onscroll = () => {
	Progress.style.width = `${(window.scrollY / Max) * 100}%`;
	let Links = document.querySelectorAll("header nav a");
	let Sections = document.querySelectorAll("section");
	Sections.forEach((Section) => {
		let ID = Section.getAttribute("id");
		let OffsetSection = Section.offsetTop - 200;
		if (window.scrollY > OffsetSection) {
			Links.forEach((link) => {
				link.classList.remove("Active");
				document.querySelector(`header nav a[href*=${ID}]`).classList.add("Active");
			});
		}
	});
};

// ======================= NaveBar ========================
let NavBar = document.querySelector("header nav");
let Bars = document.querySelector("header .Icons i.fa-bars");
Bars.onclick = () => NavBar.classList.toggle("Active");

// ======================= Night-Mode =====================
let NightMood = document.querySelector(".NightMood");
NightMood.onclick = () => {
	if (NightMood.className === "far fa-moon NightMood") {
		NightMood.className = "fa fa-sun NightMood";
		console.log(Window);
		document.body.classList.add("Active");
	} else {
		NightMood.className = "far fa-moon NightMood";
		document.body.classList.remove("Active");
	}
};
