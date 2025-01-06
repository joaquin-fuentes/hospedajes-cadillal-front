import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useHospedajesStore from "../store/hospedajesStore"; // Importamos el store

const Hospedajes = () => {
  const { hospedajes, fetchHospedajes } = useHospedajesStore(); // Leemos los hospedajes y la función para traerlos desde el store
  const [filtroPiscina, setFiltroPiscina] = useState("todos");
  const [capacidadMax, setCapacidadMax] = useState("");
  const [tipoHospedaje, setTipoHospedaje] = useState("todos");

  // Llamada a la función fetchHospedajes al montar el componente
  useEffect(() => {
    fetchHospedajes(); // Traemos los hospedajes desde la API al montar
  }, [fetchHospedajes]);

  const hospedajesFiltrados = hospedajes.filter((hospedaje) => {
    // Filtro por piscina
    if (
      filtroPiscina !== "todos" &&
      hospedaje.piscina !== (filtroPiscina === "conPiscina")
    ) {
      return false;
    }

    // Filtro por capacidad mínima y máxima
    if (
      capacidadMax !== "" &&
      (hospedaje.capacidadMin > parseInt(capacidadMax) ||
        hospedaje.capacidadMax < parseInt(capacidadMax))
    ) {
      return false;
    }

    // Filtro por tipo de hospedaje
    if (tipoHospedaje !== "todos" && hospedaje.tipo !== tipoHospedaje) {
      return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-6">
      <h1 data-aos="fade-up" className="text-4xl font-bold text-center mb-8">
        Lista de Hospedajes
      </h1>

      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {/* Fila 1: Tipo de hospedaje */}
        <div data-aos="fade-up" className="w-full sm:w-auto">
          <select
            value={tipoHospedaje}
            onChange={(e) => setTipoHospedaje(e.target.value)}
            className="w-full sm:w-auto px-4 py-2 rounded shadow bg-white dark:bg-gray-800"
          >
            <option value="todos">Todos</option>
            <option value="Cabaña">Cabaña</option>
            <option value="Departamento">Departamento</option>
            <option value="Casa">Casa</option>
            <option value="Hostel">Hostel</option>
          </select>
        </div>

        {/* Fila 2: Capacidad de personas */}
        <div data-aos="fade-up" className="w-full sm:w-auto">
          <input
            type="number"
            placeholder="Cantidad de personas"
            value={capacidadMax}
            onChange={(e) => setCapacidadMax(e.target.value)}
            className="w-full sm:w-auto px-4 py-2 rounded shadow bg-white dark:bg-gray-800"
          />
        </div>

        {/* Fila 3: Botones de filtro por piscina */}
        <div
          data-aos="fade-up"
          className="w-full sm:w-auto flex justify-center gap-2"
        >
          <button
            onClick={() => setFiltroPiscina("todos")}
            className={`w-full sm:w-auto px-4 py-2 rounded-full shadow ${
              filtroPiscina === "todos"
                ? "bg-blue-600 dark:bg-yellow-400 dark:text-gray-800 text-white"
                : "bg-gray-200 dark:bg-gray-800"
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setFiltroPiscina("conPiscina")}
            className={`w-full sm:w-auto px-4 py-2 rounded-full shadow ${
              filtroPiscina === "conPiscina"
                ? "bg-blue-600 dark:bg-yellow-400 dark:text-gray-800 text-white"
                : "bg-gray-200 dark:bg-gray-800"
            }`}
          >
            Con Piscina
          </button>
          <button
            onClick={() => setFiltroPiscina("sinPiscina")}
            className={`w-full sm:w-auto px-4 py-2 rounded-full shadow ${
              filtroPiscina === "sinPiscina"
                ? "bg-blue-600 dark:bg-yellow-400 dark:text-gray-800 text-white"
                : "bg-gray-200 dark:bg-gray-800"
            }`}
          >
            Sin Piscina
          </button>
        </div>
      </div>

      {/* Listado de Hospedajes o Mensaje de No Resultados */}
      {hospedajesFiltrados.length === 0 ? (
        <div
          data-aos="fade-up"
          className="text-center text-xl text-gray-600 dark:text-gray-300 mt-8"
        >
          No hay hospedajes que cumplan con los criterios de búsqueda.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {hospedajesFiltrados.map((hospedaje) => (
            <div
              data-aos="fade-up"
              key={hospedaje._id} // Asegúrate de usar `_id` del backend
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={hospedaje.imagenes[0]}
                alt={hospedaje.nombre}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">
                  {hospedaje.nombre}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-1">
                  {hospedaje.descripcion}
                </p>

                <p className="text-sm mt-2">
                  <strong>Capacidad:</strong> {hospedaje.capacidadMin} -{" "}
                  {hospedaje.capacidadMax} personas
                </p>
                <p className="text-sm mt-1">
                  <strong>Piscina:</strong> {hospedaje.piscina ? "Sí" : "No"}
                </p>
                <p className="text-sm mt-1">
                  <strong>Tipo:</strong> {hospedaje.tipo}
                </p>
                <div className="flex justify-center mt-4">
                  <Link
                    to={`/hospedaje/${hospedaje._id}`} // Se usa `_id` si viene del backend
                    className="bg-blue-600 dark:bg-yellow-400 dark:text-gray-800 text-white py-2 px-4 rounded-full hover:bg-blue-700 dark:hover:bg-yellow-500 transition duration-300"
                  >
                    Ver más detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Hospedajes;
