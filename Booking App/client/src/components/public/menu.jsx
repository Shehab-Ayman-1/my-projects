import { useState } from "react";
import "./styles/menu.scss";

export const Menu = ({ title, children, closeable, useArrow = true }) => {
	const [open, setOpen] = useState(false);
	const openMenu = () => setOpen((o) => !o);

	return (
		<div className="menu-section">
			<div className="flex-between" onClick={openMenu}>
				{typeof title === "string" ? <p>{title}</p> : title}

				{useArrow && <i className={`fas ${open ? "fa-chevron-down" : "fa-chevron-up"} text-black`} />}
			</div>
			{closeable && (
				<div className={`menu ${!open ? "hide-scale" : ""}`} onClick={openMenu}>
					{children}
				</div>
			)}
			{!closeable && <div className={`menu ${!open ? "hide-scale" : ""}`}>{children}</div>}
		</div>
	);
};
