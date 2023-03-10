import { stats } from "constants/";
import { styles } from "assets/styles";

export const Statistics = () => (
	<div className={`${styles.flexCenter} w-full justify-between gap-5 text-center flex-row flex-wrap sm:mb-20 mb-6`}>
		{stats.map((item) => (
			<div className={`${styles.flexCenter} flex-col sm:flex-row`} key={item.id}>
				<h4 className="font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">{item.value}</h4>
				<p className="font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
					{item.title}
				</p>
			</div>
		))}
	</div>
);
