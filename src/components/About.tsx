const About = () => {
  return (
    <section className="container mt-24 md:mt-12">
      <div className="grid grid-cols-2  sm:grid-cols-1 ">
        <div className="flex flex-col">
          <p className="text-[#E9E9E9] font-bold text-5xl md:text-3xl">
            О
            <span className="text-[#F5920B] font-bold text-5xl md:text-3xl">
              НАС
            </span>
          </p>
          <div className="text-[#ADADAD] text-lg mt-8 md:text-xs md:mt-3">
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
          <div className="mt-10 md:mt-5">
            <ul className="flex gap-9  ">
              <li className="md:w-10 md:h-10">
                <a href="">
                  <img src="../../public/vk.svg" alt="vk_icon" />
                </a>
              </li>
              <li className="md:w-10 md:h-10">
                <a href="">
                  <img src="../../public/tel.svg" alt="tel_icon" />
                </a>
              </li>
              <li className="md:w-10 md:h-10">
                <a href="">
                  <img src="../../public/mail.svg" alt="mail_icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="ml-auto flex sm:hidden">
          <img src="../../public/video.jpeg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
