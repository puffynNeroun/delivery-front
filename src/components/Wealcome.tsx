const Wealcome = () => {
    return (
        <section className="sm:pt-5 lg:pt-16 ">
            <div className="container  grid lg:grid-cols-2 ">
                <div className="flex flex-col">
                    <div className="w-auto xl:mt-56 flex mt-5 lg:flex-col justify-center">
                        <h1 className="font-bold text-xl sm:text-3xl lg:text-5xl text-[#E9E9E9]">
                            Добро пожаловать
                        </h1>
                        <p className="text-[#F5920B] text-xl sm:text-3xl font-bold lg:text-5xl pl-2 lg:pt-4 lg:pl-0">
                            в Sushiritto!
                        </p>
                    </div>
                    <div className="max-w-[672px] mt-4 mx-auto text-center lg:text-left">
                        <p className="text-[#ADADAD] font-bold text-lg">
                            Вы всегда можете заказать у нас супер вкусные
                            <span className="text-[#F5920B]"> суши</span>,
                            <span className="text-[#F5920B]"> роллы</span> и
                            <span className="text-[#F5920B]"> пиццу</span>
                        </p>
                        <span className="text-[#ADADAD] font-bold text-xs sm:text-lg mt-4 inline-block">
    Мы используем самые свежие продукты, каждая порция готовится
    непосредственно перед самой подачей. Мы любим свою работу и рады
    для вас стараться
  </span>
                    </div>


                    <a className="lg:w-72 flex justify-center text-[#171717] font-bold text-xl bg-[#F5920B] lg:py-8 py-4 mt-10 ">
                        Сделать заказ
                    </a>

                    <ul className="lg:flex mt-auto hidden ">
                        <li>
                            <a className="inline-block text-[#F5920B] font-bold text-xl border-[1px] py-14 px-9 border-[#F5920B]">
                                Суши
                            </a>
                        </li>
                        <li>
                            <a className="inline-block text-[#F5920B] font-bold text-xl border-[1px] py-14 px-9 border-[#F5920B]">
                                Пицца
                            </a>
                        </li>
                        <li>
                            <a className="inline-block text-[#F5920B] font-bold text-xl border-[1px] py-14 px-9 border-[#F5920B]">
                                WOK
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="ml-auto hidden lg:block">
                    <img src="../../public/wealcome.jpg" alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Wealcome;
