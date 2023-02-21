// React
import React, { useState } from "react";
import "./posts.scss";

// Components
import Post from "./post/post";

// Material Ui
import { Alert, Grid, Snackbar } from "@mui/material";
import { useSelector } from "react-redux";

const Posts = () => {
	const posts = useSelector((state) => state.posts.data);

	// SnackBar
	const [open, setOpen] = useState(true);
	const handleClose = () => setOpen(false);

	return (
		<Grid container alignItems="stretch" spacing={3}>
			{posts ? (
				<>
					{posts.map((post, index) => (
						<Grid item xs={12} sm={6} lg={4} key={index}>
							<Post post={post} />
						</Grid>
					))}
					<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
						<Alert
							onClose={handleClose}
							severity="success"
							sx={{ bgcolor: "#388e3c", color: "white", ".MuiSvgIcon-root": { color: "white" } }}>
							Success Connect, The Data Is Defined In MongoDB !
						</Alert>
					</Snackbar>
				</>
			) : (
				<Snackbar open={open}>
					<Alert
						severity="error"
						onClose={handleClose}
						sx={{ bgcolor: "#d32f2f", color: "white", ".MuiSvgIcon-root": { color: "white" } }}>
						Network Error, The Data Is Not Defined !
					</Alert>
				</Snackbar>
			)}
		</Grid>
	);
};

export default Posts;
