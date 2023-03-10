import { Hero, Statistics, Business, Billing, CardDeal, Testimonials, Cliets, CTA } from "components";
import { Navbar, Footer } from "layout";
import { styles } from "assets/styles";
import "assets/scss/styles.scss";
import "assets/fonts/fontAwasome.css";

const App = () => (
	<div className="bg-primary w-full overflow-hidden ">
		<header className={`navbar-layout m-auto ${styles.flexCenter} ${styles.paddingX} ${styles.boxWidth}`}>
			<Navbar />
		</header>

		<section className={`hero-section ${styles.flexStart}`}>
			<Hero />
		</section>

		<section className={`${styles.boxWidth} ${styles.flexStart} ${styles.paddingX} flex-col m-auto`}>
			<Statistics />
			<Business />
			<Billing />
			<CardDeal />
			<Testimonials />
			<Cliets />
			<CTA />
			<Footer />
		</section>
	</div>
);

export default App;
