// ========================================= Animation =========================================
function Animation() {
	let Gradiant = document.querySelector(".Grediant");

	let span = document.createElement("span");

	let Range = Math.random();

	span.style.height = `${50 + Range * 80}px`;
	span.style.width = `${50 + Range * 80}px`;

	span.style.top = `${Range * innerHeight}px`;
	span.style.left = `${Range * innerWidth}px`;

	Gradiant.appendChild(span);

	setTimeout(() => span.remove(), 4000);
}

setInterval(() => Animation(), 600);

// ========================================= NavBar =========================================
window.onscroll = () => {
	document.querySelectorAll("selector");
};
