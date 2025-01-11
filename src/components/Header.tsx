import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-[#E9E9E9] container mt-[44px] h-[60px] flex justify-between">
      <div className="flex">
        <Link to="/">
          <img
            src="../../public/logo.svg"
            alt=""
            className="w-[64px] h-[61px]"
          />
        </Link>
        <div>
          <p className="text-base relative">Пермь</p>
          <p className="text-[32px] absolute top-[54px]">Sushiritto</p>
        </div>
      </div>

      <div className="flex items-center space-x-2.5 font-bold text-lg ml-[204px]">
        <Link
          to="/"
          className="hover:underline underline-offset-8 decoration-amber-600 "
        >
          Главная
        </Link>
        <Link
          to="/"
          className="hover:underline underline-offset-8 decoration-amber-600 "
        >
          Каталог
        </Link>
        <Link
          to="/"
          className="hover:underline underline-offset-8 decoration-amber-600 "
        >
          Доставка
        </Link>
        <Link
          to="/"
          className="hover:underline underline-offset-8 decoration-amber-600 "
        >
          Акции
        </Link>
        <Link
          to="/"
          className="hover:underline underline-offset-8 decoration-amber-600 "
        >
          О нас
        </Link>
        <Link
          to="/"
          className="hover:underline underline-offset-8 decoration-amber-600 "
        >
          Контакты
        </Link>
      </div>

      <div className="flex items-center">
        <p className="font-bold text-lg mr-11"> +7 (963) 012-14-69</p>
        <img
          src="../../public/busket.svg"
          alt="busket"
          className="p-2.5 bg-amber-600 rounded-full hover:bg-amber-700 transition-all"
        />
      </div>
    </div>
  );
};

export default Header;
