import { styles } from "assets/styles";

export const CTA = () => (
	<section
		id="cts"
		className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} w-full justify-between sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
		<div className="flex flex-col flex-1 sm:mr-5 mr-0">
			<h2 className={styles.heading2}>Let's Try Our Services Now!</h2>
			<p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
				Everything You Need To Accept Card Payments And Grow Your Business Anywhere On The Planet.
			</p>
		</div>
		<button className="bg-blue-gradient text-primary rounded-[10px] px-10 py-5 text-[18px] font-semibold mt-10">Get Started</button>
	</section>
);
