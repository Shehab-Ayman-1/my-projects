// Images
import madrid from "../../assets/images/madrid.webp";
import london from "../../assets/images/london.webp";
import berlin from "../../assets/images/berlin.webp";
import feature1 from "../../assets/images/feature 1.webp";
import feature2 from "../../assets/images/feature 2.webp";
import feature3 from "../../assets/images/feature 3.webp";
import feature4 from "../../assets/images/feature 4.webp";
import feature5 from "../../assets/images/feature 5.webp";
import furnitur1 from "../../assets/images/furnitur 1.webp";
import furnitur2 from "../../assets/images/furnitur 2.webp";
import furnitur3 from "../../assets/images/furnitur 3.webp";
import furnitur4 from "../../assets/images/furnitur 4.webp";
import hotel1 from "../../assets/images/hotel 1.webp";
import hotel2 from "../../assets/images/hotel 2.webp";
import hotel3 from "../../assets/images/hotel 3.webp";
import hotel4 from "../../assets/images/hotel 4.webp";

const start = new Date();
const end = new Date();
start.setDate(start.getDate() - 3);

const INITIAL_STATE = {
	destination: "",
	date: [{ startDate: start, endDate: end, key: "selected" }],
	options: { adult: 0, children: 0, room: 0 },
	selectOptions: ["madrid", "london", "berlin", "resort", "spanish"],
	min: 1,
	max: 999,
	photos: [
		madrid,
		london,
		berlin,
		feature1,
		feature2,
		feature3,
		feature4,
		feature5,
		furnitur1,
		furnitur2,
		furnitur3,
		furnitur4,
		hotel1,
		hotel2,
		hotel3,
		hotel4,
	],
};

export default INITIAL_STATE;
