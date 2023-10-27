import { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography } from "@mui/material";
import { ExerciseCard, BodyPart } from "@/components";
import { RightArrowIcon, LeftArrowIcon } from "@/assets";
import "react-horizontal-scrolling-menu/dist/styles.css";

const LeftArrow = () => {
	const { scrollPrev } = useContext(VisibilityContext);

	return (
		<Typography variant="button" className="left-arrow" onClick={() => scrollPrev()}>
			<img src={LeftArrowIcon} alt="right-arrow" />
		</Typography>
	);
};

const RightArrow = () => {
	const { scrollNext } = useContext(VisibilityContext);

	return (
		<Typography variant="button" className="right-arrow" onClick={() => scrollNext()}>
			<img src={RightArrowIcon} alt="left-arrow" />
		</Typography>
	);
};

export const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
	return (
		<ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
			{data.map((item) =>
				bodyParts ? (
					<Box key={item._id || item} itemID={item._id || item} title={item?.name} sx={{ gap: "47px" }}>
						<BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
					</Box>
				) : (
					<Box key={item._id || item} itemID={item._id || item} title={item?.name} sx={{ m: { xs: "16px 20px 16px 0", md: "16px 40px 16px 0" }, boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
						<ExerciseCard exercise={item} />
					</Box>
				)
			)}
		</ScrollMenu>
	);
};
