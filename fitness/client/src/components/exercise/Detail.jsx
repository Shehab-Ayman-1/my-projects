import { Typography, Stack, Button } from "@mui/material";
import { BodyPartIcon, TargetIcon, EquipmentIcon } from "@/assets";

export const Detail = ({ exerciseDetail: { bodyPart, gifUrl, name, target, equipment } }) => {
	const extraDetail = [
		{ icon: BodyPartIcon, name: bodyPart },
		{ icon: TargetIcon, name: target },
		{ icon: EquipmentIcon, name: equipment },
	];

	return (
		<Stack gap="60px" alignItems="center" p="20px" sx={{ flexDirection: { md: "row" } }}>
			<img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
			<Stack alignItems="center" justifyContent="center" sx={{ gap: { xs: "20px", sm: "28px", md: "32px", lg: "35px" }, textAlign: "center" }}>
				<Typography sx={{ fontSize: { lg: "64px", xs: "30px" } }} fontWeight={700} textTransform="capitalize">
					{name}
				</Typography>
				<Typography sx={{ color: "gray", fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" } }} color="#4F4C4C">
					Exercises keep you strong. <span style={{ textTransform: "capitalize" }}>{name}</span> bup is one of the best <br /> exercises to target your {target}. It will help you improve your{" "}
					<br /> mood and gain energy.
				</Typography>
				{extraDetail?.map((item, i) => (
					<Stack key={i} direction="row" gap="24px" alignItems="center" sx={{ minWidth: "240px" }}>
						<Button sx={{ background: "#FFF2DB", borderRadius: "50%", width: "100px", height: "100px" }}>
							<img src={item.icon} alt={bodyPart} style={{ width: "50px", height: "50px" }} />
						</Button>
						<Typography textTransform="capitalize" sx={{ fontSize: { lg: "30px", xs: "20px" } }}>
							{item.name}
						</Typography>
					</Stack>
				))}
			</Stack>
		</Stack>
	);
};
