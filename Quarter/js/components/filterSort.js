export function filterSort() {
	let Filter_Menu = document.querySelector("aside.Search-Filters");
	let CLose_Filter_Menu = document.querySelector("aside.Search-Filters .return .fa-chevron-left");
	let Open_Filter_Menu = document.querySelector(".Filter-Sort-Buttons .Filter");
	let Sort_Menu = document.querySelector("#Sort-Menu");
	let Open_Sort = document.querySelector(".Filter-Sort-Buttons button#Sort");
	let Close_Sort = document.querySelector("#Sort-Menu .fa-times");

	Open_Filter_Menu.onclick = () => Filter_Menu.classList.add("Active");
	CLose_Filter_Menu.onclick = () => Filter_Menu.classList.remove("Active");
	Open_Sort.onclick = () => Sort_Menu.classList.add("Active");
	Close_Sort.onclick = () => Sort_Menu.classList.remove("Active");
	Sort_Menu.querySelectorAll(".fas.fa-check").forEach((icon) => {
		icon.parentElement.onclick = () => {
			Sort_Menu.querySelectorAll(".fas.fa-check").forEach((i) => i.classList.remove("Show"));
			icon.classList.add("Show");
		};
	});
}
