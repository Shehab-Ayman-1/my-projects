// ================== Search Form ==================
let Search_Form = document.querySelector("header form");
let Search_btn = document.querySelector("header .Icons .fa-search");
Search_btn.onclick = function() {
	Search_Form.classList.toggle("Active");
	NaveBar.classList.remove("Active");
};

// ================== Mark On Link When Click ==================
let NaveBar = document.querySelector("header nav");
let Bars_btn = document.getElementById("Bars_btn");
Bars_btn.onclick = () => {
	NaveBar.classList.toggle("Active");
	Search_Form.classList.remove("Active");
};

// ================== Mark On Link When Click ==================
let Links = document.querySelectorAll("header nav a");
Links.forEach(event => {
	event.addEventListener("click", event => {
		Links.forEach(a => {
			a.classList.remove("Active");
		});
		event.target.classList.add("Active");
	});
});

// ================== Link Marker Follow The Section ==================
let Header = document.querySelector("header");
let Section = document.querySelectorAll("section");

window.onscroll = function() {
	console.log(window.scrollY);
	if (window.scrollY === 0) {
		Header.classList.add("Active");
	} else {
		Header.classList.remove("Active");
	}

	Search_Form.classList.remove("Active");
	NaveBar.classList.remove("Active");
	Section.forEach(event => {
		let Scroll = window.scrollY;
		let OffsetTop = event.offsetTop - 200;
		let ID = event.getAttribute("id");
		if (Scroll >= OffsetTop) {
			Links.forEach(event => {
				event.classList.remove("Active");
				document.querySelector("header nav a[href*=" + ID + "]").classList.add("Active");
			});
		}
	});
};
