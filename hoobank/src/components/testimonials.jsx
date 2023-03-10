import React from "react";
import { feedback } from "constants/";
import { styles } from "assets/styles";
import { quotes } from "assets/images";

export const Testimonials = () => (
	<section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`} id="clients">
		<div
			className={`${styles.paddingY} ${styles.flexStart} w-full flex-wrap md:flex-row flex-col justify-between md:text-start text-center relative z-[1]`}>
			<h2 className={styles.heading2}>
				What People Are <br className="sm:block hidden" /> Saying About Us
			</h2>
			<p className={styles.paragraph}>Everything You Need To Accept Card Payments And Gave Your Business Anywhere On The Planet</p>
		</div>
		<div className={`${styles.flexStart} w-full feedback-container md:flex-row flex-col relative z-[2]`}>
			<div className="blue__gradient w-[60%] h-[60%] absolute -right-[30%] rounded-full" />
			{feedback.map(({ id, name, title, content, img }) => (
				<div
					className={`${styles.flexStart} feedback-card flex-col px-10 py-12 rounded-[20px] W-1/3 md:mr-10 sm:mr-5 mr-0 my-5 z-[1] relative`}
					key={id}>
					<img className="mb-5 w-20 h-20" src={quotes} alt="img" />
					<p className="text-dimWhite text-[14px]">{content}</p>
					<div className={`${styles.flexStart} mt-5`}>
						<img className="w-[48px] h-[48px] my-auto" src={img} alt="user-img" />
						<div className="flex flex-col ml-8">
							<p className="text-white text-[16px]">{name}</p>
							<p className="text-dimWhite text-[12px]">{title}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	</section>
);
