export function sectionFive() {
	const AllButtons = document.querySelectorAll(".Five .swiper .swiper-wrapper .swiper-slide");
	AllButtons.forEach((item) => (item.onclick = () => item.classList.toggle("Active")));
}
