export default function intro() {
	// ===================== NavBar ====================
	let NavBar = document.querySelector("header .NavBar");
	let OpenNavbar = document.querySelector("header .fa-bars");
	let CloseNavbar = document.querySelector("header .NavBar .fa-times");
	let Links = document.querySelectorAll("header .NavBar .Main");

	OpenNavbar.onclick = () => {
		NavBar.classList.add("Active");
		OpenNavbar.style.opacity = "0";
		CloseNavbar.style.opacity = "1";
	};

	CloseNavbar.onclick = () => {
		NavBar.classList.remove("Active");
		OpenNavbar.style.opacity = "1";
		CloseNavbar.style.opacity = "0";
	};

	Links.forEach((link) => {
		link.onclick = () => {
			link.querySelector(".Nested-List").classList.toggle("Active");
			if (link.querySelector(".title .fas").className == "fas fa-minus Rotate") {
				link.querySelector(".title .fas").className = "fas fa-plus";
			} else {
				link.querySelector(".title .fas").className = "fas fa-minus Rotate";
			}
		};
	});

	// ===================== Reload ====================
	let reloadPage = document.createElement("div");
	reloadPage.className = "Reload-Page";
	document.body.appendChild(reloadPage);
	setTimeout(() => (document.querySelector(".Reload-Page").style.display = "none"), 1000);

	// ===================== Heart =====================
	let Heart = document.querySelectorAll(".fa-heart");
	if (Heart) Heart.forEach((item) => (item.onclick = (e) => e.target.classList.toggle("Heart")));
}
