export default function bsForm() {
	"use strict";
	var forms = document.querySelectorAll(".needs-validation");
	Array.prototype.slice.call(forms).forEach(function (form) {
		form.addEventListener(
			"submit",
			function (event) {
				if (!form.checkValidity()) {
					event.preventDefault();
					event.stopPropagation();
				} else if (form.checkValidity()) {
					event.preventDefault();
					let Modal = document.querySelector(".modal.fade#ModalID");
					if (Modal) {
						Modal.setAttribute("data-Pass", "Green");
						let Currect = document.querySelector(".modal[data-pass]");
						Currect.querySelector(".modal-header h5").innerHTML = "Number Verified Successfully";
						Currect.querySelector(".modal-header img").src = "../../Images/pass-check.png";
						Currect.querySelector(".modal-body").innerHTML = "You are now successfully registered with us";
						Currect.querySelector(".modal-footer").remove();
						setInterval(() => (window.location.href = `../../HTML/Post-Form/${form.dataset.send}`), 1000);
					}
				}
				form.classList.add("was-validated");
			},
			false
		);
	});
}
