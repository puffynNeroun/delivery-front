import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPopularProducts } from "../services/product.ts";
import { Product } from "../types/Product.ts";
import CartItem from "./CartItem";

const Popular = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const { data: products, isLoading, isError } = useQuery<Product[]>({
        queryKey: ['popularProducts'],
        queryFn: getPopularProducts,
    });

    const [slide, setSlide] = useState(0);

    const itemsPerSlide = 4;
    const totalSlides = products ? Math.ceil(products.length / itemsPerSlide) : 0;

    const handlePrev = () => {
        setSlide(prev => (prev - 1 + totalSlides) % totalSlides);
    };

    const handleNext = () => {
        setSlide(prev => (prev + 1) % totalSlides);
    };

    const getSlideItems = () => {
        if (!products) return [];
        const start = slide * itemsPerSlide;
        return products.slice(start, start + itemsPerSlide);
    };

    return (
        <section className="pt-10 lg:pt-28" ref={ref}>
            <div className="container">
                <motion.div
                    className="flex lg:flex-col justify-center lg:justify-start"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-[#F5920B] font-bold lg:text-5xl text-2xl">
                        ПОПУЛЯРНЫЕ
                    </h2>
                    <p className="text-[#E9E9E9] font-bold lg:text-5xl pl-2 lg:pl-0 text-2xl">
                        БЛЮДА
                    </p>
                </motion.div>

                <div className="flex justify-end gap-3 items-center mt-6">
                    <button onClick={handlePrev} className="text-white bg-amber-600 hover:bg-amber-700 rounded-full w-12 h-12 flex items-center justify-center">⟵</button>
                    <button onClick={handleNext} className="text-white bg-amber-600 hover:bg-amber-700 rounded-full w-12 h-12 flex items-center justify-center">⟶</button>
                </div>

                <div className="grid lg:grid-cols-4 gap-4 py-4">
                    {isLoading && <p className="text-white">Загрузка...</p>}
                    {isError && <p className="text-red-500">Ошибка загрузки продуктов</p>}
                    {getSlideItems().map((product) => (
                        <CartItem key={product.id} product={product} />
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Link to="/catalog" className="text-[#171717] hover:bg-amber-600 font-bold text-xl bg-[#F5920B] py-4 px-10">
                        Перейти в каталог
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Popular;