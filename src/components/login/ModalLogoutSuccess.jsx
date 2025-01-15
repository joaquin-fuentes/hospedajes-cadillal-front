import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ModalLogoutSuccess = ({ onClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
      navigate("/"); // Redirige al Home tras unos segundos
    }, 2000); // 2 segundos de delay

    return () => clearTimeout(timer);
  }, [navigate, onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-green-500">¡Sesión cerrada!</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          Has cerrado sesión correctamente.
        </p>
      </div>
    </div>
  );
};

export default ModalLogoutSuccess;
