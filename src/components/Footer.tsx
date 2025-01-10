const Footer = () => {
  return (
    <footer className="container mt-24 h-[172px] sm:mt-12">
      <div className="grid grid-cols-2 sm:grid-cols-1">
        <div className="flex flex-col sm:order-2 sm:mt-5">
          <a>
            <img
              src="../../public/logo2.svg"
              alt="logo"
              className="inline-block w-[227px] h-[61px]"
            />
          </a>
          <span className="text-[#ADADAD] font-medium text-xl inline-block w-[380px] py-7">
            We built an elegant solution. Our team created a fully integrated
            sales and marketing solution for SMBs
          </span>
        </div>
        <div className="flex flex-col justify-center justify-self-end sm:justify-self-start sm:order-1 ">
          <ul className="flex  sm:justify-start justify-end space-x-9 ">
            <li>
              <a href="">
                <img src="../../public/vk.svg" alt="vk_icon" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="../../public/tel.svg" alt="tel_icon" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="../../public/mail.svg" alt="mail_icon" />
              </a>
            </li>
          </ul>
          <p className="text-[#ADADAD] font-medium text-xl  pt-7">
            Политика конфидициальности
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
