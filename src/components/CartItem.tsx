import { useState } from "react";
import MoreAbout from "./MoreAbout";
import { Product } from "../types/Product";
import { useAppDispatch } from "../store/hooks";
import { addToCart  } from "../store/slices/cartSlice";
import { ShoppingCart, CheckCircle2 } from "lucide-react";
import AuthModal from "./AuthModal.tsx";

interface Props {
    product: Product;
}

const CartItem = ({ product }: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [showAddedPopup, setShowAddedPopup] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);

    const dispatch = useAppDispatch();

    const handleOpenModal = () => {
        setIsModalOpen(true);
        setIsClosing(false);
    };

    const handleCloseModal = () => {
        setIsClosing(true);
        setTimeout(() => setIsModalOpen(false), 300);
    };

    const handleAddToCart = async () => {
        try {
            const result = await dispatch(addToCart({ productId: product.id, quantity: 1 }));

            if (addToCart.rejected.match(result)) {
                if (result.payload === "Войдите в аккаунт, чтобы добавить товар" || result.payload?.includes("Не авторизован")) {
                    setShowAuthModal(true);
                }
            } else {
                setShowAddedPopup(true);
                setTimeout(() => setShowAddedPopup(false), 1500);
            }
        } catch (err) {
            console.error("Ошибка при добавлении:", err);
        }
    };


    if (!product?.image || !product?.name) {
        return <div className="text-red-500">Ошибка загрузки продукта</div>;
    }

    return (
        <div className="flex flex-col bg-[#F5920B] h-[500px] overflow-hidden relative">
            {/* Картинка */}
            <div className="h-56 w-full overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Контент */}
            <div className="flex flex-col justify-between flex-grow p-4">
                <div>
                    <p className="text-[#171717] font-bold text-lg">{product.name}</p>
                    <p className="text-[#242424] text-sm mt-2 line-clamp-3">
                        {product.description}
                    </p>
                </div>

                <div className="mt-4">
                    <div className="flex items-center gap-2">
            <span className="font-bold text-gray-500 line-through text-sm">
              {Math.round(product.price * 1.2)} ₽
            </span>
                        <span className="font-bold text-xl">{product.price} ₽</span>
                    </div>

                    <div className="flex justify-between mt-4 gap-2 relative">
                        {/* Кнопка подробнее */}
                        <button
                            onClick={handleOpenModal}
                            className="flex-1 text-white py-2 px-4 bg-black hover:-translate-y-1 transition-transform"
                        >
                            Подробнее
                        </button>

                        {/* Кнопка добавления */}
                        <button
                            onClick={handleAddToCart}
                            className="bg-black hover:bg-[#f0f0f0] rounded-full p-2 shadow-md transition-all flex items-center justify-center"
                            title="Добавить в корзину"
                        >
                            <ShoppingCart className="text-[#F5920B] w-6 h-6 hover:scale-110 transition-transform" />
                        </button>

                        {/* Popup-уведомление */}
                        {showAddedPopup && (
                            <div className="absolute -top-10 right-0 bg-green-600 text-white text-sm px-4 py-1 rounded-full shadow-lg animate-fade-in-out flex items-center gap-1">
                                <CheckCircle2 className="w-4 h-4" />
                                Добавлено!
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Модалка */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div
                        className={`relative bg-[#0C0C0C] p-6 rounded-lg max-w-5xl w-full transform transition-all duration-300 ${
                            isClosing ? "opacity-0 scale-95" : "opacity-100 scale-100"
                        }`}
                    >
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-2 right-2 text-white text-xl font-bold"
                        >
                            ✕
                        </button>
                        <MoreAbout product={product} onAddToCart={() => {
                            dispatch(addToCart({ productId: product.id, quantity: 1 }));
                            handleCloseModal();
                        }} />
                    </div>
                </div>
            )}
            {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}

        </div>
    );
};

export default CartItem;
