export default function getImage() {
	const Closes = document.querySelectorAll(".box #Close");
	let Labels = document.querySelectorAll(".box label img");
	let List = [];

	if (window.File && window.FileList && window.FileReader) {
		var filesInput = document.getElementById("files");
		filesInput.addEventListener("change", (event) => {
			var files = event.target.files;
			for (var i = 0; i < files.length; i++) {
				var file = files[i];

				if (!file.type.match("image")) continue;
				var picReader = new FileReader();
				picReader.addEventListener("load", (event) => {
					Closes.forEach((cl, i) => {
						// cl.style.display = "block";
						cl.onclick = () => {
							cl.nextElementSibling.querySelector("img").src = "../../Images/back-import-file-1.png";
							cl.style.display = "none";
							List.splice(i, 1);
						};
					});
					List.push(event.target.result);
					for (i = 0; i < 4; i++) {
						if (List[i] != undefined) {
							Closes[i].style.display = "block";
							Labels[i].src = List[i];
						}
					}
				});
				picReader.readAsDataURL(file);
			}
		});
	}
}
