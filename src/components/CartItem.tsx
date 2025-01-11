const CartItem = () => {
  return (
    <div className="w-[355px] h-[445px] bg-[#F5920B]">
      <div>
        <img
          src="../../public/roll.jpg"
          alt="image_roll"
          className="h-auto w-full max-w-full"
        />
      </div>
      <div className="mt-[15px] ml-[23px] w-[216px]">
        <p className="text-[#171717] font-bold text-xl ">
          Филадельфия лайт кунсей
        </p>
        <span className="text-[#242424] text-sm mt-2">Рис: белый</span> <br />
        <span className="text-[#242424] text-sm ">
          Начинка: Ролл с копченным лососем-сыром и томатом
        </span>
      </div>
      <div className="flex justify-between mx-6 items-center mt-[14px]">
        <span>559 &#8381;</span>
        <button className="text-[#E9E9E9] px-[35px] py-[13px] bg-black rounded-3xl hover:-translate-y-2 transition-transform">
          В корзину
        </button>
      </div>
    </div>
  );
};

export default CartItem;
