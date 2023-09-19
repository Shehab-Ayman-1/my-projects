const links = ["home", "about", "works", "skills", "testimonials", "contact"];

export const NavigationDots = ({ activeLink }: { activeLink: string }) => {
	return (
		<div className="app__navigation">
			{links.map((link, i) => (
				<a key={i} href={`#${link}-section`} className="app__navigation-dot" style={{ background: activeLink === link ? "#313bac" : "" }} />
			))}
		</div>
	);
};
