import { FaGraduationCap } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormationModal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-[#eff0ec] z-50 overflow-y-auto w-full px-6 pb-8"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex flex-col items-center max-w-5xl mx-auto px-6 py-8">
        <div className="relative w-full flex justify-center mb-8">
          <h2 className="text-5xl font-serif font-bold text-blue-900 leading-tight text-center">
            Formação e Atualização Profissional
          </h2>

          <button
            onClick={onClose}
            className="absolute right-0 top-0 text-blue-900 hover:text-blue-700 text-5xl font-bold leading-none"
          >
            <IoMdCloseCircle className="w-10 h-10" />
          </button>
        </div>

        <div className="space-y-6 text-lg text-justify text-blue-900 max-w-7xl leading-normal">
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

          <div className="space-y-3 mt-8">
            <div className="flex gap-4">
              <div className="shrink-0">
                <FaGraduationCap className="w-12 h-12 text-blue-900" />
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-blue-900 mb-2">Formação em Psicologia</h3>

                <p className="text-lg text-left text-blue-900 leading-snug">
                  Graduação em Psicologia, iniciada na Universidade do Vale do Rio dos Sinos
                  (UNISINOS) e concluída na Faculdade Attus Educação.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0">
                <FaGraduationCap className="w-12 h-12 text-blue-900" />
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-blue-900 mb-2">Especialização</h3>

                <p className="text-lg text-left text-blue-900 leading-snug">
                  Especialização em Economia Comportamental, que ampliou minha compreensão
                  sobre escolhas, comportamentos e a relação das pessoas com o dinheiro, sem limitar
                  ou definir o cuidado psicológico.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0">
                <FaGraduationCap className="w-12 h-12 text-blue-900" />
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-blue-900 mb-2">Mentoria</h3>

                <p className="text-lg text-left text-blue-900 leading-snug">
                  Participação na mentoria VDP – Viver de Psico, voltada ao fortalecimento da atuação
                  em Psicologia, com foco na prática clínica, ética profissional e construção de uma
                  atuação alinhada aos valores da profissão.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0">
                <FaGraduationCap className="w-12 h-12 text-blue-900" />
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-blue-900 mb-2">Cursos e Atualizações</h3>

                <p className="text-lg text-left text-blue-900 leading-snug">
                  Participo continuamente de cursos, formações complementares e estudos voltados
                  à saúde emocional, adolescência, comportamento humano e desenvolvimento
                  pessoal, entendendo a Psicologia como um campo em constante construção.
                </p>
              </div>
            </div>
          </div>

          <div className="py-4 px-8 mt-2">
            <p className="text-lg font-bold text-center text-[#ebc363]">
              Toda essa trajetória sustenta minha atuação clínica, guiada pela ética, pelo compromisso
              com o sigilo e pelo cuidado em oferecer um espaço seguro, humano e responsável.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationModal;
