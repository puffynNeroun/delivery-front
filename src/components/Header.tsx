const Header = () => {
  return (
    <header className="text-[#E9E9E9] container mt-[44px] h-[60px] flex justify-between items-center">
      <div>
        <a className="flex">
          <img
            src="../../public/logo2.svg"
            alt=""
            className="inline-block w-[227px] h-[61px]"
          />
        </a>
      </div>

      <nav>
        <ul className="flex  space-x-2.5 font-bold text-lg ">
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
      </nav>

      <div className="flex items-center">
        <p className="font-bold text-lg mr-10"> +7 (963) 012-14-69</p>
        <img
          src="../../public/busket.svg"
          alt="busket"
          className="p-2 bg-amber-600 rounded-full hover:bg-amber-700 transition-all"
        />
      </div>
    </header>
  );
};

export default Header;
