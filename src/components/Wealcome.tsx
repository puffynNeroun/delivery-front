import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Wealcome = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className="sm:pt-5 lg:pt-16" ref={ref}>
            <div className="container grid lg:grid-cols-2">
                <motion.div
                    className="flex flex-col"
                    initial={{ opacity: 0, x: -100 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1 }}
                >
                    <div className="w-auto xl:mt-56 flex mt-5 lg:flex-col justify-center">
                        <h1 className="font-bold text-xl sm:text-3xl lg:text-5xl text-[#E9E9E9]">
                            Добро пожаловать
                        </h1>
                        <p className="text-[#F5920B] text-xl sm:text-3xl font-bold lg:text-5xl pl-2 lg:pt-4 lg:pl-0">
                            в Sushiritto!
                        </p>
                    </div>
                    <div className="max-w-[672px] mt-4 text-center lg:text-left">
                        <p className="text-[#ADADAD] font-bold text-lg">
                            Вы всегда можете заказать у нас супер вкусные
                            <span className="text-[#F5920B]"> суши</span>,
                            <span className="text-[#F5920B]"> роллы</span> и
                            <span className="text-[#F5920B]"> пиццу</span>
                        </p>
                        <span className="text-[#ADADAD] font-bold text-xs sm:text-lg mt-4 inline-block">
              Мы используем самые свежие продукты, каждая порция готовится
              непосредственно перед самой подачей. Мы любим свою работу и рады
              для вас стараться
            </span>
                    </div>
                    <a className="lg:w-72 flex justify-center text-[#171717] font-bold text-xl bg-[#F5920B] lg:py-8 py-4 mt-10">
                        Сделать заказ
                    </a>
                </motion.div>

                <motion.div
                    className="ml-auto hidden lg:block"
                    initial={{ opacity: 0, x: 100 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1 }}
                >
                    <img src="../../public/wealcome.jpg" alt="Welcome" />
                </motion.div>
            </div>
        </section>
    );
};

export default Wealcome;
