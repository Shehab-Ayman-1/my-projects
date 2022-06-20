export default function imagesSlider() {
	const Slider_Images = document.querySelector(".Slider-Images");
	const Slider_Images_Main_Image = document.querySelector(".Slider-Images img[alt='Main-Image']");
	const Close_Slider_Images = document.querySelector(".Slider-Images .fa.fa-times");
	const Slider_Images_Nested_Images = document.querySelectorAll(".Slider-Images .swiper-wrapper img");
	const Open_Slider_Images = document.querySelectorAll(".Banner");

	Open_Slider_Images.forEach((img) => (img.onclick = () => Slider_Images.classList.add("Active")));
	Close_Slider_Images.onclick = () => Slider_Images.classList.remove("Active");

	Slider_Images_Nested_Images.forEach((Image) => {
		Image.onclick = (e) => {
			Slider_Images_Main_Image.src = e.target.dataset.image;
			Slider_Images_Nested_Images.forEach((img) => img.classList.remove("Active"));
			e.target.classList.add("Active");
		};
	});
}
