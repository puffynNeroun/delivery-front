import { SlArrowDown } from "react-icons/sl";

const Delivery = () => {
  return (
    <section className="container mt-24 h-[528px]">
      <div className="grid grid-cols-3">
        <div>
          <h2 className="text-[#F5920B] font-bold text-5xl">ДОСТАВКА</h2>
          <div className="bg-[#E17D18] mt-[65px] w-[426px] p-6">
            <h3 className="text-[#171717] font-extrabold text-xl w-[170px] ">
              График работы ежедневно:
            </h3>
            <span className=" text-lg font-normal text-[#242424] mt-[9px] inline-block">
              с 10:00 до 23:00
            </span>
            <div className="text-black mt-[10px]">
              <p className=" flex font-bold text-sm w-[190px] items-center">
                <SlArrowDown className="mr-1" />
                Самовызов, по адресу:
              </p>
              <span className=" flex font-bold text-sm w-[190px]">
                д. Кондратово, ул. Камская 1Б
              </span>
              <p className=" flex font-bold text-sm w-[190px] mt-[8px] items-center">
                <SlArrowDown className="mr-1" />
                Доставка:
              </p>
              <span className=" font-bold text-sm inline-block">
                1. По Кондратово бесплатно доставляем от 500 руб.
              </span>
              <span className=" font-bold text-sm inline-block">
                2. В город и иные отдаленные пункты, уточняйте у оператора.
              </span>
            </div>
          </div>
        </div>

        <div className="ml-16 w-[474px]">
          <img src="../../public/pizza.png" alt="" className=" h-[470px]" />
        </div>

        <div className="ml-[110px]">
          <p className="text-[#E17D18] font-bold text-xl mt-[77px]">
            Сделайте заказ
          </p>
          <span className="inline-block text-[#ADADAD] text-lg w-[428]">
            Выберите понравившийся товар <br />и оформите заказ за несколько
            простых шагов.
          </span>
          <p className="text-[#E9E9E9] font-bold text-xl mt-[40px] ml-6">
            Ожидание звонка
          </p>
          <span className="inline-block text-[#ADADAD] text-lg ml-6">
            После оформления заказа,
            <br /> с Вами свяжется оператор
          </span>
          <p className="text-[#E9E9E9] font-bold text-xl mt-[35px]">
            заказ уже в пути
          </p>
          <span className="inline-block text-[#ADADAD] text-lg">
            Когда мы утвердили заказ, мы <br />
            готовим и отправляем Вам заказ
          </span>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
