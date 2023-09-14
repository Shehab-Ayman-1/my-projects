import { Box, LinearProgress } from "@mui/material";
import { Navbar } from "@/layout";

type LoadingProps = {
	noNavbar?: boolean;
};

export const Loading = ({ noNavbar }: LoadingProps) => {
	return (
		<Box>
			{!noNavbar && <Navbar noSidebar />}
			<LinearProgress color="error" />
		</Box>
	);
};
