import {useState} from "react";
import {Link as RouterLink, useLocation} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";
import {useAppSelector} from "../store/hooks";
import {selectIsAuth, selectIsInitialized} from "../store/slices/authSlice";
import {selectCartItems} from "../store/slices/cartSlice";
import LogoutButton from "./LogoutButton";
import {ShoppingCart, Menu, X, LogOut, LogIn} from "lucide-react";

const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const isAuth = useAppSelector(selectIsAuth);
    const isInitialized = useAppSelector(selectIsInitialized);
    const cartItems = useAppSelector(selectCartItems);
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const [menuOpen, setMenuOpen] = useState(false);

    if (!isInitialized) return null;

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const NavLinks = () => (
        <>
            <li><RouterLink to="/" className="nav-link">Главная</RouterLink></li>
            <li><RouterLink to="/catalog" className="nav-link">Каталог</RouterLink></li>
            {isHomePage && (
                <>
                    <li><ScrollLink to="delivery" smooth offset={-80}
                                    className="nav-link cursor-pointer">Доставка</ScrollLink></li>
                    <li><ScrollLink to="discounts" smooth offset={-80}
                                    className="nav-link cursor-pointer">Акции</ScrollLink></li>
                    <li><ScrollLink to="about" smooth offset={-80} className="nav-link cursor-pointer">О
                        нас</ScrollLink></li>
                    <li><ScrollLink to="contact" smooth offset={-80}
                                    className="nav-link cursor-pointer">Контакты</ScrollLink></li>
                </>
            )}
        </>
    );

    return (
        <header className="text-[#E9E9E9] bg-[#121212] shadow-md">
            <div className="max-w-screen-xl mx-auto px-4 lg:px-8 h-24 flex justify-between items-center relative">
                {/* Logo */}
                <RouterLink to="/" className="flex items-center">
                    <img src="/logo2.svg" alt="logo" className="max-h-16"/>
                </RouterLink>

                <div className="flex items-center gap-6">
                    {/* Desktop Nav */}
                    <ul className="hidden lg:flex gap-6 xl:gap-10 items-center font-semibold text-[17px] tracking-tight">
                        <NavLinks/>
                    </ul>

                    {/* Desktop Icons */}
                    <div className="hidden lg:flex gap-5 items-center">
                        <RouterLink to="/basket" className="relative" title="Корзина">
                            <ShoppingCart className="w-6 h-6 text-[#F5920B] hover:scale-110 transition-transform"/>
                            {totalItems > 0 && (
                                <span
                                    className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
                            )}
                        </RouterLink>

                        {isAuth ? (
                            <LogoutButton icon={<LogOut className="w-6 h-6 text-[#F5920B]"/>}/>
                        ) : (
                            <RouterLink to="/login" title="Войти">
                                <LogIn className="w-6 h-6 text-[#F5920B] hover:scale-110 transition-transform"/>
                            </RouterLink>
                        )}
                    </div>


                    {/* Mobile icons (burger + cart + login) */}
                    <div className="flex lg:hidden gap-4 items-center">
                        <RouterLink to="/basket" className="relative">
                            <ShoppingCart className="w-6 h-6 text-[#F5920B]"/>
                            {totalItems > 0 && (
                                <span
                                    className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
                            )}
                        </RouterLink>
                        {isAuth ? (
                            <LogoutButton icon={<LogOut className="w-6 h-6 text-[#F5920B]"/>}/>
                        ) : (
                            <RouterLink to="/login">
                                <LogIn className="w-6 h-6 text-[#F5920B]"/>
                            </RouterLink>
                        )}
                        <button onClick={toggleMenu} className="text-[#F5920B]">
                            {menuOpen ? <X className="w-7 h-7"/> : <Menu className="w-7 h-7"/>}
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                {menuOpen && (
                    <div
                        className="absolute top-full left-0 w-full bg-[#0c0c0c] z-40 p-6 rounded-b-xl shadow-lg animate-fade-in-down">
                        <ul className="flex flex-col gap-4 text-lg font-medium">
                            <NavLinks/>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
