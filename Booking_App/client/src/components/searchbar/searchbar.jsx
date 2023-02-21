// React
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./searchbar.scss";

// Material Ui
import { CalendarMonth, LocalHotel } from "@mui/icons-material";
import { Autocomplete, Button, Grid, Menu, Stack, TextField, Typography } from "@mui/material";

// Components
import { HotelContext } from "../../context/hotel/context";
import { NEW_SEARCH } from "../../context/hotel/actions";

// Date Range
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Searchbar = () => {
	const context = useContext(HotelContext);
	const given = context.state;

	// Handle Despatch
	const handleDispatch = (name, value, isOptions = false) => {
		if (isOptions) {
			context.dispatch(NEW_SEARCH({ ...given, options: { ...given.options, [name]: value } }));
		} else {
			context.dispatch(NEW_SEARCH({ ...given, [name]: value }));
		}
	};

	// React Date Range
	const [calender, setCalender] = useState(null);
	const openCalender = Boolean(calender);
	const handleOpenCalender = (event) => setCalender(event.currentTarget);
	const handleCloseCalender = () => setCalender(null);

	// Right Section Search Bar
	const [OptionsMenu, setOptionMenu] = useState(null);
	const openOptions = Boolean(OptionsMenu);
	const handleOpenOptions = (event) => setOptionMenu(event.currentTarget);
	const handleCloseOptions = () => setOptionMenu(null);

	// Navigate To Search Page

	return (
		<>
			<Grid container className="search-bar" spacing={2}>
				<Grid className="left-section section" item xs={12} sm={6} lg={3} sx={{ pb: 2 }}>
					<LocalHotel sx={{ mr: 2 }} />

					<Autocomplete
						options={given.selectOptions}
						value={given.destination}
						freeSolo
						fullWidth
						renderInput={(ev) => (
							<TextField
								{...ev}
								variant="standard"
								label="Where Are You Going ?"
								onChange={(e) => handleDispatch("destination", e.target.value)}
							/>
						)}
						onChange={(e, value) => handleDispatch("destination", value)}
					/>
				</Grid>

				<Grid className="meddle-section section" item xs={12} sm={6} lg={3} sx={{ pb: 2 }} onClick={handleOpenCalender}>
					<CalendarMonth sx={{ mr: 2 }} />
					<Typography variant="body2" className="date-to-date">
						{format(given.date[0].startDate, "MM/dd/yyyy")} | {format(given.date[0].endDate, "MM/dd/yyyy")}
					</Typography>
				</Grid>

				<Grid className="right-section section" item xs={12} sm={6} lg={4} sx={{ pb: 2 }} onClick={handleOpenOptions}>
					<LocalHotel sx={{ mr: 2 }} />
					<span className="right-option">
						<span>{given.options.adult} adult </span>
						<span>{given.options.children} children </span>
						<span>{given.options.room} room</span>
					</span>
				</Grid>

				<Grid className="submit-btn" item xs={12} sm={6} lg={2} sx={{ pb: 2 }}>
					<Button component={Link} to="/hotels" className="btn" variant="contained" color="primary" size="large">
						Search
					</Button>
				</Grid>
			</Grid>

			<Menu anchorEl={OptionsMenu} open={openOptions} onClose={handleCloseOptions}>
				<Stack direction="row" justifyContent="space-between" alignItems="center" width="250px" padding="10px 12px">
					<span>Adult</span>
					<div>
						<Button
							variant="contained"
							size="small"
							sx={{ marginInline: 2, minWidth: "14px" }}
							onClick={() => handleDispatch("adult", (given.options.adult -= 1), true)}>
							-
						</Button>
						{given.options.adult}
						<Button
							variant="contained"
							size="small"
							sx={{ ml: 2, minWidth: "14px" }}
							onClick={() => handleDispatch("adult", (given.options.adult += 1), true)}>
							+
						</Button>
					</div>
				</Stack>

				<Stack direction="row" justifyContent="space-between" alignItems="center" width="250px" padding="10px 12px">
					<span>Children</span>
					<div>
						<Button
							variant="contained"
							color="primary"
							size="small"
							sx={{ marginInline: 2, minWidth: "14px" }}
							onClick={() => handleDispatch("children", (given.options.children -= 1), true)}>
							-
						</Button>
						{given.options.children}
						<Button
							variant="contained"
							color="primary"
							size="small"
							sx={{ ml: 2, minWidth: "14px" }}
							onClick={() => handleDispatch("children", (given.options.children += 1), true)}>
							+
						</Button>
					</div>
				</Stack>

				<Stack direction="row" justifyContent="space-between" alignItems="center" width="250px" padding="10px 12px">
					<span>Room</span>
					<div>
						<Button
							variant="contained"
							color="primary"
							size="small"
							sx={{ marginInline: 2, minWidth: "14px" }}
							onClick={() => handleDispatch("room", (given.options.room += 1), true)}>
							-
						</Button>
						{given.options.room}
						<Button
							variant="contained"
							color="primary"
							size="small"
							sx={{ ml: 2, minWidth: "14px" }}
							onClick={() => handleDispatch("room", (given.options.room += 1), true)}>
							+
						</Button>
					</div>
				</Stack>
			</Menu>

			<Menu anchorEl={calender} open={openCalender} onClose={handleCloseCalender}>
				<DateRange
					onChange={(e) => handleDispatch("date", [e.selected])}
					className="calendar"
					ranges={given.date}
					editableDateInputs={true}
					moveRangeOnFirstSelection={false}
				/>
			</Menu>
		</>
	);
};

export default Searchbar;
