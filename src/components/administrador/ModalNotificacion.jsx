import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const ModalNotificacion = ({ mensaje, tipo, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timeout = setTimeout(() => {
      setShow(false);
      setTimeout(onClose, 300); // Retraso para cerrar tras la animación de salida
    }, 3000); // Cierra automáticamente después de 3 segundos

    return () => clearTimeout(timeout);
  }, [onClose]);

  const icon =
    tipo === "success" ? (
      <FaCheckCircle className="text-4xl text-green-500 animate-pulse" />
    ) : (
      <FaExclamationCircle className="text-4xl text-red-500 animate-pulse" />
    );

  return (
    <div
      id="modal-overlay-notificacion"
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0"
      }`}
      onClick={(e) => e.target.id === "modal-overlay-notificacion" && onClose()}
    >
      <div
        className={`bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-lg p-8 max-w-sm transform transition-transform duration-300 ${
          show ? "scale-100" : "scale-90"
        }`}
      >
        <div className="flex items-center justify-center mb-4">{icon}</div>
        <h2 className="text-center font-semibold text-lg">{mensaje}</h2>
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => {
              setShow(false);
              setTimeout(onClose, 300); // Llamar al cierre después de la animación de salida
            }}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalNotificacion;
