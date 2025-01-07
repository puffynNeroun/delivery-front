import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-[#E9E9E9] container mt-[44px] h-[60px] flex justify-between items-center">
      <div>
        <Link to="/" className="flex">
          <img
            src="../../public/logo.svg"
            alt=""
            className="inline-block w-[64px] h-[61px]"
          />
          <div>
            <p className="text-base relative">Пермь</p>
            <p className="text-[32px] absolute top-[54px]">Sushiritto</p>
          </div>
        </Link>
      </div>

      <nav>
        <ul className="flex  space-x-2.5 font-bold text-lg ">
          <li>
            <Link
              to="/"
              className=" hover:underline underline-offset-8 decoration-amber-600 "
            >
              Главная
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className=" hover:underline underline-offset-8 decoration-amber-600 "
            >
              Каталог
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className=" hover:underline underline-offset-8 decoration-amber-600 "
            >
              Доставка
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className=" hover:underline underline-offset-8 decoration-amber-600 "
            >
              Акции
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="  hover:underline underline-offset-8 decoration-amber-600 "
            >
              О нас
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="  hover:underline underline-offset-8 decoration-amber-600 "
            >
              Контакты
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center">
        <p className="font-bold text-lg mr-10"> +7 (963) 012-14-69</p>
        <img
          src="../../public/busket.svg"
          alt="busket"
          className="p-2 bg-amber-600 rounded-full hover:bg-amber-700 transition-all"
        />
      </div>
    </div>
  );
};

export default Header;
