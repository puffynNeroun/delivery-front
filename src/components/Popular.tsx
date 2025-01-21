// import { useRef } from "react";
const Popular = () => {
  // const swiperRef = useRef(null);
  return (
    <section className="pt-10 lg:pt-24">
      <div className="container">
        <div className=" flex lg:flex-col justify-center lg:justify-start ">
          <h2 className="text-[#F5920B] font-bold lg:text-5xl text-2xl">
            ПОПУЛЯРНЫЕ
          </h2>
          <p className="text-[#E9E9E9] font-bold lg:text-5xl pl-2 lg:pl-0 text-2xl">
            БЛЮДА
          </p>
        </div>
        <div className="flex xl:justify-between xl:items-end lg:justify-start">
          <ul className="flex mt-4 gap-6 flex-wrap justify-center lg:flex-nowrap ">
            <li>
              <a className="inline-block text-[#F5920B] text-sm border-[1px] py-3 px-8 border-[#F5920B]">
                Роллы
              </a>
            </li>
            <li>
              <a className="inline-block text-[#F5920B] text-sm border-[1px] py-3 px-8 border-[#F5920B]">
                Пицца
              </a>
            </li>
            <li>
              <a className="inline-block text-[#F5920B] text-sm border-[1px] py-3 px-8 border-[#F5920B]">
                Сеты
              </a>
            </li>
            <li>
              <a className="inline-block text-[#F5920B] text-sm border-[1px] py-3 px-8 border-[#F5920B]">
                Суши
              </a>
            </li>
            <li>
              <a className="inline-block text-[#F5920B] text-sm border-[1px] py-3 px-8 border-[#F5920B]">
                Десерты
              </a>
            </li>
            <li>
              <a className="inline-block text-[#F5920B] text-sm border-[1px] py-3 px-8 border-[#F5920B]">
                Маки
              </a>
            </li>
            <li>
              <a className="inline-block text-[#F5920B]  text-[14px] border-[1px] py-[12px] px-[34px] border-[#F5920B]">
                Напитки
              </a>
            </li>
          </ul>
          <div className="xl:flex gap-8 hidden">
            <div
              // onClick={() => swiperRef.current?.slidePrev()}
              className="w-20 h-20 bg-amber-600 rounded-full hover:bg-amber-700 transition-all items-center justify-center flex"
            >
              <img src="../../public/left.svg" alt="" />
            </div>
            <div className=" w-20 h-20 items-center justify-center flex bg-amber-600 rounded-full hover:bg-amber-700 transition-all">
              <img src="../../public/right.svg" alt="" />
            </div>
          </div>
        </div>

        {/* <div className="mt-[44px]"><Swiper /></div> */}
        <div className="text-center">
          <button className=" lg:w-72 text-[#171717] font-bold text-xl bg-[#F5920B] py-8 mt-10 w-full">
            Перейти в каталог
          </button>
        </div>
      </div>
    </section>
  );
};

export default Popular;
