import ContactForm from "./ContactForm";
import HappyClientsSpotlight from "./HappyClientsSpotlight";
import HeroSection from "./HeroSection";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <HappyClientsSpotlight />
            <ContactForm/>
        </div>
    );
};

export default Home;