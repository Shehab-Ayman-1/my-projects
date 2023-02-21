export default function fixedBtns(path) {
	const btns = document.querySelector(path);
	if (window.screenX <= 600) {
		if (window.scrollY < 20) btns.style.bottom = "-50px";
		else btns.style.bottom = "40px";
	}
}
