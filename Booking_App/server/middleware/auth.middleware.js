import JWT from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
	try {
		// [1] Get The Token From The Cookeis
		const token = req.cookies.access_token;

		// [2] Check If The Token Is Defined In The Cookies => If Not That Mean The Client Is Not Authonticated
		if (!token) return res.status(404).json({ VERIFY_TOKEN: "You Are Not Authonticated.!" });

		// [3] Convert The Token To The Date Again [decode], And Save It In The Req,
		JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
			if (err) return res.status(404).json({ VERIFY_TOKEN: "JWT => Some Thing Is Wrong.!!!" });
			// decode => Is The Data Is Send From JWT.Sign() In The Login [ id, isAdmin ]
			req.user = decode;

			// [4] Next => Is The Next Condetion => VerifyClient, Verify Admin
			next();
		});
	} catch (error) {
		res.status(404).json({ VERIFY_TOKEN: error });
	}
};

export const verifyClient = async (req, res, next) => {
	// Check If The User ID === The Request ID, If True => So He Is A Normal Client
	const isClient = () => {
		if (req.user.id === req.params.id || req.user.isAdmin) {
			next();
		} else {
			res.status(404).json({ VERIFY_CLIENT: "You Are Not Authonticated.!" });
		}
	};
	verifyToken(req, res, isClient);
};

export const verifyAdmin = async (req, res, next) => {
	// Check If The User isAdmin Is True OR Not, If True => He Is Admin
	const isAdmin = () => {
		if (req.user.isAdmin) {
			next();
		} else {
			res.status(404).json({ VERIFY_ADMIN: "You Are Not Admin.!" });
		}
	};
	verifyToken(req, res, isAdmin);
};
