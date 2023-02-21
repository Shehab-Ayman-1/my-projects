import intro from "../components/intro.js";
import * as filter from "../components/filter.js";
import { mobileSearch, desktopSearch, searchBar } from "../components/searchbar.js";
import { autoSwiper, normalSwiper } from "../components/swiper.js";

try {
	console.log(filter);
	// ============ Header & Reload & Hearts ============
	intro();

	// ================== Mobile-Search =================
	mobileSearch();

	// ================== Desktop-Search ================
	desktopSearch();

	searchBar(".Services .Search .Mid .Catagory #Select-box");

	// ================== Filters Part ==================
	// Arrows
	filter.filterArrows(".Home .Search-Filters .filter-title .fa-chevron-up");

	// Show Picturs
	filter.picsSwitcher(".Home .Search-Filters .Only .filter-title .button");

	// BKH Btns
	filter.bkhBTNS(".Home .Search-Filters .BKH button");

	// Read More
	filter.readMoreBtns(".Home .Search-Filters .Read-More", ".Home .Search-Filters .Read-More-btn");

	// Badget Range
	filter.badgetRange(
		".Services .Search .Down li.Budget #Budget span.Min-Budget",
		".Services .Search .Down li.Budget #Budget span.Max-Budget"
	);

	// Bathroom Counter
	filter.bathroomCount(
		".Home .Search-Filters .BathRoom .up",
		".Home .Search-Filters .BathRoom .down",
		".Home .Search-Filters .BathRoom .Count"
	);

	// ===================== Swiper =====================
	// Home
	autoSwiper("section.Home .Home-Swiper-Slides");

	// Services
	normalSwiper(".Services .Catagory2");

	// Handpicked
	normalSwiper(".Handpicked .Catagory");

	// Cities
	normalSwiper(".Cities .Catagory");

	// Reviews
	normalSwiper(".Reviews .Catagory");
} catch (err) {
	console.error(err);
}
