import React from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";

const InputField = ({ type, name = "password", label = "password", change, focus, isPass, setIsPass }) => {
	const InputProps = {
		endAdornment: (
			<InputAdornment position="end">
				<IconButton className="adornment-icon" onClick={() => setIsPass(!isPass)}>
					{isPass ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
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
			InputProps={label === "password" ? InputProps : null}
		/>
	);
};

export default InputField;
