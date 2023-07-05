let select1 = { width: "100%", fontSize: 18, fontWeight: "bold" };
let select2 = { borderRight: "1px solid black", display: "block", cursor: "pointer" };
let option1 = { fontSize: 18 };

export const SelectBox = ({ name, title, options, props }) => {
	return (
		<select name={name} id={name} {...props} style={{ ...select1, ...select2 }}>
			<option value="">
				<i className="fa fa-times" /> {title}
			</option>
			{options.map((option) => (
				<option value={option} style={option1}>
					{option}
				</option>
			))}
		</select>
	);
};
