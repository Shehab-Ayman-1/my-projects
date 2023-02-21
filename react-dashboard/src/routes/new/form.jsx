// React
import React, { useState } from "react";
import "./form.scss";

// Components
import Sidebar from "../../layout/sidebar/sidebar";
import Navbar from "../../layout/navbar/navbar";

// Material UI
import { Avatar, Button, Input } from "@mui/material";

const FormValidation = (props) => {
	const [file, setFile] = useState(false);

	let chFile = (event) => {
		setFile(event.target.files[0]);
	};

	return (
		<section className="add-user">
			<Navbar />
			<Sidebar />

			<div className="add-user-container">
				<h1 className="section-title">{props.title}</h1>
				<form>
					<div className="text-field">
						<div className="left-section">
							{props.inputsData.map((input) => (
								<div className={`field-wrapper ${input.classname}`} key={input.id}>
									<input id={input.id} type={input.type} placeholder={input.placeholder} required />
								</div>
							))}
							<Button className="submit-btn" variant="contained" color="secondary">
								Submit
							</Button>
						</div>
						<div className="right-section">
							<label htmlFor="file">
								<Input type="file" id="file" accept="image/*" onChange={chFile} sx={{ display: "none" }} />
								<Avatar sx={{ width: 200, height: 200, cursor: "pointer" }} src={file ? URL.createObjectURL(file) : ""} />
							</label>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};

export default FormValidation;
