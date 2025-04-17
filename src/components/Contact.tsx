import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MapComponent from "./MapComponent.tsx";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
      <section className="pt-8 lg:pt-28 overflow-hidden" ref={ref}>
        <div className="grid lg:grid-cols-2 container grid-cols-1">
          <motion.div
              className="flex flex-col order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }} // Уменьшил сдвиг
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
          >
            <h2 className="text-[#F5920B] font-bold text-xl sm:text-3xl lg:text-5xl text-center lg:text-start">
              КОНТАКТИ
            </h2>
            <div className="flex justify-between text-center items-center lg:block lg:text-start">
              <div className="flex flex-col">
                <p className="text-[#E9E9E9] font-bold lg:text-xl inline-block mt-3 text-sm md:text-base">
                  ТEЛЕФОН:
                </p>
                <span className="text-[#ADADAD] font-bold lg:text-lg inline-block text-xs md:text-sm">
                +7 (900) 00-00-00
              </span>
              </div>
              <div className="flex flex-col">
                <p className="text-[#E9E9E9] font-bold lg:text-xl inline-block mt-3 text-sm md:text-base">
                  АДРЕС:
                </p>
                <span className="text-[#ADADAD] font-bold lg:text-lg inline-block text-xs md:text-sm">
                ул. Ногорная д. 7
              </span>
              </div>
              <div className="flex flex-col">
                <p className="text-[#E9E9E9] font-bold lg:text-xl inline-block mt-3 text-sm md:text-base">
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

            <motion.button
                className="lg:w-72 text-[#171717] font-bold text-xl bg-[#F5920B] lg:py-8 mt-5 lg:mt-auto w-full py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
              Перейти в каталог
            </motion.button>
          </motion.div>

          <motion.div
              className="lg:flex order-1 lg:order-2 mb-6 lg:mb-0 max-w-full overflow-hidden"
              initial={{opacity: 0, scale: 0.8}}
              animate={isInView ? {opacity: 1, scale: 1} : {}}
              transition={{duration: 1}}
          >
            <div className="w-full h-[400px] lg:h-full">
              <MapComponent/>
            </div>
          </motion.div>
        </div>
      </section>
  );
};

export default Contact;
