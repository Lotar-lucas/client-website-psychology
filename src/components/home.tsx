import { Heart, Lock } from 'lucide-react';
import { FaCheckCircle, FaHandshake } from 'react-icons/fa';

interface HomeProps {
  headerHeight: number;
}

const Home = ({ headerHeight }: HomeProps) => {
  return (
    <section
      id="home"
      className="flex justify-center bg-[#eff0ec] w-full px-2 xs:px-3 sm:px-6"
      style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
    >
      <div className="flex justify-around items-center max-w-350 h-full pt-8 sm:pt-12 lg:pt-20 pb-6 sm:pb-9">
        <div
          className="flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-12 w-full"
          data-aos="fade-up"
        >
          <div className="w-full lg:flex-2 text-left flex flex-col justify-between gap-3 sm:gap-4">
            <div className="flex flex-col gap-3 sm:gap-2">
              <span className="text-sm sm:text-base lg:text-lg text-[#003366] font-medium">
                Seja bem-vindo(a)!
              </span>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-[#003366]
              leading-tight pt-4 sm:pt-8 lg:pt-12">
                Um espaço de acolhimento para cuidar da sua saúde mental
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-[#003366] text-left pt-4 sm:pt-6 lg:pt-8">
                A psicoterapia é um espaço de autoconhecimento, cuidado emocional
                e desenvolvimento pessoal. Aqui, você encontra um ambiente seguro
                e respeitoso para compartilhar suas experiências e construir novas
                possibilidades.
              </p>
            </div>

            {/* Botões Desktop */}
            <div className="hidden lg:flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 lg:pt-8">
              <a href="#about" className="bg-yellow-400 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3
                rounded-lg hover:bg-yellow-500 hover:scale-110 hover:shadow-lg transition-all duration-500 ease-in-out inline-block text-center">

                <span className='text-sm sm:text-base lg:text-lg'>Saiba mais sobre mim</span>
              </a>

              <a href="#contact" className="bg-yellow-400 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3
                rounded-lg hover:bg-yellow-500 hover:scale-110 hover:shadow-lg transition-all duration-500 ease-in-out inline-block text-center">

                <span className='text-sm sm:text-base lg:text-lg'>Entre em contato</span>
              </a>
            </div>
          </div>

          <div className="w-full lg:flex-2 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 w-full pt-8 sm:pt-16 lg:pt-28">
                <div className="bg-[#9db6cc] rounded-2xl sm:rounded-3xl p-3 sm:p-3 lg:p-4
                flex flex-col items-center justify-center text-center min-h-20 sm:min-h-24 lg:min-h-20">
                  <Heart className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-yellow-400" />

                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-blue-900 mt-2">Acolhimento</h3>
                </div>

                <div className="bg-[#9db6cc] rounded-2xl sm:rounded-3xl p-3 sm:p-3 lg:p-4
                flex flex-col items-center justify-center text-center min-h-20 sm:min-h-24 lg:min-h-20">
                  <Lock className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#7b9f6b]" />

                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-blue-900 mt-2">Sigilo</h3>
                </div>

                <div className="bg-[#9db6cc] rounded-2xl sm:rounded-3xl p-3 sm:p-3 lg:p-4
                flex flex-col items-center justify-center text-center min-h-20 sm:min-h-24 lg:min-h-20">
                  <FaCheckCircle className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />

                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-blue-900 mt-2">Escuta Qualificada</h3>
                </div>

                <div className="bg-[#9db6cc] rounded-2xl sm:rounded-3xl p-3 sm:p-3 lg:p-4
                flex flex-col items-center justify-center text-center min-h-20 sm:min-h-24 lg:min-h-20">
                  <FaHandshake className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#003366]" />

                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-blue-900 mt-2">Respeito</h3>
                </div>
              </div>
          </div>

          {/* Botões Mobile */}
          <div className="flex lg:hidden flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
            <a href="#about" className="bg-yellow-400 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg
            hover:bg-yellow-500 hover:scale-110 hover:shadow-lg transition-all duration-500 ease-in-out inline-block text-center">
              <span className='text-sm sm:text-base'>Saiba mais sobre mim</span>
            </a>

            <a href="#contact" className="bg-yellow-400 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg
            hover:bg-yellow-500 hover:scale-110 hover:shadow-lg transition-all duration-500 ease-in-out inline-block text-center">
              <span className='text-sm sm:text-base'>Entre em contato</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
