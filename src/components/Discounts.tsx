import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Discounts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
      <section className="mt-10 lg:mt-28 bg-[#F5920B]" ref={ref}>
        <div className="container lg:pt-24 lg:pb-16 pt-12 pb-8">
          <div className="grid lg:grid-cols-2 gap-15 grid-cols-1">
            <motion.div
                className="lg:flex justify-center"
                initial={{ opacity: 0, x: -100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1 }}
            >
              <img src="../../public/exempl2.jpeg" alt="Discount" />
            </motion.div>

            <motion.div
                className="flex flex-col items-end pt-5"
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1 }}
            >
              <p className="text-[#FFFFFF] xl:text-lg text-xs">
                Lorem 20% dolor sit amet, consectetur adips.
              </p>
              <h2 className="text-lg sm:text-2xl md:text-3xl xl:text-5xl mt-4 text-[#E9E9E9] font-bold">
                ФИЛАДЕЛЬФИЯ
              </h2>
              <p className="md:text-3xl text-lg sm:text-2xl xl:text-5xl mt-4 text-[#E9E9E9] font-bold">
                ЛАЙТ КУНСЕЙ
              </p>

              <div className="flex pt-6 xl:pt-11 items-center">
                <p className="text-[#B5B4B4] font-bold md:text-xl xl:text-3xl line-through sm:text-xl text-lg">
                  1000 р
                </p>
                <p className="text-[#E9E9E9] font-bold text-xl sm:text-3xl xl:text-5xl ml-2 md:text-2xl">
                  600 р
                </p>
              </div>
              <span className="text-[#FFFFFF] xl:text-lg text-xs mt-4">
              Ролл с чукой-ореховым соусом и кунжутом
            </span>
              <motion.button
                  className="lg:w-72 text-[#E1E6E9] font-bold text-xl bg-[#171717] lg:py-8 mt-5 lg:mt-auto w-full py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
              >
                Перейти в каталог
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default Discounts;
