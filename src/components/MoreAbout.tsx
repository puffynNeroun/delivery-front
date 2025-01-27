const MoreAbout = () => {
  return (
    <div className="container max-w-7xl xl:p-12 bg-[#0C0C0C] relative p-8">
      <div className="flex-row sm:flex gap-6 xl:gap-12 ">
        <div className="flex-grow">
          <img src="../../public/inform.jpeg" alt="" />
        </div>
        <div className="flex flex-col ">
          <h2 className="text-[#E9E9E9] font-bold xl:text-4xl mb-6 lg:mb-11 lg:text-2xl">
            Калифорния <br />
            классика.
          </h2>
          <p className="text-[#E9E9E9] font-bold text-2xl xl:text-4xl xl:mb-6 mb-3">
            Цена:
          </p>
          <p className="text-[#E9E9E9] font-bold text-2xl xl:text-4xl xl:mb-6 mb-3">
            350 руб.
          </p>
          <p className="text-[#BEBEBE] text-sm xl:text-lg">
            lorem ibpus cdsvvc sdcsdd ascdcs dcs and asacds
          </p>

          <div className="flex flex-col justify-center items-center mt-auto">
            <img
              src="../../public/busket.svg"
              alt="busket"
              className="lg:p-8 bg-amber-600 rounded-full hover:bg-amber-700 transition-all cursor-pointer lg:w-24 lg:h-24 mb-4 w-14 h-14 p-4"
            />
            <button className="text-[#E9E9E9] font-bold text-xs md:text-xs xl:text-xl border border-[#F5920B] lg:py-8 px-10 w-full py-4">
              Оформить заказ
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MoreAbout;
