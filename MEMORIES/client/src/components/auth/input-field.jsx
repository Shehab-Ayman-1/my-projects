// React
import React from "react";

// Material Ui
import { Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const InputField = ({ type, name, label, focus, visPass, change, showPasswordIcon, showPass }) => {
	const inputProps = {
		endAdornment: (
			<InputAdornment position="end">
				<IconButton onClick={showPass}>{!showPasswordIcon ? <Visibility /> : <VisibilityOff />}</IconButton>
			</InputAdornment>
		),
	};

	return (
		<TextField
			type={type}
			name={name}
			label={label}
			variant="outlined"
			autoFocus={focus ? true : false}
			fullWidth
			required
			onChange={change}
			InputProps={visPass && inputProps}
		/>
	);
};

export default InputField;
