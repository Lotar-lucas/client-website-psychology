import { useState } from "react";
import FormationModal from "./formationModal";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
  <>
    <section
      id="about"
      className="flex justify-center bg-[#9db6cc] w-full px-6 pt-8"
    >
      <div className="flex justify-center items-start max-w-9xl px-6 pt-2">
        <div className="flex justify-center items-start gap-8 max-w-7xl" data-aos="fade-up">
          <div className="md:w-1/2 flex flex-col justify-start items-start md:items-center" data-aos="zoom-in" >
            <img
            src="/Thais.jpeg"
            alt="Foto de perfil"
            className="w-94 h-94 object-cover rounded-xl shadow-lg border-3 border-yellow-400 hover:scale-105
            transition-transform duration-300"
            />
          </div>

          <div className="flex justify-start items-start bg-[#9db6cc] max-w-3xl">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl text-left font-serif font-bold text-[#003366] leading-tight">
                Um pouco sobre quem sou e a psicóloga que me tornei
              </h1>

              <p className="text-lg text-justify pt-5 text-[#003366] ">
                Me chamo Thais, sou psicóloga e escolhi a Psicologia pelo desejo de escutar, acolher e caminhar
                junto com as pessoas em momentos importantes da vida.
              </p>

              <p className="text-lg text-justify text-[#003366]">
                Desde a graduação, sempre tive curiosidade em aprender além das aulas, participando de diferentes 
                atividades e experiências.
              </p>

              <p className="text-lg text-justify text-[#003366]">
                Esse interesse me aproximou da Psicologia Econômica, área que ampliou meu olhar sobre o comportamento humano e
                sobre a forma como nos relacionamos com o dinheiro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="flex justify-center bg-[#9db6cc] px-6 pb-8 pt-5">
      <div className="flex justify-center max-w-9xl px-6 pt-2">
        <div className="flex flex-col gap-4 max-w-6xl" data-aos="fade-up">

          <p className="text-lg text-justify text-[#003366]">
            As demandas que chegam até mim são diversas e únicas. Não falam apenas de dinheiro, mas de emoções, histórias,
            inseguranças e expectativas. Tudo isso faz parte da escuta, sem rótulos, com respeito e sem julgamentos.
          </p>

          <p className="text-lg text-justify text-[#003366]">
            Acompanho adolescentes e adultos em diferentes momentos da vida, oferecendo um espaço seguro para conversar,
            refletir e cuidar da saúde emocional. Minha atuação é guiada pela ética, pelo compromisso com o sigilo e pelo
            respeito à autonomia de cada pessoa.
          </p>

          <p className="text-lg text-justify text-[#003366]">
            Acredito em um trabalho próximo, acessível e humano, baseado no diálogo e na construção de vínculo. Buscar
            apoio psicológico é um gesto de cuidado consigo mesmo(a).
          </p>

          <div className="flex justify-end items-center gap-9 pt-4 ">
            <div className="bg-yellow-400 px-3 py-1 rounded-full hover:bg-yellow-500 transition-colors">
              <button className="text-white font-semibold" onClick={() => setIsModalOpen(true)}>
                Minha Formação
              </button>
            </div>

            <div className="bg-yellow-400 px-3 py-1 rounded-full hover:bg-yellow-500 transition-colors">
              <button className="text-white font-semibold">
                Gostaria de falar comigo? Clica aqui
              </button>
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
