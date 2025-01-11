// import { useRef } from "react";
const Popular = () => {
  // const swiperRef = useRef(null);
  return (
    <section className="container">
      <div className="mt-24">
        <h2 className="text-[#F5920B] font-bold text-5xl">ПОПУЛЯРНЫЕ</h2>
        <p className="text-[#E9E9E9] font-bold text-5xl">БЛЮДА</p>
      </div>
      <div className="flex justify-between items-end">
        <ul className="flex mt-4 gap-6">
          <li>
            <a className="inline-block text-[#F5920B] text-[14px] border-[1px] py-[12px] px-[34px] border-[#F5920B]">
              Роллы
            </a>
          </li>
          <li>
            <a className="inline-block text-[#F5920B]  text-[14px] border-[1px] py-[12px] px-[34px] border-[#F5920B]">
              Пицца
            </a>
          </li>
          <li>
            <a className="inline-block text-[#F5920B] text-[14px] border-[1px] py-[12px] px-[34px] border-[#F5920B]">
              Сеты
            </a>
          </li>
          <li>
            <a className="inline-block text-[#F5920B]  text-[14px] border-[1px] py-[12px] px-[34px] border-[#F5920B]">
              Суши
            </a>
          </li>
          <li>
            <a className="inline-block text-[#F5920B]  text-[14px] border-[1px] py-[12px] px-[34px] border-[#F5920B]">
              Десерты
            </a>
          </li>
          <li>
            <a className="inline-block text-[#F5920B]  text-[14px] border-[1px] py-[12px] px-[34px] border-[#F5920B]">
              Маки
            </a>
          </li>
          <li>
            <a className="inline-block text-[#F5920B]  text-[14px] border-[1px] py-[12px] px-[34px] border-[#F5920B]">
              Напитки
            </a>
          </li>
        </ul>
        <div className="flex gap-8">
          <div
            // onClick={() => swiperRef.current?.slidePrev()}
            className="w-20 h-20 bg-amber-600 rounded-full hover:bg-amber-700 transition-all items-center justify-center flex"
          >
            <img src="../../public/left.svg" alt="busket" />
          </div>
          <div className=" w-20 h-20 items-center justify-center flex bg-amber-600 rounded-full hover:bg-amber-700 transition-all">
            <img src="../../public/right.svg" alt="busket" />
          </div>
        </div>
      </div>

      <div className="mt-[44px]">{/* <Swiper /> */}</div>
      <div className="text-center">
        <button className=" text-[#171717] font-bold text-[20px] bg-[#F5920B] py-[31px] px-[47px] mt-[44px]  ">
          Перейти в каталог
        </button>
      </div>
    </section>
  );
};

export default Popular;
