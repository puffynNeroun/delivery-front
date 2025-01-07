import { Link } from "react-router-dom";

const Wealcome = () => {
  return (
    <section>
      <div className="container mt-[36px] h-[898px] grid grid-cols-2">
        <div className="flex flex-col">
          <div className="w-[499px] mt-[224px]">
            <h1 className="font-bold text-5xl text-[#E9E9E9]">
              Добро пожаловать
            </h1>
            <h2 className="text-[#F5920B] font-bold text-5xl">в Sushiritto!</h2>
          </div>
          <div className="w-[672px]">
            <p className="text-[#ADADAD] font-bold text-lg">
              Вы всегда можете заказать у нас супер вкусные{" "}
              <span className="text-[#F5920B]">суши</span>,
              <span className="text-[#F5920B]"> роллы</span> и{" "}
              <span className="text-[#F5920B]">пиццу</span>
            </p>
            <br />
            <p className="text-[#ADADAD] font-bold text-lg">
              Мы используем самые свежие продукты, каждая порция готовится
              непосредственно перед самой подачей. Мы любим свою работу и рады
              для вас стараться
            </p>
          </div>
          <button className="w-[307px] text-[#171717] font-bold text-[20px] bg-[#F5920B] py-[31px] px-[76px] mt-[44px]">
            Сделать заказ
          </button>
          <ul className="flex mt-auto">
            <li>
              <Link
                to="/"
                className="inline-block text-[#F5920B] font-bold text-[20px] border-[1px] py-[55px] px-[36px] border-[#F5920B]"
              >
                Суши
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="inline-block text-[#F5920B] font-bold text-[20px] border-[1px] py-[55px] px-[36px] border-[#F5920B]"
              >
                Пицца
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="inline-block text-[#F5920B] font-bold text-[20px] border-[1px] py-[55px] px-[36px] border-[#F5920B]"
              >
                WOK
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-[637px] ml-auto">
          <img src="../../public/wealcome.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Wealcome;
