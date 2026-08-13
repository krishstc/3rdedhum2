import Hero from "../components/home/Hero";
import TrustedCompanies from "../components/home/TrustedCompanies";
import Solutions from "../components/home/Solutions";
import Stats from "../components/home/Stats";
import Programs from "../components/home/Programs";
import Results from "../components/home/Results";
import SuccessStories from "../components/home/SuccessStories";
import Insights from "../components/home/Insights";
import Testimonials from "../components/home/Testimonials";
import Contact from "../components/home/Contact";
import CTA from "../components/footer/CTA";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <>
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
    </>
  );
}

export default Home;