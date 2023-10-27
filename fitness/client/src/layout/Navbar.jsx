import { NavLink } from "react-router-dom";
import { Stack, Avatar } from "@mui/material";
import { Logo } from "@/assets";

export const Navbar = () => {
	return (
		<Stack direction="row" justifyContent="space-between" sx={{ gap: { xs: "10px", sm: "30px", md: "123px" }, mt: { sm: "32px", xs: "20px" } }} px="20px">
			<NavLink to="/">
				<Avatar src={Logo} alt="logo" variant="square" sx={{ width: { xs: "32px", md: "48px" }, height: { xs: "32px", md: "48px" }, margin: "0px 20px" }} />
			</NavLink>
			<Stack direction="row" gap="40px" fontFamily="Alegreya" fontSize="24px" alignItems="flex-end">
				<NavLink className="navlink" to="/" style={{ borderBottom: "3px solid #FF2625" }}>
					Home
				</NavLink>
				<NavLink className="navlink" to="/#exercises">
					Exercises
				</NavLink>
			</Stack>
		</Stack>
	);
};
