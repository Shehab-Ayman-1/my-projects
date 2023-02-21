// =============== NaveBar ==================
let NaveBar = document.querySelector("header nav");
let NaveBtn = document.querySelector("header .Icons .fa-bars");
NaveBtn.onclick = function() {
	NaveBar.classList.toggle("Active");
};

// =============== OnScroll =================
let Header = document.querySelector("header");
let Sections = document.querySelectorAll("section");
let Links = document.querySelectorAll("header nav a");

window.onscroll = function() {
	console.log(window.scrollY);
	// =============== Header ===============
	if (window.scrollY === 0) {
		Header.classList.add("Active");
	} else {
		Header.classList.remove("Active");
	}
	// ========== Links In NaveBar ==========
	Sections.forEach(section => {
		let Scroll = window.scrollY;
		let Offset = section.offsetTop - 200;
		let ID = section.getAttribute("id");
		Links.forEach(link => {
			if (Scroll > Offset) {
				link.classList.remove("Active");
				document.querySelector("header nav a[href*=" + ID + "]").classList.add("Active");
			}
		});
	});
};

// =============== OnLoad =================
window.onload = function() {
	// =============== Header ===============
	if (window.scrollY > 0) {
		Header.classList.add("Active");
	} else {
		Header.classList.remove("Active");
	}
};
