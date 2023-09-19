import { Header, About, Skills, Testimonials, Works, Contact } from "@/views";
import { Navbar } from "@/layout";

function App() {
	return (
		<div className="app">
			<Navbar />
			<Header />
			<About />
			<Works />
			<Skills />
			<Testimonials />
			<Contact />
		</div>
	);
}

export default App;
