import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { getImgUrl } from "@/client";

import { componentWrap } from "@/wrapper";
import { Error, Loading } from "@/layout";
import { useSanity } from "@/hooks";
import { animate } from "@/constants";
import { WorkProps } from "@/types";
import "./works.scss";

// const tabs = ["All", "UI/UX", "Web App", "Mobile App", "React JS"];
export const _Works = () => {
	const [works, loading, error, fetcher] = useSanity<WorkProps[]>("get");
	const [tabs, setTabs] = useState<string[]>([]);
	const [activeTab, setActiveTab] = useState("All");
	const [cardAnimate, setCardAnimate] = useState({ y: 0, opacity: 1 });
	const [filteredWorks, setFilteredWorks] = useState<WorkProps[]>([]);

	useEffect(() => {
		(async () => {
			const response = await fetcher("works");
			setFilteredWorks(() => response);

			// Get Project Tabs
			if (!response?.length) return;
			const getTabs = response.map(({ tags }: WorkProps) => tags.join(""));
			const tabs: string[] = Array.from(new Set(["All", ...getTabs]));
			setTabs(() => tabs);
		})();
	}, []);

	useEffect(() => {
		setCardAnimate(() => ({ y: 200, opacity: 0 }));

		setTimeout(() => {
			setCardAnimate(() => ({ y: 0, opacity: 1 }));
			if (!works?.length) return;
			if (activeTab === "All") setFilteredWorks(() => works);
			else setFilteredWorks(() => works.filter((work) => work.tags.includes(activeTab)));
		}, 500);
	}, [activeTab]);

	if (loading) return <Loading />;
	if (error) return <Error error={error} />;

	return (
		<div className="works-section">
			<motion.h3 className="head-text" {...animate}>
				My Creative <span>Portfolio</span> Section
			</motion.h3>
			<div className="filter">
				<motion.div className="tabs" {...animate}>
					{tabs?.map((tab, i) => (
						<h3 key={i} className={`tab app__flex ${tab === activeTab ? "active" : ""}`} onClick={() => setActiveTab(() => tab)}>
							{tab}
						</h3>
					))}
				</motion.div>
				<motion.div className="result" animate={cardAnimate} whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5, delayChildren: 0.5, ease: "easeInOut" }}>
					{filteredWorks?.map((work, i) => (
						<motion.div className="card" key={i} whileHover={{ scale: [1, 1] }} {...animate}>
							<div className="card-img">
								<img src={getImgUrl(work.imgUrl).toString()} alt={work.title} />
								<div className="tags">
									<h3 className="bold-text">{work.tags?.join(", ")}</h3>
								</div>
								<motion.div className="overlay" {...animate}>
									<a href={work.projectLink} target="_blank" rel="noreferrer">
										<motion.div className="app__flex" whileHover={{ scale: [1, 0.9] }} transition={{ duration: 0.25 }}>
											<AiFillEye />
										</motion.div>
									</a>
									<a href={work.codeLink} target="_blank" rel="noreferrer">
										<motion.div className="app__flex" whileHover={{ scale: [1, 0.9] }} transition={{ duration: 0.25 }}>
											<AiFillGithub />
										</motion.div>
									</a>
								</motion.div>
							</div>
							<div className="card-content">
								<h3 className="bold-text" style={{ marginTop: 20 }}>
									{work.title}
								</h3>
								<p className="p-text">{work.description}</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

const Works = componentWrap(_Works, "works");
export { Works };
