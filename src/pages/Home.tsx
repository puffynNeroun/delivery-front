import About from "../components/About";
import Contact from "../components/Contact";
import Delivery from "../components/Delivery";
import Discounts from "../components/Discounts";
import Popular from "../components/Popular";

import Wealcome from "../components/Wealcome";

const Home = () => {
  return (
    <>
      <Wealcome />
      <Popular />
      <About />
      <Delivery />
      <Discounts />
      <Contact />
    </>
  );
};

export default Home;
