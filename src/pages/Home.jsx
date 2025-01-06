import React, { useEffect } from "react";
import { FaCheckCircle, FaShieldAlt, FaUserFriends } from "react-icons/fa";
import ImgPortada from "../assets/images/fotoBanner7.jpg";
import { Link } from "react-router-dom";
import useHospedajesStore from "../store/hospedajesStore"; // Importamos el store

const Home = () => {
  const { hospedajes, fetchHospedajes } = useHospedajesStore(); // Leemos los hospedajes y la función para cargarlos

  // Cargar los hospedajes al montar el componente
  useEffect(() => {
    fetchHospedajes(); // Traemos los hospedajes desde la API
  }, [fetchHospedajes]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <section className="relative bg-blue-600 dark:bg-yellow-500 text-white py-16 px-8 text-center lg:text-left">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div data-aos="fade-up" className="flex-1">
            <h1 className="text-5xl font-bold leading-tight">
              Encuentra tu hospedaje seguro en
              <span className="text-yellow-300 dark:text-gray-700 md:ms-2 block md:inline">
                El Cadillal
              </span>
            </h1>
            <p className="mt-6 text-lg">
              Descubre la mejor experiencia turística con alojamientos
              verificados, confiables y seguros.
            </p>
            <div className="mt-8 flex gap-4 justify-center lg:justify-start">
              <Link
                to={"/hospedajes"}
                className="px-6 py-3 bg-yellow-300 text-blue-800 dark:text-gray-800 font-semibold rounded-full shadow-lg hover:bg-yellow-400 transition duration-300"
              >
                Buscar Hospedaje
              </Link>
              <Link
                to={"/registro-hospedaje"}
                className="px-6 py-3 bg-white dark:bg-gray-800 text-blue-800 dark:text-white font-semibold rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
              >
                Registrar mi Hospedaje
              </Link>
            </div>
          </div>
          <div data-aos="fade-up" className="flex-1">
            <img
              src={ImgPortada}
              alt="Hospedaje seguro"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 px-8">
        <h2 data-aos="fade-up" className="text-4xl font-bold text-center">
          Por qué confiar en nosotros
        </h2>
        <p
          data-aos="fade-up"
          className="text-center mt-4 text-gray-600 dark:text-gray-300"
        >
          Seguridad y transparencia en cada paso.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div
            data-aos="fade-up"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center"
          >
            <FaCheckCircle className="text-yellow-400 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold">Hospedajes Verificados</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Todos los alojamientos son revisados para garantizar autenticidad
              y evitar estafas.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center"
          >
            <FaShieldAlt className="text-blue-600 dark:text-yellow-400 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold">
              Tu Seguridad es Nuestra Prioridad
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Implementamos medidas de seguridad para proteger a los anfitriones
              y turistas.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center"
          >
            <FaUserFriends className="text-green-500 dark:text-yellow-400 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold">Crecimiento de Comunidad</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Cada día más alojamientos y usuarios se suman a nuestra plataforma
              confiable.
            </p>
          </div>
        </div>
      </section>

      {/* Registro Creciente */}
      <section className="bg-gray-200 dark:bg-gray-800 py-16 px-8 text-center">
        <h2 data-aos="fade-up" className="text-4xl font-bold">
          Hospedajes Registrados
        </h2>
        <p data-aos="fade-up" className="mt-4 text-gray-600 dark:text-gray-300">
          Descubre los mejores alojamientos ya registrados.
        </p>
        <div data-aos="fade-up" className="mt-8">
          <span className="text-6xl font-extrabold text-blue-600 dark:text-yellow-400">
            +{hospedajes.length}
          </span>
          <p className="text-xl font-medium">Hospedajes disponibles</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-8 bg-white dark:bg-gray-900 text-center">
        <h2 data-aos="fade-up" className="text-4xl font-bold">
          ¿Listo para encontrar tu hospedaje?
        </h2>
        <p data-aos="fade-up" className="mt-4 text-gray-600 dark:text-gray-300">
          ¡Es fácil y seguro! Encuentra el lugar perfecto en solo unos clics.
        </p>
        <div data-aos="fade-up" className="mt-8">
          <Link
            to={"/hospedajes"}
            className="px-8 py-4 bg-yellow-300 text-blue-800 dark:text-gray-800 font-semibold rounded-full shadow-lg hover:bg-yellow-400 transition duration-300"
          >
            Comienza ahora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
