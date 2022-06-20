import intro from "../components/intro.js";
import bsForm from "../components/bsForm.js";
import getImage from "../components/getImage.js";
import { bathroomCount } from "../components/filter.js";
import { normalSelect2 } from "../components/Searchbar.js";

try {
	// =============== Header & Reload & Hearts ================
	intro();

	// ===================== BootStrap Form ====================
	bsForm();

	// ====================== Post-Form-1 ======================
	if (document.querySelector(".Step-1")) {
		// The Desktop Select Box With Search Bar
		if (window.screen.width > 600) {
			normalSelect2(".Step-1 .right .City #Select-box", "Localities");
		}

		// The Mobile Select Box With Search Bar
		if (window.screen.width < 600) {
			$("body").on("shown.bs.modal", ".modal", function () {
				$(this)
					.find("select")
					.each(function () {
						var dropdownParent = $(document.body);
						if ($(this).parents(".modal.in:first").length !== 0)
							dropdownParent = $(this).parents(".modal.in:first");
						$(this).select2({
							tags: true,
							minimumInputLength: 1,
							placeholder: "Enter City",
							dropdownParent: dropdownParent,
						});
					});
			});
		}

		let Focus = setInterval(() => {
			if (document.querySelector(".select2-search__field")) {
				document.querySelector(".select2-search__field").focus();
				clearInterval(Focus);
			}
		}, 10);

		const Suggestions = document.querySelectorAll(".Localities-Modal .footer button");
		Suggestions.forEach((item) => {
			item.onclick = (e) => {
				const newOption = new Option(e.target.id, e.target.value, false, true);
				$(".Localities-Modal .body select").append(newOption).trigger("change");
			};
		});
	}

	// ====================== Post-Form-2 ======================
	if (document.querySelector("#Step-2")) {
		const Serial = document.querySelector(".Step-2 .right .Serial");
		const Number_Field = document.querySelector(".Step-2 .right .Serial input[type='text']");
		window.onload = () => Number_Field.focus();
		Serial.onkeyup = function (e) {
			var target = e.srcElement || e.target;
			var maxLength = parseInt(target.attributes["maxlength"].value, 10);
			var myLength = target.value.length;
			if (myLength >= maxLength) {
				var next = target;
				while ((next = next.nextElementSibling)) {
					if (next == null) break;
					if (next.tagName.toLowerCase() === "input") {
						next.focus();
						break;
					}
				}
			} else if (myLength === 0) {
				var previous = target;
				while ((previous = previous.previousElementSibling)) {
					if (previous == null) break;
					if (previous.tagName.toLowerCase() === "input") {
						previous.focus();
						break;
					}
				}
			}
		};
	}

	// ====================== Post-Form-3 ======================
	if (document.querySelector("#Step-3")) {
		normalSelect2("#Step-3 .right .Apartment-Input #ApartMent-Select", "Apartments");

		// The Desktop Select Box With Search Bar
		normalSelect2("#Step-3 .right .Locality #Select-box", "Localities");

		// The Mobile Select Box With Search Bar
		$("body").on("shown.bs.modal", ".modal", function () {
			$(this)
				.find("select")
				.each(function () {
					var dropdownParent = $(document.body);
					if ($(this).parents(".modal.in:first").length !== 0) dropdownParent = $(this).parents(".modal.in:first");
					$(this).select2({
						tags: true,
						minimumInputLength: 1,
						placeholder: "Enter City",
						dropdownParent: dropdownParent,
					});
				});
		});

		let Focus = setInterval(() => {
			if (document.querySelector(".select2-search__field")) {
				document.querySelector(".select2-search__field").focus();
				clearInterval(Focus);
			}
		}, 10);

		const Suggestions = document.querySelectorAll(".Localities-Modal .footer button");
		Suggestions.forEach((item) => {
			item.onclick = (e) => {
				const newOption = new Option(e.target.id, e.target.value, false, true);
				$(".Localities-Modal .body select").append(newOption).trigger("change");
			};
		});
	}

	// ====================== Post-Form-4 ======================
	if (document.querySelector("#Step-4")) {
		normalSelect2("#Step-4 .Expected #Year-Select", "Years");
	}

	// ====================== Post-Form-5 ======================
	if (document.querySelector("#Step-5")) {
		document.querySelectorAll("#Step-5 .Parent select").forEach((item) => {
			normalSelect2(`#Step-5 .Parent #${item.id}`, "Marble", 1);
		});
	}

	// ====================== Post-Form-6 ======================
	if (document.querySelector("#Step-6")) {
		normalSelect2("#Step-6 .Parent .House #House-Box", "House-Box", 1);
	}

	// ====================== Post-Form-7 ======================
	if (document.querySelector("#Step-7")) {
		// First Counter
		bathroomCount(".Step-7 .Parking-Count1 .up", ".Step-7 .Parking-Count1 .down", ".Step-7 .Parking-Count1 .Count");

		// Second Counter
		bathroomCount(".Step-7 .Parking-Count2 .up", ".Step-7 .Parking-Count2 .down", ".Step-7 .Parking-Count2 .Count");

		// Import The Input Image
		window.onload = () => getImage();
	}
} catch (err) {
	console.error(err);
}
