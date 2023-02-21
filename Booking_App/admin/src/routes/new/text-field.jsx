import React from "react";
const InputField = ({ type, name, label, value, change, focus, min, max }) => {
	return (
		<input
			className="field"
			type={type}
			name={name}
			value={value}
			placeholder={`${label}.....`}
			onChange={change}
			autoFocus={focus ? true : false}
			min={min}
			max={max}
			required
		/>
	);
};

export default InputField;
