import intro from "../components/intro.js";
import { autoSwiper, normalSwiper } from "../components/swiper.js";

// ============ Header & Reload & Hearts ============
intro();

// ===================== Swiper =====================
autoSwiper(".Menage-Properties .tab-pane .swiper");

autoSwiper("body.Short-listed .Listed .tab-pane .left");

normalSwiper("body.Short-listed .Listed .tab-pane .right .Distance");
