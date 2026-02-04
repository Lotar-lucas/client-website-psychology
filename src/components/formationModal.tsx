interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormationModal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4" 
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-8 max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-serif font-bold text-blue-900">Minha Formação</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-3xl font-bold"
          >
            ×
          </button>
        </div>

        <div className="space-y-4 text-gray-700">
          sdad
        </div>
      </div>
    </div>
  );
};

export default FormationModal;
