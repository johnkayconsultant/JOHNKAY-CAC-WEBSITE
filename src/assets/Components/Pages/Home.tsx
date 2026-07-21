import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
// import Contact from "./Contact";
// import ContactSection from "@/components/ContactSection";
import SectionPreview from "@/components/SectionPreview";
import CTASection from "@/components/CTASection";
import AboutSection from "@/components/AboutSection";
const Home=()=> {
  
    return (
        <div className="bg-background min-h-screen">
    <Header/>
    <HeroSection/>
    <SectionPreview/>
    <CTASection/>
    {/* <ContactSection/> */}
    <AboutSection/>
    <Footer/>
    
    {/* <Contact/> */}
   
    
    </div>
  );
};

export default Home