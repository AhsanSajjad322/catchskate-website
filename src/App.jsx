import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Videos from "./components/Videos.jsx";
import Safety from "./components/Safety.jsx";
import Download from "./components/Download.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Videos />
        <Safety />
        <Download />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
