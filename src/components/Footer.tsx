const Footer = () => {
  return (
    <footer className=" pt-8 lg:pt-28 ">
      <div className="grid grid-cols-2 container">
        <div className="flex flex-col ">
          <a>
            <img
              src="../../public/logo2.svg"
              alt="logo"
              className="inline-block max-w-32 md:max-w-56 max-h-14"
            />
          </a>
          <span className="text-[#ADADAD] font-medium lg:text-xl inline-block sm:py-2 max-w-96 text-xs">
            We built an elegant solution. Our team created a fully integrated
            sales and marketing solution for SMBs
          </span>
        </div>
        <div className="flex flex-col justify-center items-end">
          <ul className="flex lg:space-x-9 gap-4">
            <li className="w-10 h-10 lg:w-16 lg:h-16">
              <a href="">
                <img src="../../public/vk.svg" alt="vk_icon" />
              </a>
            </li>
            <li className="w-10 h-10 lg:w-16 lg:h-16">
              <a href="">
                <img src="../../public/tel.svg" alt="tel_icon" />
              </a>
            </li>
            <li className="w-10 h-10 lg:w-16 lg:h-16">
              <a href="">
                <img src="../../public/mail.svg" alt="mail_icon" />
              </a>
            </li>
          </ul>
          <p className="text-[#ADADAD] font-medium lg:text-xl pt-3 lg:pt-7 text-xs text-end">
            Политика конфидициальности
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
