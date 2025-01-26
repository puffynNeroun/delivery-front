const Discounts = () => {
  return (
    <section className="mt-10 lg:mt-28 bg-[#F5920B]">
      <div className="container lg:pt-24 lg:pb-16 pt-12 pb-8">
        <div className="grid lg:grid-cols-2   gap-15 grid-cols-1">
          <div className="lg:flex justify-center ">
            <img src="../../public/exempl2.jpeg" alt="" />
          </div>
          <div className="flex flex-col lg:items-end items-center">
            <p className=" text-[#FFFFFF] xl:text-lg text-xs">
              Lorem 20% dolor sit amet, consectetur adips.
            </p>
            <h2 className=" text-lg sm:text-2xl md:text-3xl xl:text-5xl mt-4 text-[#E9E9E9] font-bold">
              ФИЛАДЕЛЬФИЯ
            </h2>
            <p className="md:text-3xl  text-lg sm:text-2xl xl:text-5xl mt-4 text-[#E9E9E9] font-bold">
              ЛАЙТ КУНСЕЙ
            </p>

            <div className="flex pt-6 xl:pt-11 items-center ">
              <p className="text-[#B5B4B4] font-bold md:text-xl xl:text-3xl line-through sm:text-xl text-lg">
                1000 р
              </p>
              <p className="text-[#E9E9E9] font-bold text-xl sm:text-3xl xl:text-5xl ml-2 md:text-2xl">
                600 р
              </p>
            </div>
            <span className=" text-[#FFFFFF] xl:text-lg text-xs mt-4">
              Ролл с чукой-ореховым соусом и кунжутом
            </span>
            <button className=" lg:w-72 text-[#E1E6E9] font-bold text-xl bg-[#171717] lg:py-8 mt-5 lg:mt-auto w-full py-4">
              Перейти в каталог
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounts;
