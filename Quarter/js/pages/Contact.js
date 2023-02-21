import intro from "../components/intro.js";
import imagesSlider from "../components/imagesSlider.js";
import fixedBtns from "../components/fixedBtns.js";
import { autoSwiper, normalSwiper } from "../components/swiper.js";

try {
	// ============ Header & Reload & Hearts ============
	intro();

	// ================== Images Slider =================
	imagesSlider();

	// =================== Fixed Btns ===================
	window.onscroll = () => {
		fixedBtns(".Amenities .Btns");
	};

	// ===================== Swiper =====================
	autoSwiper(".Banner .Content-Slider");

	normalSwiper(".Slider-Images .The-Lested-Images", 20, false);

	normalSwiper(".Amenities .Properties .Catagory");
} catch (err) {
	console.error(err);
}
