import { Product } from "../types/Product";
import { ShoppingCart } from "lucide-react";

interface Props {
  product: Product;
  onAddToCart: () => void;
}

const MoreAbout = ({ product, onAddToCart }: Props) => {
  return (
      <div className="max-w-5xl w-full bg-[#0C0C0C] rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-14">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-shrink-0 w-full lg:w-1/2">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          <div className="flex flex-col justify-between w-full text-[#E9E9E9]">
            <div>
              <h2 className="text-2xl xl:text-4xl font-bold mb-4">
                {product.name}
              </h2>
              <p className="text-sm xl:text-lg text-[#BEBEBE] mb-6 leading-relaxed">
                {product.description}
              </p>
              <div className="flex items-center gap-4 mb-6">
              <span className="text-gray-500 font-semibold line-through text-sm">
                {Math.round(product.price * 1.2)} ₽
              </span>
                <span className="text-3xl text-[#F5920B] font-extrabold">
                {product.price} ₽
              </span>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                  onClick={onAddToCart}
                  className="flex items-center gap-2 bg-[#F5920B] hover:bg-[#e58600] text-[#0C0C0C] font-bold text-lg py-3 px-6 rounded-full transition-all shadow-md"
              >
                <ShoppingCart className="w-5 h-5" />
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default MoreAbout;
