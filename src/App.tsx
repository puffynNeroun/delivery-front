import {Outlet} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop.tsx";
import {useAuthInit} from "./hooks/useAuthInit.ts";


const App = () => {
    useAuthInit()
    return (
        <>
            <Header/>
            <ScrollToTop/>
            <Outlet/>

            <Footer/>
        </>
    );
};

export default App;
