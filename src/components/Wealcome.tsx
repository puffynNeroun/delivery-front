import { Link } from "react-router-dom";

const Wealcome = () => {
  return (
    <section>
      <div className="container mt-[36px] h-[898px] flex">
        <div className="mt-[224px]">
          <div className="w-[499px]">
            <p className="font-bold text-5xl text-[#E9E9E9]">
              Добро пожаловать
            </p>
            <p className="text-[#F5920B] font-bold text-5xl">в Sushiritto!</p>
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
            <button className="text-[#171717] font-bold text-[20px] bg-[#F5920B] py-[30px] px-[71px] mt-[44px]">
              Сделать заказ
            </button>
          </div>
          <div className="mt-[197px]">
            <Link
              to="/"
              className="text-[#F5920B] font-bold text-[20px] border-[1px] py-[55px] px-[36px] border-[#F5920B]"
            >
              Суши
            </Link>
            <Link
              to="/"
              className="text-[#F5920B] font-bold text-[20px] border-[1px] py-[55px] px-[36px] border-[#F5920B]"
            >
              Пицца
            </Link>
            <Link
              to="/"
              className="text-[#F5920B] font-bold text-[20px] border-[1px] py-[55px] px-[36px] border-[#F5920B]"
            >
              WOK
            </Link>
          </div>
        </div>

        <img
          src="../../public/wealcome.jpg"
          alt=""
          className="w-[637px] ml-[227px]"
        />
      </div>
    </section>
  );
};

export default Wealcome;
