import { HiLightBulb } from "react-icons/hi";

const Workshops = () => {
  return (
    <section
      id="workshops"
      className="flex flex-col justify-center bg-[#eff0ec] px-6 py-8"
    >
      <div className="flex justify-around items-center max-w-10xl px-6 py-2">
        <div className="flex flex-col justify-center items-center gap-4 w-full" data-aos="fade-up">
          <span className="text-yellow-400 font-bold text-lg">
            Palestras, Workshops e Oficinas
          </span>

          <h2 className="text-5xl font-serif font-bold text-[#003366] leading-tight">
            Como posso ajudar você
          </h2>

          <p className="text-lg text-center text-[#003366] max-w-4xl">
            Além do atendimento clínico, também desenvolvo palestras, workshops e oficinas voltados ao cuidado
            emocional e ao desenvolvimento pessoal de adolescentes e adultos. Os formatos e temas são pensados de forma
            acessível, ética e conectada com situações reais do dia a dia.
          </p>

          <div className="flex flex-col gap-8 w-full max-w-4xl">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 pt-4">
                <HiLightBulb className="w-10 h-10 text-[#003366]" />

                <div className="bg-[#9db6cc] text-[#003366] font-semibold px-4 py-1 rounded-full">
                  <span className="text-lg">Palestras</span>
                </div>
              </div>

              <p className="text-lg text-justify text-[#003366] leading-snug">
                Encontros com foco informativo e reflexivo, que convidam à conscientização e ao diálogo
                sobre saúde emocional, escolhas, relações, autocuidado e comportamento humano.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 ">
                <HiLightBulb className="w-10 h-10 text-[#003366]" />

                <div className="bg-[#9db6cc] text-[#003366] font-semibold px-4 py-1 rounded-full">
                  <span className="text-lg">Workshops</span>
                </div>
              </div>

              <p className="text-lg text-justify text-[#003366] leading-snug">
                Momentos mais interativos, que combinam conteúdo e prática. Incluem reflexões, trocas e 
                atividades que ajudam a aprofundar temas como emoções, tomada de decisões,
                autoestima, relações e organização emocional.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <HiLightBulb className="w-10 h-10 text-[#003366]" />

                <div className="bg-[#9db6cc] text-[#003366] font-semibold px-4 py-1 rounded-full">
                  <span className="text-lg">Oficinas</span>
                </div>
              </div>

              <p className="text-lg text-justify text-[#003366] leading-snug">
                Propostas práticas e vivenciais, especialmente indicadas para grupos menores. As oficinas 
                estimulam a participação ativa, a expressão e o desenvolvimento de habilidades
                emocionais de forma leve e acolhedora.
              </p>
            </div>
          </div>

          <div className="mt-5 max-w-4xl">
            <span className="text-lg font-bold text-justify text-yellow-400">
              Os encontros podem ser adaptados conforme o público e a demanda. Fique à vontade para entrar em contato e conversarmos sobre formatos, temas e possibilidades.
            </span>
          </div>

          <div className="mt-8">
            <a href="#contact"
              className="inline-block bg-[#9db6cc] text-[#003366] font-semibold px-6 py-3 rounded-full shadow-lg
              hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span className="text-lg font-bold">QUERO SABER MAIS</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;