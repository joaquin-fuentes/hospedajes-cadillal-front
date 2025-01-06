import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const ModalEliminar = ({ hospedaje, onClose, onConfirmDelete }) => {
  const handleClickOutside = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      id="modal-overlay"
      onClick={handleClickOutside}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-lg w-full max-w-lg p-6 max-h-screen overflow-y-auto transition-transform duration-300 ease-out transform scale-95 animate-modal-slide-in">
        <div className="flex justify-between items-center border-b border-gray-300 dark:border-gray-700 pb-4">
          <h2 className="text-2xl font-bold text-red-600">
            Confirmar Eliminación
          </h2>
          <button
            onClick={onClose}
            className="text-red-500 text-2xl hover:text-red-600"
          >
            <FaTimes />
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-lg">
            ¿Estás seguro de que deseas eliminar el hospedaje{" "}
            <span className="font-semibold text-blue-600 dark:text-yellow-300">
              {hospedaje.nombre}
            </span>
            ?
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Esta acción no se puede deshacer.
          </p>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-300 dark:bg-gray-600 text-black dark:text-white rounded-lg hover:bg-gray-400 dark:hover:bg-gray-700 transition-all"
          >
            No, cancelar
          </button>
          <button
            onClick={() => onConfirmDelete(hospedaje._id)}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all"
          >
            Sí, eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEliminar;
