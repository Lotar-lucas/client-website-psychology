import { FaGraduationCap } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormationModal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    // Backdrop com blur
    <div
      className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#eff0ec] w-full md:w-[90%] lg:w-[80%] max-w-7xl rounded-lg shadow-2xl my-8 px-4 sm:px-6 py-6 sm:py-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center">
          {/* Botão fechar - mobile */}
          <div className="flex justify-end mb-4 md:hidden">
            <button
              onClick={onClose}
              className="text-yellow-400 hover:text-yellow-500"
            >
              <IoMdCloseCircle className="w-8 h-8" />
            </button>
          </div>

          <div className="relative w-full flex justify-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#003366]
              leading-tight text-center md:pr-12"
            >
              Formação e Atualização Profissional
            </h2>

            {/* Botão fechar - desktop */}
            <button
              onClick={onClose}
              className="hidden md:block absolute right-0 top-0 text-yellow-400 hover:text-yellow-500"
            >
              <IoMdCloseCircle className="w-10 h-10" />
            </button>
          </div>

          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg text-justify text-[#003366]
            leading-normal"
          >
          <p>
            Acredito que uma formação sólida e a atualização constante são fundamentais para um
            cuidado psicológico ético, responsável e comprometido com cada pessoa.
          </p>

          <p>
            Minha trajetória em Psicologia foi construída a partir do interesse em compreender o
            comportamento humano de forma ampla, unindo teoria, prática e reflexão contínua. Ao longo
            desse caminho, busquei formações que ampliassem meu olhar e qualificassem minha escuta,
            sempre respeitando a singularidade de cada história.
          </p>

          <div className="space-y-3 mt-6 sm:mt-8">
            <div className="flex gap-3 sm:gap-4">
              <div className="shrink-0">
                <FaGraduationCap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#003366]" />
              </div>

              <div className="pt-1 sm:pt-2">
                <h3 className="font-bold text-[#003366] mb-1 sm:mb-2 text-base sm:text-lg">Formação em Psicologia</h3>

                <p className="text-sm sm:text-base lg:text-lg text-left text-[#003366] leading-snug">
                  Graduação em Psicologia, iniciada na Universidade do Vale do Rio dos Sinos
                  (UNISINOS) e concluída na Faculdade Atitus Educação.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="shrink-0">
                <FaGraduationCap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#003366]" />
              </div>

              <div className="pt-1 sm:pt-2">
                <h3 className="font-bold text-[#003366] mb-1 sm:mb-2 text-base sm:text-lg">Especialização</h3>

                <p className="text-sm sm:text-base lg:text-lg text-left text-[#003366] leading-snug">
                  Especialização em Economia Comportamental, que ampliou minha compreensão
                  sobre escolhas, comportamentos e a relação das pessoas com o dinheiro, sem limitar
                  ou definir o cuidado psicológico.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="shrink-0">
                <FaGraduationCap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#003366]" />
              </div>

              <div className="pt-1 sm:pt-2">
                <h3 className="font-bold text-[#003366] mb-1 sm:mb-2 text-base sm:text-lg">Mentoria</h3>

                <p className="text-sm sm:text-base lg:text-lg text-left text-[#003366] leading-snug">
                  Participação na mentoria VDP – Viver de Psico, voltada ao fortalecimento da atuação
                  em Psicologia, com foco na prática clínica, ética profissional e construção de uma
                  atuação alinhada aos valores da profissão.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="shrink-0">
                <FaGraduationCap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#003366]" />
              </div>

              <div className="pt-1 sm:pt-2">
                <h3 className="font-bold text-[#003366] mb-1 sm:mb-2 text-base sm:text-lg">Cursos e Atualizações</h3>

                <p className="text-sm sm:text-base lg:text-lg text-left text-[#003366] leading-snug">
                  Participo continuamente de cursos, formações complementares e estudos voltados
                  à saúde emocional, adolescência, comportamento humano e desenvolvimento
                  pessoal, entendendo a Psicologia como um campo em constante construção.
                </p>
              </div>
            </div>
          </div>

          <div className="py-3 px-4 sm:py-4 sm:px-8 mt-2">
            <p className="text-sm sm:text-base lg:text-lg font-bold text-center text-[#ebc363]">
              Toda essa trajetória sustenta minha atuação clínica, guiada pela ética, pelo compromisso
              com o sigilo e pelo cuidado em oferecer um espaço seguro, humano e responsável.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FormationModal;
