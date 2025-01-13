import React from "react";
import { Link } from "react-router-dom";
import { FaSwimmingPool, FaWifi, FaUsers } from "react-icons/fa"; // Importar los íconos

const CardHospedaje = ({ hospedaje }) => {
  return (
    <div
      data-aos="fade-up"
      key={hospedaje._id}
      className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group hover:scale-105 transform transition-all duration-300"
    >
      <img
        src={hospedaje.imagenes[0]}
        alt={hospedaje.nombre}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition duration-300 flex flex-col justify-between p-4">
        <div>
          <h2 className="text-xl font-bold text-white">{hospedaje.nombre}</h2>
          <p className="text-white text-sm mt-1 flex items-center gap-1">
            <strong>Capacidad:</strong> {hospedaje.capacidadMin} -{" "}
            {hospedaje.capacidadMax} personas <FaUsers className="text-white" />
          </p>
          <p className="text-white text-sm">
            <strong>Tipo:</strong> {hospedaje.tipo}
          </p>
        </div>

        <div className="flex justify-between items-center mt-2">
          <div className="flex gap-2">
            {/* Icono de WiFi */}
            {hospedaje.wifi && (
              <span className="text-white text-lg flex items-center gap-1">
                <FaWifi />
              </span>
            )}
            {/* Icono de Piscina */}
            {hospedaje.piscina && (
              <span className="text-white text-lg flex items-center gap-1">
                <FaSwimmingPool />
              </span>
            )}
          </div>
          <Link
            to={`/hospedaje/${hospedaje._id}`}
            className="bg-blue-700 dark:bg-yellow-400 text-white dark:text-black py-1 px-3 rounded-full hover:bg-blue-900 dark:hover:bg-yellow-500"
          >
            Ver más detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardHospedaje;
