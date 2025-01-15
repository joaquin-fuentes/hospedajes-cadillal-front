import { AiOutlineCloseCircle } from "react-icons/ai";

const ModalError = ({ mensaje, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-200 rounded-lg shadow-lg p-6 max-w-sm w-full">
        <div className="flex items-center justify-center mb-4">
          <AiOutlineCloseCircle className="text-red-500 text-4xl" />
        </div>
        <h2 className="text-xl font-semibold text-center text-black">Error</h2>
        <p className="text-center text-gray-600 mt-2">{mensaje}</p>
        <button
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg mt-4"
          onClick={onClose}
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  );
};

export default ModalError;
