import { Box, Stack, Typography } from "@mui/material";
import { Banner } from "@/assets";

export const HeroBanner = () => {
	let exerciesStyle = { background: "#FF2625", color: "white", width: "200px", padding: "14px", marginTop: "45px", fontSize: "22px", textAlign: "center" };

	return (
		<Stack direction="row" justifyContent="space-between" alignItems="center" p={5} gap="40px">
			<Box width="100%">
				<Typography color="#FF2625" fontWeight="600" fontSize="26px">
					Fitness Club
				</Typography>
				<Typography fontWeight={700} sx={{ fontSize: { lg: "44px", xs: "40px" } }} mb="23px" mt="30px">
					Sweat, Smile <br />
					And Repeat
				</Typography>
				<Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
					Check out the most effective exercises personalized to you
				</Typography>
				<Stack>
					<a href="#exercises" style={{ ...exerciesStyle, textTransform: "none", textDecoration: "none", borderRadius: "4px" }}>
						Explore Exercises
					</a>
				</Stack>
				<p className="word-overlay">Exercise</p>
			</Box>
			<Box sx={{ display: { xs: "none", md: "block" }, width: "100%", minWidth: "500px" }}>
				<img src={Banner} alt="hero-banner" className="hero-banner-img" />
			</Box>
		</Stack>
	);
};
