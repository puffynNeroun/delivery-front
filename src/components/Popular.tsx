
import {Link} from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CartItem from "./CartItem";

const Popular = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
      <section className="pt-10 lg:pt-28" ref={ref}>
        <div className="container">
          <motion.div
              className="flex lg:flex-col justify-center lg:justify-start"
              initial={{opacity: 0, y: 50}}
              animate={isInView ? {opacity: 1, y: 0} : {}}
              transition={{duration: 1}}
          >
            <h2 className="text-[#F5920B] font-bold lg:text-5xl text-2xl">
              ПОПУЛЯРНЫЕ
            </h2>
            <p className="text-[#E9E9E9] font-bold lg:text-5xl pl-2 lg:pl-0 text-2xl">
              БЛЮДА
            </p>
          </motion.div>

          <div className="flex xl:justify-between xl:items-end lg:justify-start">
            <ul className="flex mt-4 gap-6 flex-wrap justify-center lg:flex-nowrap ">
              <li>
                <a className="text-[#F5920B] text-sm border-[1px]  border-[#F5920B] w-28 h-10 flex justify-center items-center">
                  Роллы
                </a>
              </li>
              <li>
                <a className="w-28 h-10 flex justify-center items-center text-[#F5920B] text-sm border-[1px]  border-[#F5920B]">
                  Пицца
                </a>
              </li>
              <li>
                <a className="text-[#F5920B] text-sm border-[1px] w-28 h-10 flex justify-center items-center border-[#F5920B]">
                  Сеты
                </a>
              </li>
              <li>
                <a className="text-[#F5920B] text-sm border-[1px] w-28 h-10 flex justify-center items-center border-[#F5920B]">
                  Суши
                </a>
              </li>
              <li>
                <a className="text-[#F5920B] text-sm border-[1px] w-28 h-10 flex justify-center items-center border-[#F5920B]">
                  Десерты
                </a>
              </li>
              <li>
                <a className="text-[#F5920B] text-sm border-[1px] w-28 h-10 flex justify-center items-center border-[#F5920B]">
                  Маки
                </a>
              </li>
              <li>
                <a className="text-[#F5920B]  text-sm border-[1px] w-28 h-10 flex justify-center items-center border-[#F5920B]">
                  Напитки
                </a>
              </li>
            </ul>
            <div className="xl:flex gap-8 hidden">
              <div
                  // onClick={() => swiperRef.current?.slidePrev()}
                  className="w-20 h-20 bg-amber-600 rounded-full hover:bg-amber-700 transition-all items-center justify-center flex"
              >
                <img src="../../public/left.svg" alt=""/>
              </div>
              <div
                  className=" w-20 h-20 items-center justify-center flex bg-amber-600 rounded-full hover:bg-amber-700 transition-all">
                <img src="../../public/right.svg" alt=""/>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 lg:gap-9 lg:py-9 md:grid-cols-3 gap-4 py-4 grid-cols-1 sm:grid-cols-2">
            {[1, 2, 3, 4].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{opacity: 0, scale: 0.9}}
                    animate={isInView ? {opacity: 1, scale: 1} : {}}
                    transition={{delay: i * 0.2, duration: 1}}
                >
                  <CartItem/>
                </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
                to="/catalog"
                className="  text-[#171717] font-bold text-xl bg-[#F5920B] lg:py-8 px-10 w-full py-4"
            >
              Перейти в каталог
            </Link>
          </div>
        </div>
      </section>
  );
};

export default Popular;
