const understandProcess = () => {
  return (
    <section
      id="understandProcess"
      className="flex  flex-col justify-center bg-[#eff0ec] w-full px-6 py-8"
    >
      <div className="flex justify-around items-center max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col justify-center items-center gap-8 w-full" data-aos="fade-up"> 
          <span className="text-yellow-600 font-medium text-sm uppercase tracking-wide">Entenda o Processo</span>

          <h2 className="text-4xl font-serif font-bold text-blue-900 leading-tight text-center">
            Como funciona a psicoterapia
          </h2>

          <p className="text-center text-gray-700 max-w-3xl leading-relaxed">
            A psicoterapia é um espaço de cuidado, reflexão e transformação. Não se trata de dar conselhos
            ou soluções prontas, mas de criar condições para que você possa compreender suas questões,
            desenvolver recursos internos e construir caminhos saudáveis e autênticos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mt-4">
            {/* Escuta Qualificada */}
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-lg text-blue-900">Escuta Qualificada</h3>

                <p className="text-gray-700 text-sm leading-relaxed">
                  Um espaço onde você pode falar livremente, sem julgamentos, sendo verdadeiramente
                  ouvido e compreendido.
                </p>
              </div>
            </div>

            {/* Aliança Terapêutica */}
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-lg text-blue-900">Aliança Terapêutica</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  A relação de confiança e colaboração entre psicóloga e paciente é fundamental para o
                  sucesso do processo.
                </p>
              </div>
            </div>

            {/* Desenvolvimento Pessoal */}
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-lg text-blue-900">Desenvolvimento Pessoal</h3>
                <p className="text-gray-700 text-sm leading-relaxed">

                  A psicoterapia promove autoconhecimento, desenvolvimento de habilidades e encontrar
                  novas formas de lidar com o que está vivendo.
                </p>
              </div>
            </div>

            {/* Respeito ao seu tempo */}
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-lg text-blue-900">Respeito ao seu tempo</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Cada pessoa tem seu próprio ritmo. O processo psicoterapêutico respeita sua
                  individualidade e história de vida
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block bg-white text-blue-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Se identificou comigo e com o meu trabalho? Me chama!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default understandProcess;