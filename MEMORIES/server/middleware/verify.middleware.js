/* -- The Middle Ware Is Using To Verify The Token --
    If The Token Is Exist In The Cookie => Access The Router Controller
    And To Handle The Cookies, We Need To Use The JWT & next()
*/

import JWT from "jsonwebtoken";

export const verifyPost = (req, res, next) => {
	try {
		// Hint: We Get The Headers.Authorization From The Frontsend Utils
		const token = req.headers.authorization.split(" ")[1];
		const isGoogleAuth = token?.length < 500;
		let decodedData;

		if (token && isGoogleAuth) {
			decodedData = JWT.verify(token, process.env.JWT_SECRET);
			req.userID = decodedData?.id;
			console.log("TRUE => ", decodedData);
		} else {
			decodedData = JWT.decode(token);
			req.userID = decodedData?.sub;
			console.log("FALSE => ", decodedData);
		}
		next();
	} catch (error) {
		console.log(error);
		res.status(404).json({ VERIFY_AUTH: error });
	}
};

export const verifyToken = (req, res, otherVerify) => {
	try {
		console.log("token => ", req.cookies);
		const token = req.cookies?.access_token;

		if (!token) return res.status(404).json({ VERIFY_TOKEN: "You Are Not Authenticated." });

		JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {
			if (err) return res.status(401).json({ VERIFY_TOKEN: "Invalid Token!" });
			req.user = decoded;
			otherVerify();
		});
	} catch (err) {
		res.status(401).json({ VERIFY_TOKEN: err });
	}
};

export const verifyUser = (req, res, next) => {
	verifyToken(req, res, () => {
		// Just Login If The UserID === The Database Id, Or This User Is Admin
		console.log("req.user => ", req.user);
		if (req.user.id === req.params.id || req.user.isAdmin) {
			next();
		} else {
			res.status(403).json({ VERIFY_USER: "You are not authorized to perform this action." });
		}
	});
};

export const verifyAdmin = (req, res, next) => {
	verifyToken(req, res, () => {
		// Just Login If This User Is The Admin
		if (req.user.isAdmin) {
			next();
		} else {
			res.status(403).json({ VERIFY_ADMIN: "You are not Admin to perform this action." });
		}
	});
};
