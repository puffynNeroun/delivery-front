import About from "../components/About";
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
    </>
  );
};

export default Home;
