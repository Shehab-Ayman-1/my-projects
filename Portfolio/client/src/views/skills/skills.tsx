import { useEffect } from "react";
import { motion } from "framer-motion";
import { getImgUrl } from "@/client";
import { Tooltip } from "react-tooltip";

import { componentWrap } from "@/wrapper";
import { Error, Loading } from "@/layout";
import { animate } from "@/constants";
import { useSanity } from "@/hooks";
import { SkillsProps, ExperiencesProps } from "@/types";
import "./skills.scss";

const _Skills = () => {
	const [skills, sLoading, sError, sFetcher] = useSanity<SkillsProps[]>("get");
	const [experiences, eLoading, eError, eFetcher] = useSanity<ExperiencesProps[]>("get");

	useEffect(() => {
		sFetcher("skills");
		eFetcher("experiences");
	}, []);

	if (sLoading && eLoading) return <Loading />;
	if (sError || eError) return <Error error={sError || eError} />;

	return (
		<div className="skills-section">
			<motion.h3 className="head-text" {...animate}>
				Skills <span>&</span> Experience
			</motion.h3>
			<div className="container">
				<motion.div className="skills" {...animate}>
					{skills?.map((skill) => (
						<motion.div key={skill.name} className="skill" whileHover={{ scale: [1, 1.1] }} {...animate}>
							<div className="skill-img">
								<div className="overlay" style={{ backgroundColor: skill?.bgColor }} />
								<img src={getImgUrl(skill.icon).toString()} alt={skill.name} />
							</div>
							<p className="skill-name p-text">{skill.name}</p>
						</motion.div>
					))}
				</motion.div>

				<motion.div className="experiences" {...animate}>
					{experiences
						?.sort((a, b) => a.year.localeCompare(b.year))
						?.map(({ year, works }, i) => (
							<div key={i} className="experience">
								<div className="years">
									<p className="bold-text">{year}</p>
								</div>
								<div className="works">
									{works?.map((work, i) => (
										<div key={i} className="work">
											<motion.div className="info" data-tip data-for={work.name} {...animate}>
												<h4 className="bold-text">{work.name}</h4>
												<p className="p-text">{work.company}</p>
											</motion.div>
											<Tooltip id={`${work.name}-${i}`} className="work-tooltip" content={work.description} arrowColor="#fff" />
										</div>
									))}
								</div>
							</div>
						))}
				</motion.div>
			</div>
		</div>
	);
};

const Skills = componentWrap(_Skills, "skills", "app__whitebg");
export { Skills };
