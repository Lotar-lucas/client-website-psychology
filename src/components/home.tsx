interface HomeProps {
  headerHeight: number;
}

const Home = ({ headerHeight }: HomeProps) => {
  return (
    <section
      id="home"
      className="flex justify-center bg-[#eff0ec] w-full px-6 py-8"
      style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
    >
      <div className="flex justify-around items-center max-w-8xl px-6 py-2">
        <div className="flex justify-center items-center gap-12 max-w-5xl w-full " data-aos="fade-up"> 
          <div className="flex-2 text-left flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-4">
              <span className="text-sm text-blue-900 font-medium">
                Seja bem-vindo(a)
              </span>

              <h1 className="text-4xl font-serif font-bold text-blue-900 leading-tight">
                Um espaço de acolhimento para cuidar da sua saúde mental
              </h1>

              <p className="text-base text-blue-900 text-justify">
                A psicoterapia é um espaço de autoconhecimento, cuidado emocional
                e desenvolvimento pessoal. Aqui, você encontra um ambiente seguro
                e respeitoso para compartilhar suas experiências e construir novas
                possibilidades.
              </p>
            </div>

            <div className="flex gap-4">
              <button className="bg-yellow-400 text-white font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors">
                Saiba mais sobre mim
              </button>

              <button className="bg-yellow-400 text-white font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors">
                Entre em contato
              </button>
            </div>
          </div>

          <div className="flex-2 flex items-center">
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="bg-blue-300 rounded-2xl p-4 flex flex-col items-center justify-center text-center min-h-25">
                <span className="text-3xl mb-2">💛</span>
                <h3 className="text-base font-bold text-blue-900">Acolhimento</h3>
              </div>

              <div className="bg-blue-300 rounded-2xl p-4 flex flex-col items-center justify-center text-center min-h-25">
                <span className="text-3xl mb-2">🔒</span>
                <h3 className="text-base font-bold text-blue-900">Sigilo</h3>
              </div>

              <div className="bg-blue-300 rounded-2xl p-4 flex flex-col items-center justify-center text-center min-h-25">
                <span className="text-3xl mb-2">✓</span>
                <h3 className="text-base font-bold text-blue-900">
                  Escuta Qualificada
                </h3>
              </div>

              <div className="bg-blue-300 rounded-2xl p-4 flex flex-col items-center justify-center text-center min-h-25">
                <span className="text-3xl mb-2">🤝</span>
                <h3 className="text-base font-bold text-blue-900">Respeito</h3>
              </div>
            </div>
          </div>
          </div>
      </div>
    </section>
  );
};

export default Home;
