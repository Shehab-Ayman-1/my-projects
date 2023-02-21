import intro from "../components/intro.js";
import { filterArrows, picsSwitcher, bkhBTNS, bathroomCount, badgetRange } from "../components/filter.js";
import { searchBar } from "../components/searchbar.js";
import { filterSort } from "../components/filterSort.js";
import { sectionFive } from "../components/sectionFive.js";
import { convertImage } from "../components/convertImage.js";
import { autoSwiper, normalSwiper } from "../components/swiper.js";

try {
	// ============ Header & Reload & Hearts ============
	intro();

	// ================== Section One ===================
	convertImage();

	// ================== Section Five ==================
	sectionFive();

	// =================== SearchBar ====================
	searchBar("#Search-Navbar select#Select-Home-box", "Please Search Here...");

	// ================== Filter & Sort =================
	filterSort();

	// ================== Filters Part ==================
	// Arrows
	filterArrows(".Search-Filters .filter-title .fa-chevron-up");

	// BKH Btns
	bkhBTNS(".Search-Filters .BKH button");

	// Badget Range
	badgetRange();

	// Show Picturs
	picsSwitcher(".Search-Filters .Only .filter-title .button");

	// Bathroom Counter
	bathroomCount(".Search-Filters .BathRoom .up", ".Search-Filters .BathRoom .down", ".Search-Filters .BathRoom .Count");

	// ===================== Swiper ====================
	autoSwiper(".Parent .Two .left", 20, 3500);

	normalSwiper(".Three .swiper");

	normalSwiper(".Five .swiper");

	normalSwiper(".Distance.swiper", 0, false);
} catch (err) {
	console.error(err);
}
