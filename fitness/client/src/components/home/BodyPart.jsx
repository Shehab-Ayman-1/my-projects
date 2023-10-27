import { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import { BodyPartIcon, EquipmentIcon, GymIcon, TargetIcon } from "@/assets";

export const BodyPart = ({ item, setBodyPart, bodyPart }) => {
	const bodyPartStyle = {
		background: "#fff",
		width: { xs: "200px", sm: "270px" },
		height: { xs: "182px", md: "282px" },
		borderRadius: "20px",
		cursor: "pointer",
		gap: "47px",
		m: 2,
		boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
	};
	const [img, setImg] = useState("");

	useEffect(() => {
		switch (item) {
			case "all":
				return setImg(GymIcon);
			case "back":
				return setImg(BodyPartIcon);
			case "cardio":
				return setImg(BodyPartIcon);
			case "chest":
				return setImg(EquipmentIcon);
			case "lower arms":
				return setImg(EquipmentIcon);
			case "lower legs":
				return setImg(TargetIcon);
			case "shoulders":
				return setImg(EquipmentIcon);
			case "upper arms":
				return setImg(EquipmentIcon);
			case "upper legs":
				return setImg(TargetIcon);
			case "waist":
				return setImg(TargetIcon);
			default:
				return setImg(GymIcon);
		}
	}, []);

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
			<img src={img} alt="dumbbell" style={{ width: "40px", height: "40px" }} />
			<Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize">
				{item}
			</Typography>
		</Stack>
	);
};
