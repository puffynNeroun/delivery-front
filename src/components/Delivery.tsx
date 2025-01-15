import { SlArrowDown } from "react-icons/sl";

const Delivery = () => {
  return (
    <section className="lg:pt-24 pt-10">
      <div className="grid xl:grid-cols-3 lg:grid-cols-2   container  items-center">
        <div className="">
          <h2 className="text-[#F5920B] font-bold text-xl sm:text-3xl lg:text-5xl ">
            ДОСТАВКА
          </h2>
          <div className="bg-[#E17D18] mt-3 lg:mt-12 p-6 sm:w-full">
            <h3 className="text-[#171717] font-extrabold md:text-xl ">
              График работы <br />
              ежедневно:
            </h3>
            <span className=" md:text-lg font-normal text-[#242424] mt-[9px] inline-block">
              с 10:00 до 23:00
            </span>
            <div className="text-black mt-2">
              <p className=" flex font-bold text-sm items-center">
                <SlArrowDown className="mr-1" />
                Самовызов, по адресу:
              </p>
              <span className=" flex font-bold text-sm ">
                д. Кондратово,
                <br /> ул. Камская 1Б
              </span>
              <p className=" flex font-bold text-sm mt-[8px] items-center">
                <SlArrowDown className="mr-1" />
                Доставка:
              </p>
              <span className=" font-bold text-sm inline-block">
                1. По Кондратово бесплатно доставляем от 500 руб.
              </span>
              <br />
              <span className=" font-bold text-sm inline-block">
                2. В город и иные отдаленные пункты, уточняйте у оператора.
              </span>
            </div>
          </div>
        </div>

        <div
          className="lg:w-96 w-80 h-80 hidden lg:block lg:justify-self-end
        "
        >
          <img src="../../public/pizza.png" alt="" className=" " />
        </div>

        <div className="lg:justify-self-end hidden xl:block">
          <p className="text-[#E17D18] font-bold 2xl:text-xl pt-16 text-lg">
            СДЕЛАЙТЕ ЗАКАЗ
          </p>
          <span className="inline-block text-[#ADADAD] 2xl:text-lg text-sm">
            Выберите понравившийся товар <br />и оформите заказ за несколько
            простых шагов.
          </span>
          <p className="text-[#E9E9E9] font-bold 2xl:text-xl pt-9 pl-6 text-lg">
            ОЖИДАНИЕ ЗВОНКА
          </p>
          <span className="inline-block text-[#ADADAD] 2xl:text-lg ml-6 text-sm">
            После оформления заказа,
            <br /> с Вами свяжется оператор
          </span>
          <p className="text-[#E9E9E9] font-bold 2xl:text-xl pt-9 text-lg ">
            ЗАКАЗ УЖЕ В ПУТИ
          </p>
          <span className="inline-block text-[#ADADAD] 2xl:text-lg text-sm">
            Когда мы утвердили заказ, мы <br />
            готовим и отправляем Вам заказ
          </span>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
