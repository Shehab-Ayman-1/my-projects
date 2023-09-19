import { motion } from "framer-motion";
import { componentWrap } from "@/wrapper";
import { profile, circle, flutter, sass, redux } from "@/assets";
import "./header.scss";

const scalesVariants = {
	whileInView: {
		scale: [0, 1],
		opacity: [0, 1],
		transition: { duration: 1, ease: "easeInOut" },
	},
};

const images = [flutter, redux, sass];
const _Header = () => {
	return (
		<header className="header-section app__flex">
			<motion.div className="header-info" whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }}>
				<div className="badge">
					<motion.div className="badge-cmp app__flex" whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.2, type: "tween" }}>
						<span className="clump">👋</span>
						<div className="head">
							<p className="p-text">Hello, I Am</p>
							<h3 className="head-text">Micael</h3>
						</div>
					</motion.div>
					<motion.div className="tag-cmp" whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.2, type: "tween" }}>
						<p className="p-text">Web Developer</p>
						<p className="p-text">Freelancer</p>
					</motion.div>
				</div>
			</motion.div>

			<motion.div className="header-img" whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5, delayChildren: 0.5 }}>
				<img className="profile" src={profile} alt="profile" />
				<motion.img className="overlay-circle" src={circle} alt="profile-circle" whileInView={{ scale: [0, 1] }} transition={{ duration: 1, ease: "easeInOut" }} />
			</motion.div>

			<motion.div className="header-circles" variants={scalesVariants} whileInView={scalesVariants.whileInView}>
				{images.map((img, i) => (
					<motion.div key={i} className="circle app__flex" whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.2, type: "tween" }}>
						<img src={img} alt="circle" />
					</motion.div>
				))}
			</motion.div>
		</header>
	);
};

const Header = componentWrap(_Header, "home");
export { Header };
