const Contact = () => {
  return (
    <section className="container mt-12">
      <div className="grid grid-cols-2 ">
        <div className="flex flex-col">
          <h2 className="text-[#F5920B] font-bold text-5xl md:text-3xl mt-4">
            КОНТАКТИ
          </h2>
          <p className="text-[#E9E9E9] font-bold text-xl md:text-lg inline-block mt-3">
            ТEЛЕФОН:
          </p>
          <span className="text-[#ADADAD] font-bold md:text-sm text-lg inline-block">
            +7 (900) 00-00-00
          </span>
          <p className="text-[#E9E9E9] font-bold text-xl md:text-lg inline-block mt-3">
            АДРЕС:
          </p>
          <span className="text-[#ADADAD] font-bold text-lg inline-block md:text-sm">
            ул. Ногорная д. 7
          </span>
          <p className="text-[#E9E9E9] font-bold text-xl md:text-lg inline-block mt-3">
            ВРЕМЯ РОБОТИ:
          </p>
          <span className="text-[#ADADAD] font-bold text-lg inline-block md:text-sm">
            Ежедневно:
          </span>
          <span className="text-[#ADADAD] font-bold text-lg inline-block md:text-sm">
            10:00 - 23:00
          </span>

          <button className=" text-[#171717] font-bold text-[20px] bg-[#F5920B] py-[31px] px-[47px] mt-auto w-[307px] ">
            Перейти в каталог
          </button>
        </div>

        <div className="flex justify-center sm:hidden">
          <img src="../../public/map.jpeg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
