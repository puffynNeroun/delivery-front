import { useState } from "react";
import MoreAbout from "./MoreAbout";
import { Product } from "../types/Product";

interface Props {
  product: Product;
}

const CartItem = ({ product }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
      <div className="flex flex-col">
        <div>
          <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
          />
        </div>
        <div className="bg-[#F5920B] lg:py-3 lg:px-6 py-1 px-3">
          <div className="flex flex-col">
            <p className="text-[#171717] font-bold lg:text-xl">{product.name}</p>
            <p className="text-[#242424] lg:text-sm mt-2 text-xs">
              {product.description}
            </p>
          </div>
          <div className="flex mt-4 lg:mt-8 items-center gap-2">
            {/* Старую цену можно убрать или заменить логикой акций */}
            <span className="font-bold text-gray-500 line-through">{Math.round(product.price * 1.2)} ₽</span>
            <span className="font-bold lg:text-xl text-lg">{product.price} ₽</span>
          </div>
          <div className="flex justify-center mt-5">
            <button
                onClick={handleOpenModal}
                className="text-[#E9E9E9] py-2 px-3 lg:px-6 lg:py-5 bg-black hover:-translate-y-2 transition-transform"
            >
              Подробное описание
            </button>
          </div>
        </div>

        {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="relative bg-[#0C0C0C] p-6 rounded-lg max-w-5xl w-full">
                <button
                    onClick={handleCloseModal}
                    className="absolute top-2 right-2 text-[#E9E9E9] text-xl font-bold"
                >
                  ✕
                </button>
                <MoreAbout product={product} />
              </div>
            </div>
        )}
      </div>
  );
};

export default CartItem;
