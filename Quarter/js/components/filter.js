export function filterArrows(arrowsPath) {
	let AllArrows = document.querySelectorAll(arrowsPath);
	AllArrows.forEach((item) => {
		item.parentElement.onclick = () => {
			const Catagory = item.parentElement.parentElement.querySelector(".Catagory");
			if (Catagory) Catagory.classList.toggle("ShowSibling");

			item.classList.toggle("Rotate");
			if (item.classList.contains("Rotate")) item.style.transform = "rotate(180deg)";
			else item.style.transform = "rotate(0deg)";
		};
	});
}

export function picsSwitcher(path) {
	let Pics = document.querySelector(path);
	Pics.onclick = (e) => e.target.classList.toggle("Move");
}

export function bkhBTNS(path) {
	let BtnBKH = document.querySelectorAll(path);
	BtnBKH.forEach((item) => (item.onclick = (e) => e.target.classList.toggle("Active")));
}

export function bathroomCount(increamentPath, decreamentPath, counterPath) {
	let Increament = document.querySelector(increamentPath);
	let Decreament = document.querySelector(decreamentPath);
	let Count = document.querySelector(counterPath);
	Decreament.onclick = () => (Count.innerHTML > 0 ? Count.innerHTML-- : "");
	Increament.onclick = () => Count.innerHTML++;
}

export function readMoreBtns(readMore, readMoreBtn) {
	let Read_More = document.querySelector(readMore);
	let Read_More_btn = document.querySelector(readMoreBtn);
	Read_More_btn.onclick = () => {
		Read_More.classList.toggle("Active");
		if (Read_More_btn.innerHTML === "Read More") Read_More_btn.innerHTML = "Read Less";
		else Read_More_btn.innerHTML = "Read More";
	};
}

export function badgetRange(min, max) {
	let Range_Box = document.querySelectorAll(".Range-Box");
	let Budget_Cost1 = document.querySelector(min, max);
	let Budget_Cost2 = document.querySelector(min, max);
	setInterval(() => {
		Range_Box.forEach((item) => {
			let sliderOne = item.querySelector("#slider-1");
			let sliderTwo = item.querySelector("#slider-2");
			let displayValOne = item.querySelector("#Range-input-1");
			let displayValTwo = item.querySelector("#Range-input-2");
			let sliderTrack = item.querySelector(".slider-track");
			let sliderMaxValue = item.querySelector("#slider-1").max;
			let minGap = 0;

			function slideOne() {
				if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap)
					sliderOne.value = parseInt(sliderTwo.value) - minGap;

				if (min && max) Budget_Cost1.textContent = 15000 + parseInt(sliderOne.value);

				displayValOne.textContent = 15000 + parseInt(sliderOne.value);
				fillColor();
			}

			function slideTwo() {
				if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap)
					sliderTwo.value = parseInt(sliderOne.value) + minGap;

				if (min && max) Budget_Cost2.textContent = 15000 + parseInt(sliderTwo.value);

				displayValTwo.textContent = 15000 + parseInt(sliderTwo.value);
				fillColor();
			}

			function fillColor() {
				let percent1 = (sliderOne.value / sliderMaxValue) * 100;
				let percent2 = (sliderTwo.value / sliderMaxValue) * 100;
				sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #8b3d88 ${percent1}% , #8b3d88 ${percent2}%, #dadae5 ${percent2}%)`;
			}

			sliderOne.setAttribute(oninput, slideOne());
			sliderTwo.setAttribute(oninput, slideTwo());
		});
	}, 10);
}
