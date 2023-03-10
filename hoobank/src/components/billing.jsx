import { apple, bill, google } from "assets/images";
import { styles, layout } from "assets/styles";

export const Billing = () => (
	<section id="product" className={`${layout.sectionReverse}`}>
		<div className={`${layout.sectionImgReverse}`}>
			<img className="w-full h-full z-[5] relative " src={bill} alt="billing" />
			<div className="w-[50%] h-[50%] absolute top-0 -left-1/2 z-[3] white__gradient rounded-full" />
			<div className="w-[50%] h-[50%] absolute bottom-0 -left-0 z-[0] pink__gradient rounded-full" />
		</div>
		<div className={layout.sectionInfo}>
			<h2 className={`${styles.heading2} md:text-start text-center`}>
				Easy Control You <br className="md:block hidden" /> Billing & Invoicing
			</h2>
			<p className={`${styles.paragraph} md:text-start text-center`}>
				consectetur adipisicing elit. Quas magni praesentium velit accusamus illum laudantium est labore natus officia corporis
				architecto sint voluptatum nam error, magnam eos ea animi quidem.
			</p>
			<div className={`${styles.flexCenter} w-full flex-wrap flex-row sm:mt-10 mt-6`}>
				<img className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" src={apple} alt="app_store" />
				<img className="w-[128px] h-[42px] object-contain cursor-pointer" src={apple} alt="google_play" />
			</div>
		</div>
	</section>
);
