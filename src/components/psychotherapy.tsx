import { FiUsers } from 'react-icons/fi';
import { BiLaptop } from 'react-icons/bi';

const Psychotherapy = () => {
  return (
    <section
      id="psychotherapy"
      className="flex flex-col justify-center bg-[#eff0ec] px-4 sm:px-6 py-6 sm:py-8"
    >
      <div className="flex justify-around items-center max-w-8xl px-2 sm:px-6 py-2">
        <div className="flex flex-col justify-center items-center gap-3 sm:gap-4 max-w-4xl" data-aos="fade-up">

          <span className="text-[#ebc363] font-bold text-base sm:text-lg">Psicoterapia</span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#003366] leading-tight text-center">
            Como posso ajudar você
          </h2>

          <span className="text-sm sm:text-base lg:text-lg text-center text-[#003366] max-w-2xl">
            Ofereço atendimento psicológico individualizado para adolescentes, jovens adultos e adultos, na modalidade
            online e presencial
          </span>

          <div className="flex flex-col lg:flex-row justify-around items-start gap-8 lg:gap-15 pt-4 sm:pt-5 w-full">
            <div className="flex flex-col items-start gap-3 sm:gap-4 flex-1 w-full"
              data-aos="fade-right"
            >
              <div className="bg-[#9db6cc] text-[#003366] font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg hover:bg-[#8ca5bb] transition-colors flex items-center gap-2">
                <FiUsers className="w-5 h-5" />

                <span className="text-sm sm:text-sm lg:text-base">Público Atendido</span>
              </div>

              <div className="flex flex-col gap-4 sm:gap-6 w-full">
                <div className="flex items-start gap-2">
                  <div className="shrink-0 w-3 h-3 bg-[#9db6cc] rounded-full hover:bg-[#8ca5bb] transition-colors mt-1 sm:mt-2" />

                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-base sm:text-lg text-[#003366] text-start">Adolescentes (a partir de 14 anos)</h3>

                    <p className="text-xs sm:text-sm text-justify text-[#003366] leading-normal">
                      Questões sobre quem sou, autoestima, relações com a família e amigos, inseguranças, escola,
                      início da vida profissional, pressões do dia a dia e mudanças próprias dessa fase.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="shrink-0 w-3 h-3 bg-[#9db6cc] rounded-full hover:bg-[#8ca5bb] transition-colors mt-1 sm:mt-2" />

                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-base sm:text-lg text-[#003366] text-start">Jovem Adulto</h3>

                    <p className="text-xs sm:text-sm text-justify text-[#003366] leading-relaxed">
                      Dúvidas sobre o futuro, escolhas profissionais, início da carreira, relações afetivas, autoestima,
                      cobranças internas e externas e momentos de decisão.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="shrink-0 w-3 h-3 bg-[#9db6cc] rounded-full hover:bg-[#8ca5bb] transition-colors mt-1 sm:mt-2" />

                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-base sm:text-lg text-[#003366] text-start">Adulto</h3>

                    <p className="text-xs sm:text-sm text-justify text-[#003366] leading-relaxed">
                      Desafios emocionais do cotidiano, estresse, relações pessoais e familiares, mudanças de vida
                      e busca por mais equilíbrio e bem-estar.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-3 sm:gap-4 flex-1 w-full"
              data-aos="fade-left"
            >
              <div className="bg-[#9db6cc] text-[#003366] font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg hover:bg-[#8ca5bb] transition-colors flex items-center gap-2">
                <BiLaptop className="w-5 h-5" />

                <span className="text-sm sm:text-sm lg:text-base">Modalidades de Atendimento</span>
              </div>

              <div className="flex flex-col gap-4 sm:gap-6 w-full">
                <div className="flex items-start gap-2">
                  <div className="shrink-0 w-3 h-3 bg-[#9db6cc] rounded-full hover:bg-[#8ca5bb] transition-colors mt-1 sm:mt-2" />

                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-base sm:text-lg text-[#003366] text-start">Atendimento Presencial</h3>

                    <p className="text-xs sm:text-sm text-justify text-[#003366] leading-normal">
                      Sessões realizadas no consultório localizado em Canoas/RS, em ambiente acolhedor e privativo.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="shrink-0 w-3 h-3 bg-[#9db6cc] rounded-full hover:bg-[#8ca5bb] transition-colors mt-1 sm:mt-2" />

                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-base sm:text-lg text-[#003366] text-start">Atendimento Online</h3>

                    <p className="text-xs sm:text-sm text-justify text-[#003366] leading-normal">
                      Sessões realizadas via plataformas digitais, proporcionando conforto e flexibilidade para você.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="shrink-0 w-3 h-3 bg-[#9db6cc] rounded-full hover:bg-[#8ca5bb] transition-colors mt-1 sm:mt-2" />

                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-base sm:text-lg text-[#003366] text-start">Duração das sessões</h3>

                    <p className="text-xs sm:text-sm text-justify text-[#003366] leading-normal">
                      Cada sessão tem duração aproximada de 50 minutos, proporcionando um tempo adequado para o
                        desenvolvimento do trabalho terapêutico.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 sm:mt-5 max-w-2xl px-4 sm:px-0">
            <span className="text-sm sm:text-base lg:text-lg font-bold text-justify text-yellow-400">
              Cada pessoa chega com sua história, e o espaço é construído para acolher o que faz sentido para você, no seu
              tempo.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Psychotherapy;