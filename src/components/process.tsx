import { FaAssistiveListeningSystems, FaHandshake } from "react-icons/fa";
import { BsFlower1 } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";



const Process = () => {
  return (
    <section
      id="psychotherapy"
      className="flex flex-col justify-center bg-[#9db6cc] w-full px-4 sm:px-6 py-6 sm:py-8 lg:py-12"
    >
      <div className="flex justify-around items-center max-w-350 mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col justify-center items-center gap-7 w-full" data-aos="fade-up">
          <span className="text-yellow-400 font-bold text-base sm:text-lg">Entenda o Processo</span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#003366] leading-tight">
            Como funciona a psicoterapia
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-center text-[#003366] max-w-5xl leading-normal">
            A psicoterapia é um espaço de cuidado, reflexão e transformação. Não se trata de dar conselhos
            ou soluções prontas, mas de criar condições para que você possa compreender suas questões,
            desenvolver recursos internos e construir caminhos saudáveis e autênticos.
          </p>

          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full max-w-5xl mt-4">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-yellow-400 rounded-full
                flex items-center justify-center relative"
              >
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 80 80">
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                </svg>

                <FaAssistiveListeningSystems  className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#003366]" />
              </div>

              <div className="flex flex-col text-left gap-1">
                <h3 className="font-semibold text-base sm:text-lg text-[#003366]">Escuta Qualificada</h3>

                <p className="text-[#003366] text-sm sm:text-base lg:text-lg leading-tight">
                  Um espaço onde você pode falar livremente, sem julgamentos, sendo verdadeiramente
                  ouvido e compreendido.
                </p>
              </div>
            </div>


            <div className="flex items-start gap-3 sm:gap-4">
              <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-yellow-400 rounded-full
                flex items-center justify-center relative"
              >
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 80 80">
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                </svg>

                <FaHandshake className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#003366]" />
              </div>

              <div className="flex flex-col text-left gap-1">
                <h3 className="font-semibold text-base sm:text-lg text-[#003366]">Aliança Terapêutica</h3>

                <p className="text-[#003366] text-sm sm:text-base lg:text-lg leading-tight">
                  A relação de confiança e colaboração entre psicóloga e paciente é fundamental para o
                  sucesso do processo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-yellow-400 rounded-full
                flex items-center justify-center relative"
              >
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 80 80">
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                </svg>

                <BsFlower1 className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#003366]" />
              </div>

              <div className="flex flex-col text-left gap-1">
                <h3 className="font-semibold text-base sm:text-lg text-[#003366]">Desenvolvimento Pessoal</h3>

                <p className="text-[#003366] text-sm sm:text-base lg:text-lg leading-tight">
                  A psicoterapia promove autoconhecimento, desenvolvimento de habilidades e encontrar
                  novas formas de lidar com o que está vivendo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-yellow-400 rounded-full
                flex items-center justify-center relative"
              >
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 80 80">
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                </svg>

                <CiClock2 className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#003366]" />
              </div>

              <div className="flex flex-col text-left gap-1">
                <h3 className="font-semibold text-base sm:text-lg text-[#003366]">Respeito ao seu tempo</h3>

                <p className="text-[#003366] text-sm sm:text-base lg:text-lg leading-tight">
                  Cada pessoa tem seu próprio ritmo. O processo psicoterapêutico respeita sua
                  individualidade e história de vida
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8">
            <a
              href="#contact"
              className="inline-block bg-yellow-400 text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3
              sm:py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Se identificou comigo e com o meu trabalho? Me chama!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;