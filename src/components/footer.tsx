import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-[#003366] text-white overflow-hidden min-h-80 md:min-h-100
    lg:min-h-0 flex items-center">
      <div className="absolute inset-0 flex justify-end opacity-40
        -right-34
        md:top-0 md:-right-40
        lg:-top-4 lg:-right-40
        xl:-top-6 xl:-right-50
        2xl:-top-12 2xl:-right-55
      ">
        <img
          src="/Logo-psi.png"
          alt="Girassol de fundo da tela"
          className="w-auto object-cover h-full lg:h-auto lg:w-96 xl:w-125
          scale-125 origin-center translate-y-4
          md:scale-125 md:origin-center md:translate-y-6
          lg:scale-110 lg:origin-center lg:translate-y-8
          xl:scale-110 xl:origin-center xl:translate-y-10
          2xl:scale-100 2xl:origin-center 2xl:translate-y-12"
        />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 py-4">
        <h2 className="text-sm sm:text-base lg:text-lg xl:text-xl text-white leading-relaxed mb-3 sm:mb-4 lg:mb-5 max-w-3xl mx-auto">
          Estou aqui para conhecer a sua história e caminhar com você no que fizer sentido neste momento.
        </h2>

        <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white leading-relaxed mb-5 sm:mb-6 lg:mb-7 max-w-3xl mx-auto">
          Se quiser saber mais ou agendar a primeira conversa, fique à vontade para me chamar no WhatsApp ou no Instagram.
        </p>

        <div>
          <a href="#contact"
            className="inline-block bg-white text-blue-900 font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg
            hover:bg-gray-100 hover:scale-105 transition-all duration-300"
          >
            <span className="text-sm sm:text-sm lg:text-base">
              VAMOS CONVERSAR
            </span>
          </a>
        </div>

        <div className="flex justify-center gap-3 sm:gap-5 lg:gap-6 mt-4 sm:mt-5 lg:mt-6">
          <a
            href="#"
            className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border-2 border-white flex items-center justify-center text-white
            hover:bg-[#25D366] hover:border-[#25D366] hover:scale-110 hover:shadow-lg transition-all duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white"/>
          </a>

          <a
            href="#"
            className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-[#E4405F] hover:border-[#E4405F] hover:scale-110 hover:shadow-lg transition-all duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" />
          </a>

          <a
            href="#"
            className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:scale-110 hover:shadow-lg transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
