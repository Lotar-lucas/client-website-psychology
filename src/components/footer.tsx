import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { WHATSAPP, INSTAGRAM_URL, LINKEDIN_URL } from '../config/contact';

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-[#003366] text-white overflow-hidden min-h-80 md:min-h-100
    lg:min-h-0 flex items-center">
      <div className="absolute inset-0 flex justify-end opacity-40
        -right-34
        md:top-0 md:-right-40
        lg:-top-4 lg:-right-40
        xl:-top-6 xl:-right-45
        2xl:-top-8 2xl:-right-40
      ">
        <img
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-once="true"
          src="/Logo-psi.webp"
          alt="Girassol de fundo da tela"
          className="w-auto object-cover h-full lg:h-auto lg:w-96 xl:w-100
          scale-125 origin-center translate-y-4
          md:scale-125 md:origin-center md:translate-y-6
          lg:scale-110 lg:origin-center lg:translate-y-8
          xl:scale-110 xl:origin-center xl:translate-y-10
          2xl:scale-110 2xl:origin-center 2xl:translate-y-10"
        />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 py-4 px-4 sm:px-6">
        <h2 className="text-sm sm:text-base lg:text-lg xl:text-xl text-white leading-relaxed mb-3 sm:mb-4 lg:mb-5
          max-w-3xl mx-auto"
          data-aos="fade-up"
        >
          Estou aqui para conhecer a sua história e caminhar com você no que fizer sentido neste momento.
        </h2>

        <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white leading-relaxed mb-5 sm:mb-6 lg:mb-7
          max-w-3xl mx-auto"
          data-aos="fade-up"
        >
          Se quiser saber mais ou agendar a primeira conversa, fique à vontade para me chamar no WhatsApp ou no Instagram.
        </p>

        <div data-aos="fade-up" data-aos-offset="-50">
          <div className="inline-block bg-white text-blue-900 font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg">
            <span className="text-sm sm:text-sm lg:text-base">
              VAMOS CONVERSAR
            </span>
          </div>
        </div>

        <div className="flex justify-center gap-3 sm:gap-5 lg:gap-6 mt-4 sm:mt-5 lg:mt-6">
          <a
            href={WHATSAPP.profile}
            target="_blank"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-offset="-50"
            className="w-10 h-10 sm:w-11 sm:h-11 lg:w-13 lg:h-13 rounded-full border-2 border-white flex items-center
              justify-center text-white hover:bg-[#25D366] hover:border-[#25D366] hover:scale-110 hover:shadow-lg
              transition-all duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"/>
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-offset="-50"
            className="w-10 h-10 sm:w-11 sm:h-11 lg:w-13 lg:h-13 rounded-full border-2 border-white flex items-center
              justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-300
              hover:bg-linear-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#FD1D1D]
              hover:border-transparent"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-offset="-50"
            className="w-10 h-10 sm:w-11 sm:h-11 lg:w-13 lg:h-13 rounded-full border-2 border-white flex items-center
              justify-center text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:scale-110 hover:shadow-lg
              transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
