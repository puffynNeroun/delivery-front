const Contact = () => {
  return (
    <section className=" pt-8 lg:pt-12">
      <div className="grid lg:grid-cols-2 container">
        <div className="flex flex-col">
          <h2 className="text-[#F5920B] font-bold text-xl sm:text-3xl lg:text-5xl ">
            КОНТАКТИ
          </h2>
          <div className="flex justify-between text-center items-center lg:block lg:text-start">
            <div className="flex flex-col">
              <p className="text-[#E9E9E9] font-bold lg:text-xl  inline-block mt-3 text-sm md:text-base">
                ТEЛЕФОН:
              </p>
              <span className="text-[#ADADAD] font-bold  lg:text-lg inline-block text-xs md:text-sm">
                +7 (900) 00-00-00
              </span>
            </div>
            <div className="flex flex-col">
              <p className="text-[#E9E9E9] font-bold lg:text-xl  inline-block mt-3 text-sm md:text-base">
                АДРЕС:
              </p>
              <span className="text-[#ADADAD] font-bold lg:text-lg inline-block text-xs md:text-sm">
                ул. Ногорная д. 7
              </span>
            </div>
            <div className="flex flex-col">
              <p className="text-[#E9E9E9] font-bold lg:text-xl  inline-block mt-3 text-sm md:text-base">
                ВРЕМЯ РОБОТИ:
              </p>
              <span className="text-[#ADADAD] font-bold lg:text-lg inline-block md:text-sm">
                Ежедневно:
              </span>
              <span className="text-[#ADADAD] font-bold lg:text-lg inline-block text-xs md:text-sm">
                10:00 - 23:00
              </span>
            </div>
          </div>

          <button className="lg:w-72 text-[#171717] font-bold text-xl bg-[#F5920B] py-8 mt-5 lg:mt-auto w-full">
            Перейти в каталог
          </button>
        </div>

        <div className="hidden lg:flex">
          <img src="../../public/map.jpeg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
