import { HiLightBulb } from "react-icons/hi";

const Workshops = () => {
  return (
    <section
      id="workshops"
      className="flex flex-col justify-center bg-[#eff0ec] px-4 sm:px-6 py-6 sm:py-8 lg:py-12"
    >
      <div className="flex items-center max-w-350 mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col items-center gap-4 sm:gap-6" data-aos="fade-up">
          <span className="text-yellow-400 font-bold text-base sm:text-lg">
            Palestras, Workshops e Oficinas
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#003366] leading-tight">
            Como posso ajudar você
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-center text-[#003366] max-w-5xl">
            Além do atendimento clínico, também desenvolvo palestras, workshops e oficinas voltados ao cuidado
            emocional e ao desenvolvimento pessoal de adolescentes e adultos. Os formatos e temas são pensados de forma
            acessível, ética e conectada com situações reais do dia a dia.
          </p>

          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 max-w-5xl">
            <div className="flex flex-col gap-2 sm:gap-3">
              <div className="flex items-center gap-2 pt-3 sm:pt-4">
                <HiLightBulb className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-[#003366]" />

                <div className="bg-[#9db6cc] text-[#003366] font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg
                  hover:bg-[#8ca5bb] transition-colors"
                >
                  <span className="text-sm sm:text-base">Palestras</span>
                </div>
              </div>

              <p className="text-left text-sm sm:text-base lg:text-lg text-[#003366] leading-snug">
                Encontros com foco informativo e reflexivo, que convidam à conscientização e ao diálogo
                sobre saúde emocional, escolhas, relações, autocuidado e comportamento humano.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:gap-3">
              <div className="flex items-center gap-2">
                <HiLightBulb className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-[#003366]" />

                <div className="bg-[#9db6cc] text-[#003366] font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg
                  hover:bg-[#8ca5bb] transition-colors"
                >
                  <span className="text-sm sm:text-base">Workshops</span>
                </div>
              </div>

              <p className="text-left text-sm sm:text-base lg:text-lg text-[#003366] leading-snug">
                Momentos mais interativos, que combinam conteúdo e prática. Incluem reflexões, trocas e
                atividades que ajudam a aprofundar temas como emoções, tomada de decisões,
                autoestima, relações e organização emocional.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:gap-3">
              <div className="flex items-center gap-2">
                <HiLightBulb className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-[#003366]" />

                <div className="bg-[#9db6cc] text-[#003366] font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg
                  hover:bg-[#8ca5bb] transition-colors"
                >
                  <span className="text-sm sm:text-base">Oficinas</span>
                </div>
              </div>

              <p className="text-left text-sm sm:text-base lg:text-lg text-[#003366] leading-snug">
                Propostas práticas e vivenciais, especialmente indicadas para grupos menores. As oficinas
                estimulam a participação ativa, a expressão e o desenvolvimento de habilidades
                emocionais de forma leve e acolhedora.
              </p>
            </div>
          </div>

          <div className="mt-4 sm:mt-5 max-w-5xl">
            <span className="text-sm sm:text-base lg:text-lg font-bold text-yellow-400">
              Os encontros podem ser adaptados conforme o público e a demanda. Fique à vontade para entrar em contato e
              conversarmos sobre formatos, temas e possibilidades.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;