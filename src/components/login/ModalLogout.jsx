import React from "react";

const ModalLogout = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-yellow-400 mb-4">
          ¿Estás seguro?
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          ¿Quieres cerrar sesión? Esta acción te llevará a la página de inicio.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onConfirm}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Sí, cerrar sesión
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalLogout;
