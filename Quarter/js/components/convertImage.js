export function convertImage() {
	let Small = document.querySelectorAll(".One .left .Small-Images img");
	let Big = document.querySelectorAll(".One .left .Big-Images .Main-img");
	Small.forEach((event) => {
		event.onclick = () => {
			Small.forEach((el) => (el.style.opacity = "0.5"));
			event.style.opacity = "0.99";
			Big.forEach((el) => (el.style.opacity = "0"));
			document.querySelector(event.dataset.img).style.opacity = "0.99";
		};
	});
}
