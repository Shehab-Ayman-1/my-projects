import jwt from "jsonwebtoken";

/**
 * This Function Check If The User Is Signin OR Not
 * - If User Signin => The Token Will Be Defined, And Go To The Next [Controllers]
 * - else => Send An Error Message Before Go To The Controllers Functions
 */
export const verifyToken = async (req, res, next) => {
	try {
		let token = req.cookies.user_token;
		if (!token) return res.status(404).json("You Are Not Authonticated.");

		jwt.verify(token, process.env.JWT_KEY, (err, info) => {
			if (err) return res.status(404).json("This Token Is Now Valid.");
			req.user = info;
			next();
		});
	} catch (error) {
		res.status(404).json(error);
	}
};

/**
 * Check User Logged In Is Varify OR Not
 * - If The User ID Is The Same ID That Want To Update, So Controller Can Work
 * - Else Send An Error Message
 */
export const verifyUser = async (req, res, next) => {
	try {
		let userNext = () => {
			if (req.user.id === req.params.id || req.user.isAdmin) next();
			else res.status(404).json("You Are Not Logged In.");
		};
		verifyToken(req, res, userNext);
	} catch (error) {
		res.status(404).json(error);
	}
};

// Check If The User Is Admin OR Not
export const verifyAdmin = async (req, res, next) => {
	try {
		let userNext = () => {
			if (req.user.isAdmin) next();
			else res.status(404).json("You Are Not Admin.");
		};
		verifyToken(req, res, userNext);
	} catch (error) {
		res.status(404).json(error);
	}
};
