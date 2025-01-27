import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="text-[#E9E9E9]">
      <div className="container py-5 md:pt-11 flex justify-between items-center">
        <Link to={"/"}>
          <img
            src="../../public/logo2.svg"
            alt="logo"
            className="inline-block max-w-32 xl:max-w-56 max-h-14"
          />
        </Link>
        <ul className="lg:gap-8 font-bold text-lg md:flex hidden sm:ml-auto lg:ml-0 gap-4 ">
          <li className={"hover:underline underline-offset-8 decoration-2 decoration-amber-600 cursor-pointer"}>
            <Link to={"/"}>
              Главная
            </Link>
          </li>
          <li className={"hover:underline underline-offset-8 decoration-2 decoration-amber-600 cursor-pointer"}>
            <Link to={"/catalog"} >
              Каталог
            </Link>
          </li>
          <li className={"hover:underline underline-offset-8 decoration-2 decoration-amber-600 cursor-pointer"}>
            <Link to={"/"}>
              Доставка
            </Link>
          </li>
          <li className={"hover:underline underline-offset-8 decoration-2 decoration-amber-600 cursor-pointer"}>
            <Link to={"/"}>
              Акции
            </Link>
          </li>
          <li className={"hover:underline underline-offset-8 decoration-2 decoration-amber-600 cursor-pointer"}>
            <Link to={"/more"}>
              О нас
            </Link>
          </li>
          <li className={"hover:underline underline-offset-8 decoration-2 decoration-amber-600 cursor-pointer"}>
            <Link to={"/"}>
              Контакты
            </Link>
          </li>
        </ul>
        <div className=" flex items-center gap-14 md:gap-10">
          <p className=" md:text-lg text-sm hidden lg:block">
            +7 (963) 012-14-69
          </p>
          <Link to="/basket">
            <img
              src="../../public/busket.svg"
              alt="busket"
              className="p-2 bg-amber-600 rounded-full hover:bg-amber-700 transition-all cursor-pointer hidden lg:block"
            />
          </Link>
        </div>
        <RxHamburgerMenu
          className="text-3xl cursor-pointer md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        {/*<div*/}
        {/*  className={`absolute sm:top-16  left-0 w-full bg-[#F5920B] flex flex-col items-center gap-2 font-semibold text-lg transform transition-transform ${*/}
        {/*    isMenuOpen ? "opasity-100" : "opacity-0"*/}
        {/*  }`}*/}
        {/*  style={{ transition: "transform 0.3s ease, opasity 0.3s ease" }}*/}
        {/*>*/}
        {/*  <li className="list-none w-full text-center p-5 transition-all cursor-pointer hover:underline underline-offset-8 decoration-black">*/}
        {/*    <a href="">Главная</a>*/}
        {/*  </li>*/}
        {/*  <li className="list-none w-full text-center p-5 transition-all cursor-pointer hover:underline underline-offset-8 decoration-black">*/}
        {/*    <a href=""> Каталог</a>*/}
        {/*  </li>*/}
        {/*  <li className="list-none w-full text-center p-5 transition-all cursor-pointer hover:underline underline-offset-8 decoration-black">*/}
        {/*    <a href=""> Доставка</a>*/}
        {/*  </li>*/}
        {/*  <li className="list-none w-full text-center p-5 transition-all cursor-pointer hover:underline underline-offset-8 decoration-black">*/}
        {/*    <a href="">Акции</a>*/}
        {/*  </li>*/}
        {/*  <li className="list-none w-full text-center p-5 transition-all cursor-pointer hover:underline underline-offset-8 decoration-black">*/}
        {/*    <a href=""> О нас</a>*/}
        {/*  </li>*/}
        {/*  <li className="list-none w-full text-center p-5 transition-all cursor-pointer hover:underline underline-offset-8 decoration-black">*/}
        {/*    <a href=""> Контакты</a>*/}
        {/*  </li>*/}
        {/*</div>*/}
      </div>
    </header>
  );
};

export default Header;
