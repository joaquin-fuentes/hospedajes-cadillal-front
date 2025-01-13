import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useHospedajesStore from "../store/hospedajesStore";
import CardHospedaje from "../components/hospedajes/CardHospedaje";
import Loading from "../components/Loading";

const Hospedajes = () => {
  const { hospedajes, fetchHospedajes } = useHospedajesStore();
  const [hospedajesAleatorios, setHospedajesAleatorios] = useState([]);
  const [filtroPiscina, setFiltroPiscina] = useState("todos");
  const [capacidadMax, setCapacidadMax] = useState("");
  const [tipoHospedaje, setTipoHospedaje] = useState("todos");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHospedajes(); // Traer los hospedajes desde la API
  }, [fetchHospedajes]);

  useEffect(() => {
    verificarMezcla(); // Verificar si es necesario mezclar los hospedajes
  }, [hospedajes]);

  // Función para verificar si se debe mezclar
  const verificarMezcla = () => {
    const ultimaMezcla = localStorage.getItem("ultimaMezclaHospedajes");
    const hoy = new Date().toISOString().split("T")[0]; // Obtener fecha actual en formato YYYY-MM-DD

    if (ultimaMezcla !== hoy) {
      mezclarHospedajes(); // Mezclar hospedajes si la fecha no coincide
      localStorage.setItem("ultimaMezclaHospedajes", hoy); // Guardar la fecha actual en localStorage
    } else {
      setHospedajesAleatorios(hospedajes); // Si no se mezcla, mostrar los hospedajes tal como están
    }
    setLoading(false); // Terminar el loading después de verificar
  };

  // Función para mezclar los hospedajes
  const mezclarHospedajes = () => {
    if (hospedajes.length > 0) {
      const hospedajesMezclados = [...hospedajes].sort(
        () => Math.random() - 0.5
      );
      setHospedajesAleatorios(hospedajesMezclados);
    }
  };

  // Filtrar hospedajes según los criterios de filtro
  const hospedajesFiltrados = hospedajesAleatorios.filter((hospedaje) => {
    if (
      filtroPiscina !== "todos" &&
      hospedaje.piscina !== (filtroPiscina === "conPiscina")
    ) {
      return false;
    }

    if (
      capacidadMax !== "" &&
      (hospedaje.capacidadMin > parseInt(capacidadMax) ||
        hospedaje.capacidadMax < parseInt(capacidadMax))
    ) {
      return false;
    }

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

      <div className="flex flex-wrap justify-center gap-4 mb-8">
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

        <div data-aos="fade-up" className="w-full sm:w-auto">
          <input
            type="number"
            placeholder="Cantidad de personas"
            value={capacidadMax}
            onChange={(e) => setCapacidadMax(e.target.value)}
            className="w-full sm:w-auto px-4 py-2 rounded shadow bg-white dark:bg-gray-800"
          />
        </div>

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

      {loading ? (
        <Loading texto="Cargando hospedajes..." />
      ) : hospedajesFiltrados.length === 0 ? (
        <Loading texto="Cargando hospedajes..." />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {hospedajesFiltrados.map((hospedaje) => (
            <CardHospedaje key={hospedaje._id} hospedaje={hospedaje} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Hospedajes;
