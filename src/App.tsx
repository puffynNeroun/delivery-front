import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import MoreAbout from "./components/MoreAbout";
import BasketList from "./pages/BasketList";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/more" element={<MoreAbout />} />
        <Route path="/basket" element={<BasketList />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
