import { clients } from "constants/";
import { styles } from "assets/styles";

export const Cliets = () => (
	<section id="client" className={`${styles.flexCenter} w-full justify-between gap-10 sm:flex-row flex-col flex-wrap my-4`}>
		{clients.map((item, i) => (
			<img className="sm:w-[192px] w-[100px] object-contain" src={item.logo} alt={item.id} key={item.id} />
		))}
	</section>
);
