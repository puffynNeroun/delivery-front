import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="text-[#E9E9E9]">
      <div className="container pt-5 md:pt-11 flex justify-between items-center">
        <a>
          <img
            src="../../public/logo2.svg"
            alt="logo"
            className="inline-block max-w-32 md:max-w-56 max-h-14"
          />
        </a>
        <ul className="gap-2 font-bold text-lg md:flex hidden sm:ml-auto lg:ml-0">
          <li>
            <a className=" hover:underline underline-offset-8 decoration-amber-600 cursor-pointer ">
              Главная
            </a>
          </li>
          <li>
            <a className=" hover:underline underline-offset-8 decoration-amber-600 cursor-pointer">
              Каталог
            </a>
          </li>
          <li>
            <a className=" hover:underline underline-offset-8 decoration-amber-600 cursor-pointer">
              Доставка
            </a>
          </li>
          <li>
            <a className=" hover:underline underline-offset-8 decoration-amber-600 cursor-pointer">
              Акции
            </a>
          </li>
          <li>
            <a className="  hover:underline underline-offset-8 decoration-amber-600 cursor-pointer">
              О нас
            </a>
          </li>
          <li>
            <a className="  hover:underline underline-offset-8 decoration-amber-600 cursor-pointer">
              Контакты
            </a>
          </li>
        </ul>
        <div className=" flex items-center gap-14 md:gap-10">
          <p className=" md:text-lg text-sm hidden lg:block">
            +7 (963) 012-14-69
          </p>
          <img
            src="../../public/busket.svg"
            alt="busket"
            className="p-2 bg-amber-600 rounded-full hover:bg-amber-700 transition-all cursor-pointer hidden lg:block"
          />
        </div>
        <RxHamburgerMenu
          className="text-3xl cursor-pointer md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <div
          className={`absolute sm:top-16  left-0 w-full bg-[#F5920B] flex flex-col items-center gap-2 font-semibold text-lg transform transition-transform ${
            isMenuOpen ? "opasity-100" : "opacity-0"
          }`}
          style={{ transition: "transform 0.3s ease, opasity 0.3s ease" }}
        >
          <li className="list-none w-full text-center p-5 transition-all cursor-pointer hover:underline underline-offset-8 decoration-black">
            <a href="">Главная</a>
          </li>
          <li className="list-none w-full text-center p-5 transition-all cursor-pointer hover:underline underline-offset-8 decoration-black">
            <a href=""> Каталог</a>
          </li>
          <li className="list-none w-full text-center p-5 transition-all cursor-pointer hover:underline underline-offset-8 decoration-black">
            <a href=""> Доставка</a>
          </li>
          <li className="list-none w-full text-center p-5 transition-all cursor-pointer hover:underline underline-offset-8 decoration-black">
            <a href="">Акции</a>
          </li>
          <li className="list-none w-full text-center p-5 transition-all cursor-pointer hover:underline underline-offset-8 decoration-black">
            <a href=""> О нас</a>
          </li>
          <li className="list-none w-full text-center p-5 transition-all cursor-pointer hover:underline underline-offset-8 decoration-black">
            <a href=""> Контакты</a>
          </li>
        </div>
      </div>
    </header>
  );
};

export default Header;
