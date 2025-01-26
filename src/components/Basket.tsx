const Basket = () => {
  return (
    <section className="pt-10 lg:pt-24">
      <div className="container ">
        <div className=" flex  ">
          <h2 className="text-[#E9E9E9] font-bold lg:text-5xl pr-2 text-2xl">
            Моя
          </h2>
          <p className="text-[#F5920B] font-bold lg:text-5xl text-2xl">
            корзина
          </p>
        </div>
        <button className=" mt-11 text-[#E9E9E9] font-bold text-xl bg-[#F5920B] lg:py-8 px-10  py-4">
          Вернуться назад
        </button>
        <div className="lg:max-w-4xl mx-auto">
          <div className=" pt-20  gap-14 flex justify-center items-center">
            <div>
              <img src="../../public/inform.jpeg" alt="" />
            </div>
            <div className="flex text-xs gap-2 sm:gap-8 lg:gap-16 text-[#E9E9E9] font-bold lg:text-2xl sm:text-xl">
              <p>Калифорния классика.</p>
              <p>Роллы</p>
              <span>8шт</span>
              <p>350руб.</p>
            </div>
          </div>
          <div className="text-sm flex justify-between items-center py-6 lg:py-12 bg-[#F5920B] px-14 text-[#171717] font-bold lg:text-2xl">
            <p>Итог</p>
            <p>350 руб</p>
          </div>
          <button className="mx-auto block text-[#E9E9E9] font-bold text-xl bg-[#F5920B] lg:py-8 px-10  py-4 mt-8 lg:mt-16">
            Оформить заказ
          </button>
        </div>
      </div>
    </section>
  );
};

export default Basket;
