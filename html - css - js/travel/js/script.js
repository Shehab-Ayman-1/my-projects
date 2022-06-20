// ========================= NaveBar ========================
let NaveBarButton = document.querySelector("header .fa-bars");
let NaveBar = document.querySelector("header nav");

NaveBarButton.onclick = function() {
	NaveBar.classList.toggle("Active");
};

// ========================= Videos Editing =================
let Video = document.querySelector(".About .Catagory .left video");
let Spans = document.querySelectorAll(".About .Catagory .left span");
Spans.forEach(span => {
	span.onclick = function(click) {
		Video.src = click.target.getAttribute("class");
		Spans.forEach(remove => {
			remove.style.backgroundColor = "var(--White)";
		});
		span.style.backgroundColor = "var(--Blue)";
	};
});

// ========================= OnScroll =======================
let Header = document.querySelector("header");
let Section = document.querySelectorAll("section");
let Links = document.querySelectorAll("header nav a");

window.onscroll = function() {
	if (window.scrollY > 0) {
		Header.classList.add("Active");
	} else {
		Header.classList.remove("Active");
	}
	Section.forEach(section => {
		let Scroll = window.scrollY;
		let OffsetTop = section.offsetTop - 200;
		let ID = section.getAttribute("id");
		if (Scroll > OffsetTop) {
			Links.forEach(link => {
				link.classList.remove("Active");
				document.querySelector("header nav a[href*=" + ID + "]").classList.add("Active");
			});
		}
	});
};
