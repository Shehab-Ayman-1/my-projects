// ============== NaveBar Button ==============
let barsBtn = document.querySelector("header .fa-bars");
let barsForm = document.querySelector("header nav");
barsBtn.addEventListener("click", () => {
	barsForm.classList.toggle("Active");
	SearchForm.classList.remove("Active");
});

// ============== Search Button ==============
let SearchBtn = document.querySelector("header .fa-search");
let SearchForm = document.querySelector("header #SearchForm");
SearchBtn.addEventListener("click", () => {
	SearchForm.classList.toggle("Active");
	barsForm.classList.remove("Active");
});

// ============== UserLogin Button ==============
let ShoppingBtn = document.querySelector("header .fa-shopping-cart");
let ShoppingCart = document.querySelector("header .ShoppingCart");
ShoppingBtn.onclick = () => {
	ShoppingCart.classList.toggle("Active");
};

// ============== ShoppingCart Button ==============
let UserBtn = document.querySelector("header .fa-user");
let UserLogin = document.querySelector("header .UserLogin");
UserBtn.onclick = () => {
	UserLogin.classList.toggle("Active");
};

// ============== NightMode Button ==============
let NightModeBtn = document.querySelector("header .fa-moon");
let body = document.querySelector("body");
NightModeBtn.onclick = () => {
	body.classList.toggle("Active");
	if (body.className === "Active") {
		NightModeBtn.classList.replace("fa-sun", "fa-moon");
	} else {
		NightModeBtn.classList.replace("fa-moon", "fa-sun");
	}
};

// ============== Heart Button ==============
let Heart = document.querySelectorAll(".Popular .Catagory .box i.fa-heart");
Heart.forEach(event => {
	event.onclick = () => {
		event.classList.toggle("Active");
	};
});
// ============== Move Home Img ==============
let Home = document.querySelector(".Home");
let Home_Img = document.querySelector(".Home .Slides .right .img .Home_Img");
Home.onmousemove = e => {
	let x = (window.innerWidth - e.pageX) / 5;
	let y = (window.innerHeight - e.pageY) / 5;
	Home_Img.style.transform = `translate(${-x}px, ${-y}px) scale(1.7)`;
};
Home.onmouseleave = () => {
	Home_Img.style.transform = `translate(${0}px, ${0}px) scale(1.3)`;
};
