import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import { Section2 } from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsappFloating";
import FAQsections from "./components/ui/Questions";

export default function App() {
	return (
		<div className="relative w-screen max-w-[100vw] overflow-x-hidden bg-black">
			<Navbar />
			<main className="relative">
				<section id="home" className="relative">
					<Landing />
				</section>
				<section id="about" className="relative">
					<Section2 />
				</section>
				<section id="services" className="relative">
					<Section3 />
				</section>
				<section id="portfolio" className="relative">
					<Section4 />
				</section>
				<section id="FAQ" className="relative">
					<FAQsections />
				</section>
			</main>
			<Footer />
			<WhatsAppButton />
		</div>
	);
}
