import { useEffect } from "react";
import { motion } from "framer-motion";
import { getImgUrl } from "@/client";

import { componentWrap } from "@/wrapper";
import { Error, Loading } from "@/layout";
import { animate } from "@/constants";
import { useSanity } from "@/hooks";
import { AboutsProps } from "@/types";
import "./about.scss";

const _About = () => {
	const [abouts, loading, error, fetcher] = useSanity<AboutsProps[]>("get");

	useEffect(() => {
		fetcher("abouts");
	}, []);

	if (loading) return <Loading />;
	if (error) return <Error error={error} />;

	return (
		<div className="about-section">
			<motion.h3 className="head-text" {...animate}>
				I Know That <span>Good Apps</span>
				<br />
				Means <span>Good Business</span>
			</motion.h3>
			<div className="profile">
				{abouts?.map((item, i) => (
					<motion.div className="item" key={i} whileHover={{ scale: [1, 1.1] }} {...animate}>
						<img src={getImgUrl(item.imgUrl)?.toString()} alt={item.title} />
						<h3 className="bold-text" style={{ marginTop: "20px" }}>
							{item.title}
						</h3>
						<p className="p-text" style={{ marginTop: "10px" }}>
							{item.description}
						</p>
					</motion.div>
				))}
			</div>
		</div>
	);
};

const About = componentWrap(_About, "about", "app__whitebg");

export { About };
