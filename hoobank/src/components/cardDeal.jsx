import { card } from "assets/images";
import { styles, layout } from "assets/styles";

export const CardDeal = () => (
	<section className={`${layout.section}`}>
		<div className="md:max-w-[50%] w-full md:text-start text-center">
			<h2 className={`${styles.heading2}`}>
				Find A Better Card Deal, <br className="sm:block hidden" /> In Few Easy Steps
			</h2>
			<p className={`${styles.paragraph}`}>
				With The Right Credit Card, You Can Improve Your Financial Life By Building Credit, Earning Rewards And Saving Money. But
				With Handreds Of Credit Cards On The Market.
			</p>
			<button className="bg-blue-gradient hover:bg-secondary text-primary rounded-[10px] px-10 py-5 text-[18px] font-semibold mt-10">
				Get Started
			</button>
		</div>
		<div className={`${layout.sectionImg} flex-col`}>
			<img src={card} alt="card" />
		</div>
	</section>
);
