let ADDTOCART = (Info) => {
	return {
		type: "ADDTOCART",
		Info,
	};
};

let DELETEFROMCART = (index) => {
	return {
		type: "DELETEFROMCART",
		index,
	};
};

let PayMent = () => {
	return {
		type: "PAYMENT",
	};
};

export { ADDTOCART, DELETEFROMCART, PayMent };
