import React from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";

const InputField = ({ type, name = "password", label = "password", change, focus, isPass, setIsPass }) => {
	const InputProps = {
		endAdornment: (
			<InputAdornment position="end">
				<IconButton className="adornment-icon" onClick={() => setIsPass(!isPass)}>
					{isPass ? <VisibilityOffOutlined sx={{ fontSize: "22px" }} /> : <VisibilityOutlined sx={{ fontSize: "22px" }} />}
				</IconButton>
			</InputAdornment>
		),
	};

	return (
		<TextField
			className="field"
			variant="standard"
			type={type}
			name={name}
			label={label}
			onChange={change}
			autoFocus={focus ? true : false}
			fullWidth
			required
			sx={{ ".MuiInputLabel-root": { fontSize: "14px" } }}
			InputProps={label === "password" ? InputProps : null}
		/>
	);
};

export default InputField;
