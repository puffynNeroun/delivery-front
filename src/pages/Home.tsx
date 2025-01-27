import About from "../components/About";
import Contact from "../components/Contact";
import Delivery from "../components/Delivery";
import Discounts from "../components/Discounts";
import Popular from "../components/Popular";
import Wealcome from "../components/Wealcome";

const Home = () => {
    return (
        <>
            <section id="welcome">
                <Wealcome />
            </section>
            <section id="popular">
                <Popular />
            </section>
            <section id="delivery">
                <Delivery />
            </section>
            <section id="discounts">
                <Discounts />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </>
    );
};

export default Home;
