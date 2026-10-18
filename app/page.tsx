import AboutStack from "../components/AboutStack";
import CaseStudy from "../components/CaseStudy";
import ContactCta from "../components/ContactCta";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LogoStrip from "../components/LogoStrip";
import MoreWork from "../components/MoreWork";
import Nav from "../components/Nav";
import Process from "../components/Process";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogoStrip />
        <Services />
        <CaseStudy />
        <MoreWork />
        <Process />
        <AboutStack />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
