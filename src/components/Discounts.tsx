const Discounts = () => {
  return (
    <section className="container mt-24 h-[575px]">
      <div className="grid grid-cols-2 ">
        <div className="flex flex-col">
          <p className=" text-[#ADADAD] text-[18px]">
            Lorem 20% dolor sit amet, consectetur adips.
          </p>
          <h2 className="text-[#F5920B] font-bold text-5xl mt-4">
            Филадельфия
          </h2>
          <span className="text-[#E9E9E9] font-bold text-5xl inline-block">
            лайт кунсей
          </span>

          <div className="flex mt-11 items-center">
            <p className="text-[#E9E9E9] font-bold text-5xl mr-2">600 р</p>
            <p className="text-[#B5B4B4] font-bold text-3xl line-through">
              1000 р
            </p>
          </div>
          <button className=" text-[#171717] font-bold text-[20px] bg-[#F5920B] py-[31px] px-[47px] mt-auto w-[307px] ">
            Перейти в каталог
          </button>
        </div>

        <div>
          <img src="../../public/discount.jpeg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Discounts;
