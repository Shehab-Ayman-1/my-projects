const localhosts = ["http://localhost:3000", "http://localhost:5173", "http://localhost:5174"];
const netlify = ["https://booking-com-client.netlify.app", "https://booking-com-admin.netlify.app"];
const vercel = ["https://booking-com-client.vercel.app", "https://booking-com-admin.vercel.app"];
const whiteList = [...localhosts, ...netlify, ...vercel];

export const corsOrigins = {
	origin: (origin, callback) => {
		const isAcceptable = whiteList.some((site) => site === origin);

		if (isAcceptable || origin === undefined) callback(null, origin); // origin = undefined -> on localhost
		else callback(`${origin}: Not Allowed By CORS`);
	},
	credentials: true,
	optionsSuccessStatus: 200,
};
