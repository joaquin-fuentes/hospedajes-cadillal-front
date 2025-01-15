import { AiOutlineCheckCircle } from "react-icons/ai";

const ModalSuccess = ({ mensaje, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <div className="flex items-center justify-center mb-4">
          <AiOutlineCheckCircle className="text-green-500 text-4xl" />
        </div>
        <h2 className="text-xl font-semibold text-center text-black">
          ¡Éxito!
        </h2>
        <p className="text-center text-gray-600 mt-2">{mensaje}</p>
        <button
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg mt-4"
          onClick={onClose}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default ModalSuccess;
