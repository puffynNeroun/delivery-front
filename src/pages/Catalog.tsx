import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Catalog = () => {
  return (
    <section className="pt-10 lg:pt-28">
      <div className="container">
        <div className=" flex lg:flex-col justify-center lg:justify-start ">
          <h2 className="text-[#F5920B] font-bold lg:text-5xl text-2xl">
            КАТАЛОГ
          </h2>
        </div>
        <div className="flex xl:justify-between xl:items-end lg:justify-start">
          <ul className="flex mt-4 gap-6 flex-wrap justify-center lg:flex-nowrap ">
            <li>
              <a className="text-[#F5920B] text-sm border-[1px]  border-[#F5920B] w-28 h-10 flex justify-center items-center">
                Роллы
              </a>
            </li>
            <li>
              <a className="w-28 h-10 flex justify-center items-center text-[#F5920B] text-sm border-[1px]  border-[#F5920B]">
                Пицца
              </a>
            </li>
            <li>
              <a className="text-[#F5920B] text-sm border-[1px] w-28 h-10 flex justify-center items-center border-[#F5920B]">
                Сеты
              </a>
            </li>
            <li>
              <a className="text-[#F5920B] text-sm border-[1px] w-28 h-10 flex justify-center items-center border-[#F5920B]">
                Суши
              </a>
            </li>
            <li>
              <a className="text-[#F5920B] text-sm border-[1px] w-28 h-10 flex justify-center items-center border-[#F5920B]">
                Десерты
              </a>
            </li>
            <li>
              <a className="text-[#F5920B] text-sm border-[1px] w-28 h-10 flex justify-center items-center border-[#F5920B]">
                Маки
              </a>
            </li>
            <li>
              <a className="text-[#F5920B]  text-sm border-[1px] w-28 h-10 flex justify-center items-center border-[#F5920B]">
                Напитки
              </a>
            </li>
          </ul>
        </div>

        <div className="grid lg:grid-cols-4 lg:gap-9 lg:py-9 md:grid-cols-3 gap-4 py-4 grid-cols-1 sm:grid-cols-2">
          <CartItem />
          <div className="hidden sm:block">
            <CartItem />
          </div>

          <div className="hidden md:block">
            <CartItem />
          </div>

          <div className="hidden lg:block">
            <CartItem />
          </div>
          <CartItem />
          <div className="hidden sm:block">
            <CartItem />
          </div>

          <div className="hidden md:block">
            <CartItem />
          </div>

          <div className="hidden lg:block">
            <CartItem />
          </div>
          <CartItem />
          <div className="hidden sm:block">
            <CartItem />
          </div>

          <div className="hidden md:block">
            <CartItem />
          </div>

          <div className="hidden lg:block">
            <CartItem />
          </div>
        </div>
        <div className="text-center mt-3">
          <Link
            to="/catalog"
            className="  text-[#171717] font-bold text-xl bg-[#F5920B] lg:py-8 px-10 w-full py-4"
          >
            Перейти в каталог
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
