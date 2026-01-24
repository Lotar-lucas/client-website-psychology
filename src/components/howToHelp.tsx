const HowToHelp = () => {
  return (
    <section
      id="HowToHelp"
      className="flex  flex-col justify-center bg-[#eff0ec] w-full px-6 py-8"
    >
      <div className="flex justify-around items-center max-w-8xl px-6 py-2">
        <div className="flex flex-col justify-center items-center gap-4 max-w-4xl" data-aos="fade-up"> 

          <span>Atendimento Clínico</span>

          <h2 className="text-3xl font-serif font-bold text-blue-900 leading-tight">
            Como posso ajudar você
          </h2>

          <span>
            Ofereço atendimento psicológico individualizado para adolescentes, jovens adultos e adultos, na modalidade 
            online e presencial
          </span>

          <div className="flex justify-around items-start gap-8">
            <div className="flex flex-col items-center gap-6 flex-1">
              <div className="bg-[#9db6cc] text-white font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors">
                Público Atendido
              </div>

              <div className="flex flex-col gap-6 w-full">
                {/* Adolescentes */}
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-6 h-6 bg-[#9db6cc] rounded-full flex items-center justify-center mt-0.5"></div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-lg text-blue-900">Adolescentes (a partir de 14 anos)</h3>

                    <p className="text-gray-700 text-sm leading-relaxed">
                      Questões sobre quem sou, autoestima, relações com a família e amigos, inseguranças, escola,
                      início da vida profissional, pressões do dia a dia e mudanças próprias dessa fase.
                    </p>
                  </div>
                </div>

                {/* Jovem Adulto */}
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-6 h-6 bg-[#9db6cc] rounded-full flex items-center justify-center mt-0.5"></div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-lg text-blue-900">Jovem Adulto</h3>

                    <p className="text-gray-700 text-sm leading-relaxed">
                      Dúvidas sobre o futuro, escolhas profissionais, início da carreira, relações afetivas, autoestima,
                      cobranças internas e externas e momentos de decisão.
                    </p>
                  </div>
                </div>

                {/* Adulto */}
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-6 h-6 bg-[#9db6cc] rounded-full flex items-center justify-center mt-0.5"></div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-lg text-blue-900">Adulto</h3>

                    <p className="text-gray-700 text-sm leading-relaxed">
                      Desafios emocionais do cotidiano, estresse, relações pessoais e familiares, mudanças de vida
                      e busca por mais equilíbrio e bem-estar.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6 flex-1">
              <div className="bg-[#9db6cc] text-white font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors">
                Modalidades de Atendimento
              </div>

              <div className="flex flex-col gap-6 w-full">
                {/* Atendimento Presencial */}
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-6 h-6 bg-[#9db6cc] rounded-full flex items-center justify-center mt-0.5"></div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-lg text-blue-900">Atendimento Presencial</h3>

                    <p className="text-gray-700 text-sm leading-relaxed">
                      Sessões realizadas no consultório localizado em Canoas/RS, em ambiente acolhedor e privativo.
                    </p>
                  </div>
                </div>

                {/* Atendimento Online */}
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-6 h-6 bg-[#9db6cc] rounded-full flex items-center justify-center mt-0.5"></div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-lg text-blue-900">Atendimento Online</h3>

                    <p className="text-gray-700 text-sm leading-relaxed">
                      Sessões realizadas via plataformas digitais, proporcionando conforto e flexibilidade para você.
                    </p>
                  </div>
                </div>

                {/* Duração das sessões */}
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-6 h-6 bg-[#9db6cc] rounded-full flex items-center justify-center mt-0.5"></div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-lg text-blue-900">Duração das sessões</h3>

                    <p className="text-gray-700 text-sm leading-relaxed">
                      Cada sessão tem duração aproximada de 50 minutos, proporcionando um tempo adequado para o desenvolvimento do trabalho terapêutico.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span>
              Cada pessoa chega com sua história, e o espaço é construído para acolher o que faz sentido para você, no seu
              tempo.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;