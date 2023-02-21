// React
import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import logo from "../../images/logo.png";
import "./style.scss";

// Material Ui
import { Button, Paper, TextField, Typography } from "@mui/material";

// Redux
import { useDispatch } from "react-redux";
import { CREATE_POST, UPDATE_POST, GET_POSTS } from "../../redux/reducers/posts-slice";

const Form = ({ title, setOpenModel, updatePost, updateState }) => {
	const dispatch = useDispatch();
	const [postsData, setPostsData] = useState({ title: "", creator: "", tags: "", message: "", selectedFile: logo });

	useEffect(() => {
		if (updateState) {
			setPostsData({ ...updatePost });
		} else {
			setPostsData({ title: "", creator: "", tags: "", message: "", selectedFile: logo });
		}
	}, []);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (updateState) {
			dispatch(UPDATE_POST({ currentID: updatePost._id, postsData }));
			setOpenModel(false);
		} else {
			dispatch(CREATE_POST(postsData));
			const interval = setInterval(() => {
				dispatch(GET_POSTS());
				clearInterval(interval);
			}, 700);
		}
		clearFields();
	};

	const handleField = (event) => {
		setPostsData({ ...postsData, [event.target.name]: event.target.value });
	};

	const clearFields = () => {
		setPostsData({ title: "", creator: "", tags: "", message: "", selectedFile: logo });
	};

	return (
		<Paper className="form-section">
			<form autoComplete="off" noValidate onSubmit={handleSubmit}>
				<Typography className="form-header" variant="h6">
					{title}
				</Typography>

				<div className="form-body">
					<TextField name="creator" label="Creator" fullWidth value={postsData.creator} onChange={handleField} />

					<TextField name="title" label="title" fullWidth value={postsData.title} onChange={handleField} />

					<TextField name="tags" label="tags" fullWidth value={postsData.tags} onChange={handleField} />

					<TextField name="message" label="message" fullWidth value={postsData.message} onChange={handleField} />

					<div className="file-input">
						<img className="file-input-img" src={postsData.selectedFile} alt="file-input" />
						<FileBase type="file" onDone={({ base64 }) => setPostsData({ ...postsData, selectedFile: base64 })} />
					</div>
				</div>

				<div className="form-footer">
					{title === "Create New Memory" ? (
						<>
							<Button type="submit" variant="contained" color="primary" size="large" fullWidth>
								Create New Memory
							</Button>
							<Button type="button" variant="contained" color="error" size="large" fullWidth onClick={clearFields}>
								Clear
							</Button>
						</>
					) : (
						<Button type="submit" variant="contained" color="success" size="large" fullWidth>
							Update Post
						</Button>
					)}
				</div>
			</form>
		</Paper>
	);
};

export default Form;
