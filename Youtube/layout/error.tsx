import { Box, Typography } from "@mui/material";
import { Navbar } from "@/layout";

type ErrorProps = {
	error?: string;
};

export const Error = ({ error }: ErrorProps) => {
	return (
		<Box>
			<Navbar noSidebar />
			<hr />
			<Box sx={{ p: 4 }}>
				<Typography variant="h2" color="white" fontSize={45} mb={4}>
					Somthing Has An Error 😔
				</Typography>
				<Typography variant="h3" color="red" fontSize={35}>
					{error || "Netwerk Error"}
				</Typography>
			</Box>
		</Box>
	);
};
