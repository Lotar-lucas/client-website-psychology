import { Heart, Lock } from 'lucide-react';
import { FaCheckCircle, FaHandshake } from 'react-icons/fa';

interface HomeProps {
  headerHeight: number;
}

const Home = ({ headerHeight }: HomeProps) => {
  return (
    <section
      id="home"
      className="flex justify-center bg-[#eff0ec] w-full px-6"
      style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
    >
      <div className="flex justify-around items-center max-w-7xl h-full pt-10 pb-9">
        <div className="flex justify-center items-center gap-12" data-aos="fade-up">
          <div className="flex-2 text-left flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-4">
              <span className="text-lg text-blue-900 font-medium">
                Seja bem-vindo(a)!
              </span>

              <h1 className="text-5xl font-serif font-bold text-blue-900 leading-tight pt-12">
                Um espaço de acolhimento para cuidar da sua saúde mental
              </h1>

              <p className="text-lg text-blue-900 text-left pt-8">
                A psicoterapia é um espaço de autoconhecimento, cuidado emocional
                e desenvolvimento pessoal. Aqui, você encontra um ambiente seguro
                e respeitoso para compartilhar suas experiências e construir novas
                possibilidades.
              </p>
            </div>

            <div className="flex gap-4 pt-8">
              <button className="bg-yellow-400 text-white font-semibold rounded-4xl hover:bg-yellow-500 transition-colors">
                <span className='text-lg'>Saiba mais sobre mim</span>
              </button>

              <button className="bg-yellow-400 text-white font-semibold rounded-4xl hover:bg-yellow-500 transition-colors">
                <span className='text-lg'>Entre em contato</span>
              </button>
            </div>
          </div>

          <div className="flex-2 flex items-center">
              <div className="grid grid-cols-2 gap-8 w-full pt-28">
                <div className="bg-[#9db6cc] rounded-3xl p-2 flex flex-col items-center justify-center text-center min-h-25">
                  <Heart className="w-13 h-13 text-yellow-400" />

                  <h3 className="text-base font-bold text-blue-900">Acolhimento</h3>
                </div>

                <div className="bg-[#9db6cc] rounded-3xl p-2 flex flex-col items-center justify-center text-center min-h-25">
                  <Lock className="w-13 h-13 text-[#7b9f6b]" />

                  <h3 className="text-base font-bold text-blue-900">Sigilo</h3>
                </div>

                <div className="bg-[#9db6cc] rounded-3xl p-2 flex flex-col items-center justify-center text-center min-h-25">
                  <FaCheckCircle className="w-13 h-13 text-white" />

                  <h3 className="text-base font-bold text-blue-900">Escuta Qualificada</h3>
                </div>

                <div className="bg-[#9db6cc] rounded-3xl p-2 flex flex-col items-center justify-center text-center min-h-25">
                  <FaHandshake className="w-13 h-13 text-[#003366]" />

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
