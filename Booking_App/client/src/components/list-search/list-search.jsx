// React
import React, { useContext, useState } from "react";
import "./list-search.scss";

// Components
import { Autocomplete, Button, Menu, TextField, Typography } from "@mui/material";

// React Data Range
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { HotelContext } from "../../context/hotel/context";
import { NEW_SEARCH } from "../../context/hotel/actions";

const ListSearch = ({ UseReFetch }) => {
	const context = useContext(HotelContext);
	const given = context.state;

	// Refresh The Data
	const handleSearch = () => UseReFetch();

	// Handle Despatch
	const handleDispatch = (name, value, isOptions = false) => {
		if (isOptions) {
			context.dispatch(NEW_SEARCH({ ...given, options: { ...given.options, [name]: value } }));
		} else {
			context.dispatch(NEW_SEARCH({ ...given, [name]: value }));
		}
	};

	// Date Range
	const [calender, setCalender] = useState(null);
	const openCalender = Boolean(calender);
	const handleOpenCalender = (event) => setCalender(event.currentTarget);
	const handleCloseCalender = () => setCalender(null);

	// Change Fields State
	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		if (name === "adult" || name === "children" || name === "room") handleDispatch(name, +value, true);
		else handleDispatch(name, value);
	};

	return (
		<div className="list-search">
			<Typography variant="h6" className="main-title">
				Search.
			</Typography>

			<Typography className="subtitle" variant="overline">
				Destination
			</Typography>

			<Autocomplete
				options={given.selectOptions}
				value={given.destination}
				freeSolo
				fullWidth
				renderInput={(ev) => <TextField {...ev} onChange={(e) => handleDispatch("destination", e.target.value)} />}
				onChange={(e, value) => handleDispatch("destination", value)}
			/>

			<div className="check-date">
				<Typography className="subtitle" variant="overline">
					Check In Date
				</Typography>
				<Typography className="date" variant="h6" onClick={handleOpenCalender}>
					{format(given.date[0].startDate, "MM/dd/yyyy")} : {format(given.date[0].endDate, "MM/dd/yyyy")}
				</Typography>
			</div>

			<div className="row">
				<span className="field-title">Min Price : </span>
				<input type="number" name="min" value={given.min} min="0" onChange={handleChange} />
			</div>
			<div className="row">
				<span className="field-title">Max Price : </span>
				<input type="number" name="max" value={given.max} min="0" onChange={handleChange} />
			</div>
			<div className="row">
				<span className="field-title">adult : </span>
				<input type="number" name="adult" value={given.options.adult} min="0" onChange={handleChange} />
			</div>
			<div className="row">
				<span className="field-title">children : </span>
				<input type="number" name="children" value={given.options.children} min="0" onChange={handleChange} />
			</div>
			<div className="row">
				<span className="field-title">room : </span>
				<input type="number" name="room" value={given.options.room} min="0" onChange={handleChange} />
			</div>
			<Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleSearch}>
				Search
			</Button>
			<Menu anchorEl={calender} open={openCalender} onClose={handleCloseCalender}>
				<DateRange
					className="calendar"
					ranges={given.date}
					editableDateInputs={true}
					moveRangeOnFirstSelection={false}
					onChange={(event) => handleDispatch("date", [event.selected])}
				/>
			</Menu>
		</div>
	);
};

export default ListSearch;
