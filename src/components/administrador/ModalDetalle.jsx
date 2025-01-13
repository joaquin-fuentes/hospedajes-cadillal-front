import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import useFormatDate from "../../hooks/userformatDate";

const ModalDetalle = ({ hospedaje, onClose }) => {
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
      <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-lg w-full max-w-3xl p-8 transition-transform duration-300 ease-out transform scale-95 animate-modal-slide-in max-h-screen overflow-y-auto">
        <div className="flex justify-between items-center border-b border-gray-300 dark:border-gray-700 pb-4">
          <h2 className="text-2xl font-bold">{hospedaje.nombre}</h2>
          <button
            onClick={onClose}
            className="text-red-500 text-2xl hover:text-red-600"
          >
            <FaTimes />
          </button>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p>
              <strong>Dueño:</strong> {hospedaje.nombreDuenio}
            </p>
            <p>
              <strong>Teléfono:</strong> {hospedaje.telefono}
            </p>
            <p>
              <strong>Correo:</strong> {hospedaje.correo}
            </p>
            <p>
              <strong>Tipo:</strong> {hospedaje.tipo}
            </p>
            <p>
              <strong>Ubicación:</strong> {hospedaje.ubicacion}
            </p>
            <p>
              <strong>Fecha de Registro:</strong>{" "}
              {useFormatDate(hospedaje.fechaUltimoPago)}
            </p>
            <p>
              <strong>Fecha de Último Pago:</strong>{" "}
              {useFormatDate(hospedaje.fechaUltimoPago)}
            </p>
            <p>
              <strong>Monto del Pago:</strong> ${hospedaje.montoPago}
            </p>
            <p>
              <strong>Estado de Pago:</strong>{" "}
              {hospedaje.estadoPago === "Pagado" ? (
                <span className="text-green-500">Pagado</span>
              ) : (
                <span className="text-red-500">Pendiente</span>
              )}
            </p>
          </div>
          <div>
            <p>
              <strong>Capacidad:</strong> {hospedaje.capacidadMin} -{" "}
              {hospedaje.capacidadMax} personas
            </p>
            <p>
              <strong>Piscina:</strong> {hospedaje.piscina ? "Sí" : "No"}
            </p>
            <p>
              <strong>Wifi:</strong> {hospedaje.wifi ? "Sí" : "No"}
            </p>
            <p>
              <strong>Precio por Día:</strong> ${hospedaje.precioPorPersona}
            </p>
            <p>
              <strong>Promociones:</strong>{" "}
              {hospedaje.promociones ? "Consulta por promociones" : "No"}
            </p>
            <p>
              <strong>Estado Activo:</strong>{" "}
              {hospedaje.activo ? "Activo" : "Inactivo"}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <p>
            <strong>Descripción:</strong>
          </p>
          <p>{hospedaje.descripcion}</p>
        </div>

        <div
          className={`mt-6 grid gap-4 ${
            hospedaje.imagenes.length === 1
              ? "grid-cols-1"
              : hospedaje.imagenes.length === 2
              ? "grid-cols-2"
              : hospedaje.imagenes.length === 3
              ? "grid-cols-3"
              : hospedaje.imagenes.length === 4
              ? "grid-cols-4"
              : hospedaje.imagenes.length >= 5
              ? "grid-cols-5"
              : "grid-cols-1"
          }`}
        >
          {hospedaje.imagenes.map((img, index) => (
            <div key={index} className="relative">
              <img
                src={img}
                alt={`Imagen ${index + 1}`}
                className="w-full h-32 object-cover rounded shadow-lg"
              />
              <span className="absolute top-2 left-2 bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded-full shadow">
                {index + 1}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-300 dark:bg-gray-600 text-black dark:text-white rounded-lg hover:bg-gray-400 dark:hover:bg-gray-700"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDetalle;
