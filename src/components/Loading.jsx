import React from "react";
import { FaSpinner } from "react-icons/fa"; // Ícono de carga giratoria
import PropTypes from "prop-types";

const Loading = ({ texto = "Cargando..." }) => {
  return (
    <div className="flex justify-center items-center space-x-4 p-6 bg-gray-100 dark:bg-gray-900">
      {/* Icono de carga giratorio */}
      <FaSpinner className="animate-spin text-blue-600 dark:text-yellow-400 text-4xl" />
      {/* Texto dinámico recibido por prop */}
      <p className="text-lg font-semibold text-gray-700 dark:text-white">
        {texto}
      </p>
    </div>
  );
};

// Validación de `props` para asegurarnos de recibir un `string`
Loading.propTypes = {
  texto: PropTypes.string,
};

export default Loading;
