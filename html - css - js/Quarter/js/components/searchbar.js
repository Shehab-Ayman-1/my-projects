export function mobileSearch() {
	let Open = document.querySelector(".Home .Small-Search");
	let Close = document.querySelector(".Home .Search-Filters .fa-chevron-left");

	let ButtonsForm = document.querySelectorAll(".Home .Search-Filters .Form-Buttons button");
	let FilterForm = document.querySelector(".Home .Search-Filters");
	let Clear = document.querySelector(".Home .Search-Filters .Form-Buttons .Clear-All");

	Open.onclick = () => FilterForm.classList.add("Active");
	Close.onclick = () => FilterForm.classList.remove("Active");
	Clear.onclick = () => ButtonsForm.forEach((el) => el.classList.remove("Active"));
	ButtonsForm.forEach((item) => {
		ButtonsForm.forEach((el) => el.classList.remove("Active"));
		item.onclick = (e) => e.target.classList.toggle("Active");
	});

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
					minimumResultsForSearch: Infinity,
				});
			});
	});

	let Focus = setInterval(() => {
		if (
			document.querySelector(".Localities-Modal").classList.contains("show") &&
			document.querySelector(".Localities-Modal .select2-search__field")
		) {
			document.querySelector(".Localities-Modal .select2-search__field").focus();
			clearInterval(Focus);
		}
	}, 100);

	// Print The Selected Option In The Filter Localities Field
	let SubmitBtn = document.querySelector(".Localities-Modal .Submit-btn");
	SubmitBtn.onclick = () => {
		let SelectedOptions = document.querySelectorAll(".Localities-Modal .body .select2-container li span");
		let Field = document.querySelector(".Home .Search-Filters .Localities-City button");
		console.log(SelectedOptions);
		Field.textContent = "";
		SelectedOptions.forEach((item) => {
			Field.innerHTML += `<span>${item.nextSibling.textContent} <span>|</span> </span>`;
		});
		if (Field.textContent === "") Field.textContent = "Localities";
	};

	// Print The Suggestion Option In The Search Bar
	const Suggestions = document.querySelectorAll(".Localities-Modal .footer button");
	Suggestions.forEach((item) => {
		item.onclick = (e) => {
			const newOption = new Option(e.target.id, e.target.value, false, true);
			$(".Localities-Modal .body select").append(newOption).trigger("change");
		};
	});
}

export function desktopSearch() {
	// ===================== Desktop-Search =============
	const Tabs_Btns = document.querySelectorAll(".Services .Search .Down a");
	const Tabs = document.querySelectorAll(".Services .Search .Show-Drob-Down .box");
	const Remove = ["Services", "col-6", "title", "Label"];
	const Offset = document.querySelector(".Services").offsetTop - 130;
	Tabs_Btns.forEach((item) => {
		item.onclick = (e) => {
			let DataTab = document.querySelector(e.target.dataset.tab); // Get The Element That Has DataSet = tab
			Tabs_Btns.forEach((item) => item.classList.remove("Show")); // Remove Show Class From All Dropdown Headers
			Tabs.forEach((Remove) => Remove.classList.remove("Show")); // Remove Show Class From All Dropdown Boxes
			if (DataTab) {
				item.classList.add("Show"); // Add Show Class On The Dropdown Header
				DataTab.classList.add("Show"); // Add SHow Class On The Dropdown Box
				window.scrollTo({ top: Offset, behavior: "smooth" }); // Scroll To The Top When Click On Any Dropdown Header
			}
		};
	});

	document.onclick = (Click) => {
		if (
			Click.target.classList.contains("select2-selection--multiple") ||
			Click.target.classList.contains("select2-selection__rendered")
		) {
			window.scrollTo({ top: Offset, behavior: "smooth" });
		}
		Remove.forEach((item) => {
			if (Click.target.classList.contains(item)) {
				Tabs_Btns.forEach((item) => item.classList.remove("Show"));
				Tabs.forEach((Remove) => Remove.classList.remove("Show"));
			}
		});
	};

	// The Setting Of Buy & Rent Buttons
	const Down_Menu = document.querySelectorAll(".Services .Search .Down li");
	const Top_Buttons = document.querySelectorAll(".Services .Search .TopIn a");
	Top_Buttons.forEach((button) => {
		button.onclick = (e) => {
			Down_Menu.forEach((nav) => {
				if (e.target.classList.contains("Buy")) {
					if (nav.classList.contains("Buy")) nav.style.display = "initial";
					if (nav.classList.contains("Rent")) nav.style.display = "none";
				}
				if (e.target.classList.contains("Rent")) {
					if (nav.classList.contains("Rent")) nav.style.display = "initial";
					if (nav.classList.contains("Buy")) nav.style.display = "none";
				}
			});
		};
	});

	// Count How Many Selection Type Number
	const TypesSpan = document.querySelector(".Services .Search .Down .box a[data-tab='.One'] span");
	const TypesMenu = document.querySelectorAll(".Services .Search .Show-Drob-Down .One input");
	TypesMenu.forEach((item) => {
		item.onclick = (e) => {
			if (e.target.checked) TypesSpan.textContent++;
			else TypesSpan.textContent--;
		};
	});

	// Put The Value Of The BKH On The Header
	const BKH_Btn = document.querySelector(".Services .Search .Down .BKH a");
	const BKH_Menu = document.querySelectorAll(".Services .Search .Show-Drob-Down .BKH input");
	BKH_Menu.forEach((input) => {
		input.onclick = (e) => {
			if (e.target.checked == true) {
				BKH_Btn.textContent += ` ${e.target.value}`;
			} else {
				let Text = BKH_Btn.textContent.split("");
				let res = Text.filter((num) => num != e.target.value).join("");
				BKH_Btn.textContent = res;
			}
		};
	});
}

export function searchBar(path, plc = "") {
	function formatState(state) {
		if (!state.id) return state.text;

		var $state = $(`<span class="Parent-Line"> <span>${state.text}</span> <span>City</span> </span>`);
		return $state;
	}

	$(path).select2({
		tags: true,
		templateResult: formatState,
		minimumInputLength: 1,
		placeholder: plc,
	});
}

export function normalSelect2(path, plc, length = Infinity) {
	$(path).select2({
		tags: true,
		placeholder: plc,
		maximumSelectionLength: length,
	});
}
