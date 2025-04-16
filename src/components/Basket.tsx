// src/pages/BasketList.tsx
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectCartItems, removeItem } from "../store/slices/cartSlice";
import { products } from "../mock/products";
import {Product} from "../types/Product.ts"; // пока что фейковые товары

type CartItem = {
    productId: string;
    quantity: number;
};

type CartItemWithDetails = Product & { quantity: number };
const Basket = () => {
    const dispatch = useAppDispatch();
    const items = useAppSelector(selectCartItems);

    const cartItemsWithDetails:CartItemWithDetails[] = items.map((item: CartItem) => {
        const product = products.find((p) => p.id === item.productId);
        return {
            ...product,
            quantity: item.quantity,
        };
    });

    const totalPrice = cartItemsWithDetails.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const handleRemove = (id: string) => {
        dispatch(removeItem(id));
    };

    return (
        <section className="py-10 lg:pt-24 bg-[#0C0C0C]">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="text-center mb-12">
                    <h2 className="text-[#E9E9E9] font-extrabold text-3xl lg:text-6xl tracking-wide">
                        Моя <span className="text-[#F5920B]">корзина</span>
                    </h2>
                </div>

                <div className="flex justify-start mb-10">
                    <Link to={"/"}>
                        <button className="text-[#E9E9E9] font-medium text-base lg:text-lg bg-[#F5920B] hover:bg-[#e28307] transition-all rounded-full px-8 py-3 shadow-md">
                            ← Вернуться назад
                        </button>
                    </Link>
                </div>

                <div className="bg-[#171717] rounded-lg shadow-lg overflow-hidden lg:max-w-5xl mx-auto">
                    {cartItemsWithDetails.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col lg:flex-row items-center lg:items-stretch gap-6 p-6 lg:p-8 border-b border-[#333]"
                        >
                            <div className="flex-shrink-0">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="rounded-lg w-full lg:w-40"
                                />
                            </div>
                            <div className="flex flex-col flex-grow text-[#E9E9E9]">
                                <p className="font-extrabold text-lg lg:text-xl mb-2">{item.name}</p>
                                <p className="text-sm lg:text-base mb-2">
                                    Тип: <span className="text-[#F5920B]">{item.type}</span>
                                </p>
                                <p className="text-sm lg:text-base mb-2">
                                    Количество:{" "}
                                    <span className="text-[#F5920B]">{item.quantity} шт.</span>
                                </p>
                                <p className="text-lg lg:text-xl font-extrabold text-[#F5920B]">
                                    {item.price} руб.
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="text-[#E9E9E9] text-sm lg:text-base bg-red-600 hover:bg-red-700 transition-all rounded-full px-4 py-2 shadow-md"
                                >
                                    Удалить
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between items-center py-6 lg:py-8 bg-[#F5920B] rounded-lg shadow-md px-8 lg:px-12 mt-10 lg:mt-12 text-[#171717] font-extrabold text-lg lg:text-2xl">
                    <p>Итог:</p>
                    <p>{totalPrice} руб.</p>
                </div>

                <div className="flex justify-center mt-12 lg:mt-16">
                    <button className="text-[#E9E9E9] font-extrabold text-base lg:text-lg bg-[#F5920B] hover:bg-[#e28307] transition-all rounded-full px-10 py-4 lg:py-5 shadow-lg">
                        Оформить заказ
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Basket;
