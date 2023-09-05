import { Stack, Typography } from "@mui/material";
import { GymIcon } from "@/assets";

export const BodyPart = ({ item, setBodyPart, bodyPart }) => {
	const bodyPartStyle = { background: "#fff", borderBottomLeftRadius: "20px", width: "270px", height: "282px", cursor: "pointer", gap: "47px" };

	const handleClick = () => {
		setBodyPart(item);
		window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
	};

	return (
		<Stack
			type="button"
			alignItems="center"
			justifyContent="center"
			className="bodyPart-card"
			sx={bodyPart === item ? { ...bodyPartStyle, borderTop: "4px solid #FF2625" } : bodyPartStyle}
			onClick={handleClick}>
			<img src={GymIcon} alt="dumbbell" style={{ width: "40px", height: "40px" }} />
			<Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize">
				{item}
			</Typography>
		</Stack>
	);
};
