import { useState } from "react";
import MoreAbout from "./MoreAbout";

const CartItem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
      <div className="flex flex-col">
        <div>
          <img
              src="../../public/example.jpeg"
              alt="image_roll"
              className="w-full"
          />
        </div>
        <div className="bg-[#F5920B] lg:py-3 lg:px-6 py-1 px-3">
          <div className="flex flex-col">
            <p className="text-[#171717] font-bold lg:text-xl">Урра терияки</p>
            <p className="text-[#242424] lg:text-sm mt-2 text-xs">
              Ролл в блине, сыр творожный, жаренный лосось, салат
            </p>
          </div>
          <div className="flex mt-4 lg:mt-8 items-center gap-2">
            {/* Прошлая цена: перечеркнутая и серая */}
            <span className="font-bold text-gray-500 line-through">490 ₽</span>
            {/* Текущая цена */}
            <span className="font-bold lg:text-xl text-lg">350 ₽</span>
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
                <MoreAbout />
              </div>
            </div>
        )}
      </div>
  );
};

export default CartItem;
