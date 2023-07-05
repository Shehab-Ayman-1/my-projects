import { useState } from "react";
import "./styles/menu.scss";

export const Menu = ({ title, children, closeable }) => {
	const [open, setOpen] = useState(false);
	const openMenu = () => setOpen((o) => !o);

	return (
		<div className="menu-section">
			<div className="flex-between" onClick={openMenu}>
				<p>{title}</p>
				<i className={`fas ${open ? "fa-chevron-down" : "fa-chevron-up"} text-black`} />
			</div>
			{closeable && (
				<div className={`menu ${!open ? "hide-height" : ""}`} onClick={openMenu}>
					{children}
				</div>
			)}
			{!closeable && <div className={`menu ${!open ? "hide-height" : ""}`}>{children}</div>}
		</div>
	);
};
