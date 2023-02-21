import { Avatar } from "@mui/material";

const nameCell = (params) => {
	return (
		<>
			<Avatar src={params.row.photos[0] || ""} alt="product-img" sx={{ mr: 1 }} />
			{params.value}
		</>
	);
};

export const columns = [
	{ field: "_id", headerName: "ID", minWidth: 80 },
	{ field: "type", headerName: "type", minWidth: 110 },
	{ field: "name", headerName: "name", minWidth: 200, renderCell: (params) => nameCell(params) },
	{ field: "title", headerName: "title", minWidth: 200 },
	{ field: "description", headerName: "description", minWidth: 200 },
	{ field: "address", headerName: "address", minWidth: 200 },
	{ field: "rooms", headerName: "Rooms", minWidth: 200 },
	{ field: "city", headerName: "City", minWidth: 80 },
	{ field: "featured", headerName: "featured", minWidth: 110 },
	{ field: "cheapestPrice", headerName: "Price", minWidth: 70 },
	{ field: "distance", headerName: "distance", minWidth: 70 },
	{ field: "rating", headerName: "rating", minWidth: 110 },
];
