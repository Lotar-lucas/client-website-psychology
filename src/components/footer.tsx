import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="relative w-full bg-[#003366] text-white px-6 py-16 overflow-hidden">
      <div className="absolute -bottom-30 -right-32 w-80 h-80 md:-right-60 md:w-125 md:h-125
        lg:w-125 lg:h-125 xl:w-150 xl:h-150 opacity-40">
        <img
          src="/Logo-psi.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-lg md:text-xl lg:text-[26px] text-white leading-relaxed mb-8 max-w-3xl mx-auto">
          Estou aqui para conhecer a sua história e caminhar com você no que fizer sentido neste momento.
        </h2>

        <p className="text-lg md:text-xl lg:text-[26px] text-white leading-relaxed mb-10 max-w-3xl mx-auto">
          Se quiser saber mais ou agendar a primeira conversa, fique à vontade para me chamar no WhatsApp ou no Instagram.
        </p>

        <div>
          <a href="#contact"
            className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-full shadow-lg
            hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span className="text-lg font-bold">
              VAMOS CONVERSAR
            </span>
          </a>
        </div>

        <div className="flex justify-center gap-8 mt-10">
          <a
            href="#"
            className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center text-white
            hover:bg-white hover:bg-opacity-10 transition-colors"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="w-10 h-10 text-white"/>
          </a>

          <a
            href="#"
            className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:bg-opacity-10 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="w-10 h-10 text-white" />
          </a>

          <a
            href="#"
            className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:bg-opacity-10 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-10 h-10 text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
