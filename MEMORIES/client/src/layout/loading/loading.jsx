import React from "react";
import { Card, CardContent, CircularProgress, Skeleton, Stack } from "@mui/material";

const Loading = () => {
	return (
		<Stack className="loading" justifyContent="flex-start" alignItems="flex-start" direction="row" gap={2} flexWrap="wrap">
			<Card className="Card-Container" sx={{ width: 300, minHeight: 425 }}>
				<CardContent className="card-header" sx={{ p: 0 }}>
					<Skeleton variant="circle" animation="wave" width="100%" height={200}></Skeleton>
				</CardContent>

				<CardContent className="card-body">
					<Skeleton variant="text" animation="wave" width="100%" height={25}></Skeleton>
					<Skeleton variant="text" animation="wave" width="100%" height={25}></Skeleton>
					<Skeleton variant="text" animation="wave" width="100%" height={25}></Skeleton>
					<Skeleton variant="text" animation="wave" width="100%" height={25}></Skeleton>
					<Skeleton variant="text" animation="wave" width="100%" height={25}></Skeleton>
				</CardContent>

				<CardContent className="card-footer">
					<Skeleton variant="rectangular" animation="wave" width="45%" height={30}></Skeleton>
					<Skeleton variant="rectangular" animation="wave" width="45%" height={30}></Skeleton>
				</CardContent>
			</Card>
			<Card className="Card-Container" sx={{ width: 300, minHeight: 425 }}>
				<CardContent className="card-header" sx={{ p: 0 }}>
					<Skeleton variant="circle" animation="wave" width="100%" height={200}></Skeleton>
				</CardContent>

				<CardContent className="card-body">
					<Skeleton variant="text" animation="wave" width="100%" height={25}></Skeleton>
					<Skeleton variant="text" animation="wave" width="100%" height={25}></Skeleton>
					<Skeleton variant="text" animation="wave" width="100%" height={25}></Skeleton>
					<Skeleton variant="text" animation="wave" width="100%" height={25}></Skeleton>
					<Skeleton variant="text" animation="wave" width="100%" height={25}></Skeleton>
				</CardContent>

				<CardContent className="card-footer">
					<Skeleton variant="rectangular" animation="wave" width="45%" height={30}></Skeleton>
					<Skeleton variant="rectangular" animation="wave" width="45%" height={30}></Skeleton>
				</CardContent>
			</Card>
		</Stack>
	);
};

export default Loading;
