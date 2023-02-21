import { Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";

const Error = ({ section, severity, bgcolor }) => {
	const [open, setOpen] = useState(true);
	const handleClose = () => setOpen(false);

	const style = { bgcolor: bgcolor, color: "white", width: "100%", svg: { color: "white" } };
	return (
		<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
			<Alert sx={style} severity={severity} onClose={handleClose}>
				{severity === "error" ? `Error, The ${section} Section Has An Error. !` : `Warning, No ${section} Was Found. !`}
			</Alert>
		</Snackbar>
	);
};

export default Error;
