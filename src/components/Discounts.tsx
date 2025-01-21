const Discounts = () => {
  return (
    <section className="pt-10 lg:pt-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 ">
          <div className="flex flex-col">
            <p className=" text-[#ADADAD] sm:text-lg text-sm">
              Lorem 20% dolor sit amet, consectetur adips.
            </p>
            <div className="flex justify-between items-center lg:block">
              <div>
                <h2 className="text-[#F5920B] font-bold text-xl sm:text-3xl lg:text-5xl mt-4 ">
                  Филадельфия
                </h2>
                <span className="text-[#E9E9E9] font-bold lg:text-5xl inline-block text-xl sm:text-3xl ">
                  лайт кунсей
                </span>
              </div>

              <div className="flex pt-6 xl:pt-11 items-center ">
                <p className="text-[#E9E9E9] font-bold text-xl sm:text-3xl lg:text-5xl mr-2 ">
                  600 р
                </p>
                <p className="text-[#B5B4B4] font-bold lg:text-3xl line-through sm:text-xl text-lg">
                  1000 р
                </p>
              </div>
            </div>

            <button className=" lg:w-72 text-[#171717] font-bold text-xl bg-[#F5920B] py-8 mt-5 lg:mt-auto w-full">
              Перейти в каталог
            </button>
          </div>

          <div className="lg:flex justify-center hidden">
            <img src="../../public/discount.jpeg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounts;
