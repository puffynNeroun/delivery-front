const Wealcome = () => {
  return (
    <section>
      <div className="container pt-[36px] max-h-[898px] grid grid-cols-2 ">
        <div className="flex flex-col">
          <div className="w-[499px] mt-[224px] md:mt-2 sm:flex sm:gap-1 xs:flex-col">
            <h1 className="font-bold text-5xl text-[#E9E9E9] md:text-3xl">
              Добро пожаловать
            </h1>
            <h2 className="text-[#F5920B] font-bold text-5xl md:text-3xl">
              в Sushiritto!
            </h2>
          </div>
          <div className="max-w-[672px] mt-2 sm:w-screen">
            <p className="text-[#ADADAD] font-bold text-lg md:text-sm">
              Вы всегда можете заказать у нас супер вкусные
              <span className="text-[#F5920B]"> суши</span>,
              <span className="text-[#F5920B]"> роллы</span> и
              <span className="text-[#F5920B]"> пиццу</span>
            </p>
            <span className="text-[#ADADAD] font-bold text-lg mt-2 inline-block md:text-sm">
              Мы используем самые свежие продукты, каждая порция готовится
              непосредственно перед самой подачей. Мы любим свою работу и рады
              для вас стараться
            </span>
          </div>

          <a className="w-[307px] flex justify-center text-[#171717] font-bold text-[20px] bg-[#F5920B] py-[31px] px-[76px] mt-[44px] ">
            Сделать заказ
          </a>

          <ul className="flex mt-auto sm:mt-3">
            <li>
              <a className="inline-block text-[#F5920B] font-bold text-[20px] border-[1px] py-[55px] px-[36px] border-[#F5920B]">
                Суши
              </a>
            </li>
            <li>
              <a className="inline-block text-[#F5920B] font-bold text-[20px] border-[1px] py-[55px] px-[36px] border-[#F5920B]">
                Пицца
              </a>
            </li>
            <li>
              <a className="inline-block text-[#F5920B] font-bold text-[20px] border-[1px] py-[55px] px-[36px] border-[#F5920B]">
                WOK
              </a>
            </li>
          </ul>
        </div>

        <div className="ml-auto sm:hidden">
          <img src="../../public/wealcome.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Wealcome;
