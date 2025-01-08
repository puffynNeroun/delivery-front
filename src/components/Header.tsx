import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="text-[#E9E9E9] container pt-11 flex justify-between items-center">
      <a>
        <img
          src="../../public/logo2.svg"
          alt="logo"
          className="inline-block w-[227px] h-[61px]"
        />
      </a>
      <ul className="space-x-2.5 font-bold text-lg hidden xl:flex">
        <li>
          <a className=" hover:underline underline-offset-8 decoration-amber-600 ">
            Главная
          </a>
        </li>
        <li>
          <a className=" hover:underline underline-offset-8 decoration-amber-600 ">
            Каталог
          </a>
        </li>
        <li>
          <a className=" hover:underline underline-offset-8 decoration-amber-600 ">
            Доставка
          </a>
        </li>
        <li>
          <a className=" hover:underline underline-offset-8 decoration-amber-600 ">
            Акции
          </a>
        </li>
        <li>
          <a className="  hover:underline underline-offset-8 decoration-amber-600 ">
            О нас
          </a>
        </li>
        <li>
          <a className="  hover:underline underline-offset-8 decoration-amber-600 ">
            Контакты
          </a>
        </li>
      </ul>
      <div className="hidden md:flex items-center">
        <p className="font-bold text-lg mr-10 "> +7 (963) 012-14-69</p>
        <img
          src="../../public/busket.svg"
          alt="busket"
          className="p-2 bg-amber-600 rounded-full hover:bg-amber-700 transition-all"
        />
      </div>
      <RxHamburgerMenu
        className="xl:hidden block text-3xl cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <div
        className={`absolute xl:hidden top-28 left-0 w-full bg-[#F5920B] flex flex-col items-center gap-2 font-semibold text-lg transform transition-transform ${
          isMenuOpen ? "opasity-100" : "opacity-0"
        }`}
        style={{ transition: "transform 0.3s ease, opasity 0.3s ease" }}
      >
        <li className="list-none w-full text-center p-4 transition-all cursor-pointer hover:underline underline-offset-8 decoration-black">
          <a href="">Главная</a>
        </li>
        <li className="list-none w-full text-center p-4 transition-all cursor-pointer hover:underline underline-offset-8 decoration-black">
          <a href=""> Каталог</a>
        </li>
        <li className="list-none w-full text-center p-4 transition-all cursor-pointer hover:underline underline-offset-8 decoration-black">
          <a href=""> Доставка</a>
        </li>
        <li className="list-none w-full text-center p-4 transition-all cursor-pointer hover:underline underline-offset-8 decoration-black">
          <a href="">Акции</a>
        </li>
        <li className="list-none w-full text-center p-4 transition-all cursor-pointer hover:underline underline-offset-8 decoration-black">
          <a href=""> О нас</a>
        </li>
        <li className="list-none w-full text-center p-4 transition-all cursor-pointer hover:underline underline-offset-8 decoration-black">
          <a href=""> Контакты</a>
        </li>
      </div>
    </header>
  );
};

export default Header;
