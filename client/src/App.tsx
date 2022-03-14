import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { RoadMap } from "./components/RoadMap";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";
import { Faq } from "./components/FAQ";

export default function App() {
  return (
    <div id="home" className=" bg-[#f4f2ed] overflow-hidden h-full">
      <Header />
      <Hero />
      <About />
      <RoadMap />
      <Team />
      <Faq />
      <Footer />
    </div>
  );
}
