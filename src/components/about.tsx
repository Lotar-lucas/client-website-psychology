import { useState } from "react";
import FormationModal from "./formationModal";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
  <>
    <section
      id="about"
      className="flex justify-center bg-[#9db6cc] w-full px-2 xs:px-3 sm:px-6"
      style={{ minHeight: '100vh' }}
    >
      <div className="flex items-center max-w-350 h-full pt-6 sm:pt-12 lg:pt-20 pb-6 sm:pb-9">
        <div className="flex flex-col w-full gap-8 sm:gap-12" data-aos="fade-up">

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8">
            <div className="shrink-0" data-aos="zoom-in">
              <img
              src="/Thais.jpeg"
              alt="Foto de perfil"
              className="w-64 h-64 sm:w-80 sm:h-80 lg:w-94 lg:h-94 object-cover rounded-xl shadow-lg border-3 border-yellow-400 hover:scale-105
              transition-transform duration-300"
              />
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center lg:text-left font-serif font-bold text-[#003366] leading-tight">
                Um pouco sobre quem sou e a psicóloga que me tornei
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-justify pt-2 sm:pt-3 lg:pt-5 text-[#003366] ">
                Me chamo Thais, sou psicóloga e escolhi a Psicologia pelo desejo de escutar, acolher e caminhar
                junto com as pessoas em momentos importantes da vida.
              </p>

              <p className="text-sm sm:text-base lg:text-lg text-justify text-[#003366]">
                Desde a graduação, sempre tive curiosidade em aprender além das aulas, participando de diferentes 
                atividades e experiências.
              </p>

              <p className="text-sm sm:text-base lg:text-lg text-justify text-[#003366]">
                Esse interesse me aproximou da Psicologia Econômica, área que ampliou meu olhar sobre o comportamento humano e
                sobre a forma como nos relacionamos com o dinheiro.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            <p className="text-sm sm:text-base lg:text-lg text-justify text-[#003366]">
              As demandas que chegam até mim são diversas e únicas. Não falam apenas de dinheiro, mas de emoções, histórias,
              inseguranças e expectativas. Tudo isso faz parte da escuta, sem rótulos, com respeito e sem julgamentos.
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-justify text-[#003366]">
              Acompanho adolescentes e adultos em diferentes momentos da vida, oferecendo um espaço seguro para conversar,
              refletir e cuidar da saúde emocional. Minha atuação é guiada pela ética, pelo compromisso com o sigilo e pelo
              respeito à autonomia de cada pessoa.
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-justify text-[#003366]">
              Acredito em um trabalho próximo, acessível e humano, baseado no diálogo e na construção de vínculo. Buscar
              apoio psicológico é um gesto de cuidado consigo mesmo(a).
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-4">
              <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}
                className="inline-block text-center bg-yellow-400 text-white font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg
                hover:bg-yellow-500 hover:scale-110 hover:shadow-lg transition-all duration-500 ease-in-out w-64 sm:w-72 lg:w-80 whitespace-normal sm:whitespace-nowrap">

                <span className='text-sm sm:text-sm lg:text-base'>Minha Formação</span>
              </a>

              <a href="#contact" className="inline-block text-center bg-yellow-400 text-white font-semibold px-4 py-2 sm:px-5 sm:py-2.5
                rounded-lg hover:bg-yellow-500 hover:scale-110 hover:shadow-lg transition-all duration-500 ease-in-out w-64 sm:w-72 lg:w-80 whitespace-normal sm:whitespace-nowrap">
                <span className='text-sm sm:text-sm lg:text-base'>Gostaria de falar comigo? Clica aqui</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FormationModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    >
    </FormationModal>
  </>
  );
};

export default About;
