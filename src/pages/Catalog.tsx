import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useProducts } from "../hooks/useProducts";

const Catalog = () => {
  const { data: products, isLoading, isError } = useProducts();

  return (
      <section className="pt-10 lg:pt-28">
        <div className="container">
          <h2 className="text-[#F5920B] font-bold lg:text-5xl text-2xl text-center lg:text-left mb-6">
            КАТАЛОГ
          </h2>

          {/* Категории */}
          <ul className="flex mt-4 gap-6 flex-wrap justify-center lg:flex-nowrap">
            {["Роллы", "Пицца", "Сеты", "Суши", "Десерты", "Маки", "Напитки"].map(
                (cat) => (
                    <li key={cat}>
                      <a className="text-[#F5920B] text-sm border border-[#F5920B] w-28 h-10 flex justify-center items-center cursor-pointer">
                        {cat}
                      </a>
                    </li>
                )
            )}
          </ul>

          {/* Карточки товаров */}
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 py-8">
            {isLoading && <p className="text-center col-span-full">Загрузка...</p>}
            {isError && (
                <p className="text-center col-span-full text-red-500">
                  Ошибка при загрузке товаров
                </p>
            )}
            {products?.map((product) => (
                <CartItem key={product.id} product={product} />
            ))}
          </div>

          {/* Кнопка перехода */}
          <div className="text-center mt-3">
            <Link
                to="/catalog"
                className="text-[#171717] font-bold text-xl bg-[#F5920B] lg:py-8 px-10 w-full py-4 inline-block"
            >
              Перейти в каталог
            </Link>
          </div>
        </div>
      </section>
  );
};

export default Catalog;
