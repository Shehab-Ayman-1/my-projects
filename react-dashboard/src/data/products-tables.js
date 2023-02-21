export const productsColumns = [
	{ field: "id", headerName: "ID", width: 40 },
	{
		field: "product",
		headerName: "Product",
		width: 220,
		renderCell: (params) => (
			<>
				<img src={params.row.img} alt="product-img" />
				{params.value}
			</>
		),
	},
	{ field: "customer", headerName: "Customer", width: 130 },
	{ field: "date", headerName: "Date", width: 130 },
	{ field: "amount", headerName: "Amount", width: 100 },
	{ field: "method", headerName: "Payment Method", width: 160 },
	{
		field: "status",
		headerName: "Status",
		width: 100,
		renderCell: (params) => {
			return <span className={`status-type ${params.row.status}`}>{params.row.status}</span>;
		},
	},
];

export const productsRows = [
	{
		id: 1,
		product: "Acer nitro 5",
		img: `https://m.media-amazon.com/images/I/71EMEQKULsL._AC_SL2629_.jpg`,
		customer: "John Smith",
		date: "12 January",
		amount: 23,
		method: "Cash Of Deliery",
		status: "Approved",
	},
	{
		id: 2,
		product: "Playstation 5",
		img: `https://m.media-amazon.com/images/I/81qkGSxXC9L._SL1500_.jpg`,
		customer: "Michael Duo",
		date: "24 February",
		amount: 54,
		method: "Online Payment",
		status: "Pending",
	},
	{
		id: 3,
		product: "Redragon S101",
		img: `https://m.media-amazon.com/images/I/71EMEQKULsL._AC_SX679_.jpg`,
		customer: "John Smith",
		date: "31 March",
		amount: 35,
		method: "Cash Of Deliery",
		status: "Pending",
	},
	{
		id: 4,
		product: "Razar Blade 15",
		img: `https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_SX679_.jpg`,
		customer: "John Smith",
		date: "14 April",
		amount: 920,
		method: "Online Payment",
		status: "Approved",
	},
	{
		id: 5,
		product: "ASUS ROG Strix",
		img: `https://m.media-amazon.com/images/I/71LTfKsKDHS._AC_SX679_.jpg`,
		customer: "Harold Carol",
		date: "25 May",
		amount: 2000,
		method: "Online Payment",
		status: "Pending",
	},
	{
		id: 11,
		product: "Acer nitro 5",
		img: `https://m.media-amazon.com/images/I/71EMEQKULsL._AC_SL2629_.jpg`,
		customer: "John Smith",
		date: "12 January",
		amount: 23,
		method: "Cash Of Deliery",
		status: "Approved",
	},
	{
		id: 12,
		product: "Playstation 5",
		img: `https://m.media-amazon.com/images/I/81qkGSxXC9L._SL1500_.jpg`,
		customer: "Michael Duo",
		date: "24 February",
		amount: 54,
		method: "Online Payment",
		status: "Pending",
	},
	{
		id: 13,
		product: "Redragon S101",
		img: `https://m.media-amazon.com/images/I/71EMEQKULsL._AC_SX679_.jpg`,
		customer: "John Smith",
		date: "31 March",
		amount: 35,
		method: "Cash Of Deliery",
		status: "Pending",
	},
	{
		id: 14,
		product: "Razar Blade 15",
		img: `https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_SX679_.jpg`,
		customer: "John Smith",
		date: "14 April",
		amount: 920,
		method: "Online Payment",
		status: "Approved",
	},
	{
		id: 15,
		product: "ASUS ROG Strix",
		img: `https://m.media-amazon.com/images/I/71LTfKsKDHS._AC_SX679_.jpg`,
		customer: "Harold Carol",
		date: "25 May",
		amount: 2000,
		method: "Online Payment",
		status: "Pending",
	},
	{
		id: 21,
		product: "Acer nitro 5",
		img: `https://m.media-amazon.com/images/I/71EMEQKULsL._AC_SL2629_.jpg`,
		customer: "John Smith",
		date: "12 January",
		amount: 23,
		method: "Cash Of Deliery",
		status: "Approved",
	},
	{
		id: 22,
		product: "Playstation 5",
		img: `https://m.media-amazon.com/images/I/81qkGSxXC9L._SL1500_.jpg`,
		customer: "Michael Duo",
		date: "24 February",
		amount: 54,
		method: "Online Payment",
		status: "Pending",
	},
	{
		id: 23,
		product: "Redragon S101",
		img: `https://m.media-amazon.com/images/I/71EMEQKULsL._AC_SX679_.jpg`,
		customer: "John Smith",
		date: "31 March",
		amount: 35,
		method: "Cash Of Deliery",
		status: "Pending",
	},
	{
		id: 24,
		product: "Razar Blade 15",
		img: `https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_SX679_.jpg`,
		customer: "John Smith",
		date: "14 April",
		amount: 920,
		method: "Online Payment",
		status: "Approved",
	},
	{
		id: 25,
		product: "ASUS ROG Strix",
		img: `https://m.media-amazon.com/images/I/71LTfKsKDHS._AC_SX679_.jpg`,
		customer: "Harold Carol",
		date: "25 May",
		amount: 2000,
		method: "Online Payment",
		status: "Pending",
	},
	{
		id: 31,
		product: "Acer nitro 5",
		img: `https://m.media-amazon.com/images/I/71EMEQKULsL._AC_SL2629_.jpg`,
		customer: "John Smith",
		date: "12 January",
		amount: 23,
		method: "Cash Of Deliery",
		status: "Approved",
	},
	{
		id: 32,
		product: "Playstation 5",
		img: `https://m.media-amazon.com/images/I/81qkGSxXC9L._SL1500_.jpg`,
		customer: "Michael Duo",
		date: "24 February",
		amount: 54,
		method: "Online Payment",
		status: "Pending",
	},
	{
		id: 33,
		product: "Redragon S101",
		img: `https://m.media-amazon.com/images/I/71EMEQKULsL._AC_SX679_.jpg`,
		customer: "John Smith",
		date: "31 March",
		amount: 35,
		method: "Cash Of Deliery",
		status: "Pending",
	},
	{
		id: 34,
		product: "Razar Blade 15",
		img: `https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_SX679_.jpg`,
		customer: "John Smith",
		date: "14 April",
		amount: 920,
		method: "Online Payment",
		status: "Approved",
	},
	{
		id: 35,
		product: "ASUS ROG Strix",
		img: `https://m.media-amazon.com/images/I/71LTfKsKDHS._AC_SX679_.jpg`,
		customer: "Harold Carol",
		date: "25 May",
		amount: 2000,
		method: "Online Payment",
		status: "Pending",
	},
	{
		id: 41,
		product: "Acer nitro 5",
		img: `https://m.media-amazon.com/images/I/71EMEQKULsL._AC_SL2629_.jpg`,
		customer: "John Smith",
		date: "12 January",
		amount: 23,
		method: "Cash Of Deliery",
		status: "Approved",
	},
	{
		id: 42,
		product: "Playstation 5",
		img: `https://m.media-amazon.com/images/I/81qkGSxXC9L._SL1500_.jpg`,
		customer: "Michael Duo",
		date: "24 February",
		amount: 54,
		method: "Online Payment",
		status: "Pending",
	},
	{
		id: 43,
		product: "Redragon S101",
		img: `https://m.media-amazon.com/images/I/71EMEQKULsL._AC_SX679_.jpg`,
		customer: "John Smith",
		date: "31 March",
		amount: 35,
		method: "Cash Of Deliery",
		status: "Pending",
	},
	{
		id: 44,
		product: "Razar Blade 15",
		img: `https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_SX679_.jpg`,
		customer: "John Smith",
		date: "14 April",
		amount: 920,
		method: "Online Payment",
		status: "Approved",
	},
	{
		id: 45,
		product: "ASUS ROG Strix",
		img: `https://m.media-amazon.com/images/I/71LTfKsKDHS._AC_SX679_.jpg`,
		customer: "Harold Carol",
		date: "25 May",
		amount: 2000,
		method: "Online Payment",
		status: "Pending",
	},
];
