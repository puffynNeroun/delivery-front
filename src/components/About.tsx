const About = () => {
  return (
    <section className=" pt-11 lg:pt-28">
      <div className="grid lg:grid-cols-2  container grid-cols-1 ">
        <div className="flex flex-col">
          <p className="text-[#E9E9E9] font-bold text-xl sm:text-3xl lg:text-5xl ">
            О
            <span className="text-[#F5920B] font-bold text-xl sm:text-3xl lg:text-5xl ml-2">
              НАС
            </span>
          </p>
          <div className="text-[#ADADAD] text-sm lg:text-lg pt-4 lg:pt-8 lg:mr-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              animi laudantium, id vitae numquam nulla, dolorem voluptas
              reprehenderit hic ullam repudiandae, esse est voluptatum.
              Provident vel ea molestiae officia non?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
              praesentium porro nesciunt quaerat voluptatum deserunt? Ducimus
              sit aliquid, ad doloribus iusto amet eaque mollitia exercitationem
              possimus quisquam consequatur, inventore provident!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              laudantium quibusdam dolores ut officiis quis repudiandae!
              Expedita, ratione obcaecati numquam excepturi doloribus nesciunt
              rerum totam fuga esse voluptate, eius aspernatur!
            </p>
          </div>
          <div className="mt-6 lg:mt-10 ">
            <ul className="flex lg:gap-9 gap-5 ">
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
          </div>
        </div>
        <div className="lg:ml-auto lg:flex flex justify-center mt-4 lg:mt-0">
          <img src="../../public/video.jpeg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
