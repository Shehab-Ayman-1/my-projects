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
			{data.map((item) => (
				<Box key={item._id || item} itemID={item._id || item} title={item?.name} m="0 40px">
					{bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} />}
				</Box>
			))}
		</ScrollMenu>
	);
};
