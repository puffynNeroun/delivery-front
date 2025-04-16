import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop.tsx";
import { useAuthInit } from "./hooks/useAuthInit";
import { useAppSelector } from "./store/hooks";
import { selectIsInitialized } from "./store/slices/authSlice";

const App = () => {
    useAuthInit();
    const isInitialized = useAppSelector(selectIsInitialized);

    if (!isInitialized) {
        return null; // можно вставить спиннер или "Загрузка..."
    }

    return (
        <>
            <Header />
            <ScrollToTop />
            <Outlet />
            <Footer />
        </>
    );
};

export default App;
