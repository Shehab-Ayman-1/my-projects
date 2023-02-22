const Reducer = (State, Action) => {
	switch (Action.type) {
		case "ADDTOCART": {
			State.Cart.push(Action.Info);
		}

		case "DELETEFROMCART": {
			const Clone = { ...State };
			delete Clone.Cart[Action.index];
			return Clone;
		}

		case "PAYMENT": {
			const Clone = { ...State };
			Clone.Cart = [];
			return Clone;
		}

		default:
			return State;
	}
};

export default Reducer;
