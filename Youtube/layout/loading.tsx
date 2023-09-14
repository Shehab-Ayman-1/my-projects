import { Box, CircularProgress, LinearProgress } from "@mui/material";

export const Loading = () => {
	return (
		<Box>
			<LinearProgress color="success" />
			<CircularProgress color="success" size={250} sx={{ position: "absolute", top: "50%", left: "50%", translate: "-50% -50%" }} />
		</Box>
	);
};
