import Navbar from "./components/home/Navbar";
import Hero from "./components/home/Hero";
import TrustedCompanies from "./components/home/TrustedCompanies";
import Solutions from "./components/home/Solutions";
import Stats from "./components/home/Stats";
import Programs from "./components/home/Programs";
import Results from "./components/home/Results";
import SuccessStories from "./components/home/SuccessStories";
import Insights from "./components/home/Insights";
import Testimonials from "./components/home/Testimonials";
import Contact from "./components/home/Contact";
import CTA from "./components/home/CTA";
import Footer from "./components/home/Footer";

function App() {
  return (
    <div className="bg-[#F3F4F6] min-h-screen">
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <Solutions />
      <Stats />
      <Programs />
      <Results />
      <SuccessStories />
      <Insights />
      <Testimonials />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;