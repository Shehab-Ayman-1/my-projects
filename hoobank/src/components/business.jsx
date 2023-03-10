import { features } from "constants/";
import { styles, layout } from "assets/styles";

export const Business = () => (
	<section id="features" className={`${layout.section}`}>
		<div className="md:max-w-[50%] w-full md:text-start text-center">
			<h2 className={`${styles.heading2}`}>
				You Do The Business, <br className="sm:block hidden" /> We'll Handle The Money.
			</h2>
			<p className={`${styles.paragraph}`}>
				With The Right Credit Card, You Can Improve Your Financial Life By Building Credit, Earning Rewards And Saving Money. But
				With Handreds Of Credit Cards On The Market.
			</p>
			<button className="bg-blue-gradient text-primary rounded-[10px] px-10 py-5 text-[18px] font-semibold mt-10">Get Started</button>
		</div>
		<div className={`${layout.sectionImg} flex-col`}>
			{features.map((item, i) => (
				<div className={`${i !== 2 ? "mb-6" : "mb-0"} flex flex-row feature-card rounded-[20px] py-5`} key={item.id}>
					<img className={`w-15 h-15 m-10 bg-dimBlue rounded-full p-5`} src={item.icon} alt="icon" />
					<div>
						<h2 className="text-[18px]">{item.title}</h2>
						<p className={`${styles.paragraph}`}>{item.content}</p>
					</div>
				</div>
			))}
		</div>
	</section>
);
