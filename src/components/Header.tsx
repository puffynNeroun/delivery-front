import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import LogoutButton from './LogoutButton';
import { useAppSelector } from '../store/hooks';
import { selectIsAuth, selectIsInitialized } from '../store/slices/authSlice';



const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAuth = useAppSelector(selectIsAuth);
  const isInitialized = useAppSelector(selectIsInitialized);


  if (!isInitialized) return null; // ⏳ пока не знаем, авторизован ли пользователь
  console.log("🧠 Header: isInitialized =", isInitialized, "isAuth =", isAuth);


  return (
      <header className="text-[#E9E9E9]">
        <div className="container py-5 md:pt-11 flex justify-between items-center">
          <RouterLink to="/">
            <img
                src="/logo2.svg"
                alt="logo"
                className="inline-block max-w-32 xl:max-w-56 max-h-14"
            />
          </RouterLink>
          <ul className="lg:gap-8 font-bold text-lg md:flex hidden sm:ml-auto lg:ml-0 gap-4 items-center">
            <li className="hover:underline underline-offset-8 decoration-2 decoration-amber-600 cursor-pointer">
              <RouterLink to="/">Главная</RouterLink>
            </li>
            <li className="hover:underline underline-offset-8 decoration-2 decoration-amber-600 cursor-pointer">
              <RouterLink to="/catalog">Каталог</RouterLink>
            </li>

            {isHomePage && (
                <>
                  <li className="hover:underline underline-offset-8 decoration-2 decoration-amber-600 cursor-pointer">
                    <ScrollLink to="delivery" smooth={true} duration={500} offset={-80}>
                      Доставка
                    </ScrollLink>
                  </li>
                  <li className="hover:underline underline-offset-8 decoration-2 decoration-amber-600 cursor-pointer">
                    <ScrollLink to="discounts" smooth={true} duration={500} offset={-80}>
                      Акции
                    </ScrollLink>
                  </li>
                  <li className="hover:underline underline-offset-8 decoration-2 decoration-amber-600 cursor-pointer">
                    <ScrollLink to="about" smooth={true} duration={500} offset={-80}>
                      О нас
                    </ScrollLink>
                  </li>
                  <li className="hover:underline underline-offset-8 decoration-2 decoration-amber-600 cursor-pointer">
                    <ScrollLink to="contact" smooth={true} duration={500} offset={-80}>
                      Контакты
                    </ScrollLink>
                  </li>
                </>
            )}

            {isAuth ? (
                <li>
                  <LogoutButton />
                </li>
            ) : (
                <>
                  <li className="hover:underline underline-offset-8 decoration-2 decoration-amber-600 cursor-pointer">
                    <RouterLink to="/login">Вход</RouterLink>
                  </li>
                  <li className="hover:underline underline-offset-8 decoration-2 decoration-amber-600 cursor-pointer">
                    <RouterLink to="/register">Регистрация</RouterLink>
                  </li>
                </>
            )}
          </ul>
        </div>
      </header>
  );
};

export default Header;
