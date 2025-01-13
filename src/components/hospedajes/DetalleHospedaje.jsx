import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useHospedajesStore from "../../store/hospedajesStore"; // Importamos el store
import { FaWhatsapp } from "react-icons/fa"; // Icono de WhatsApp
import Slider from "react-slick"; // Importamos el slider
import Loading from "../Loading";

const DetalleHospedaje = () => {
  const { id } = useParams(); // Obtenemos el ID del hospedaje desde la URL
  const { hospedajes, fetchHospedajeById } = useHospedajesStore(); // Accedemos al store
  const [hospedaje, setHospedaje] = useState(null); // Estado local para el hospedaje
  const [currentSlide, setCurrentSlide] = useState(0); // Slide actual

  useEffect(() => {
    const cargarHospedaje = async () => {
      let encontrado = hospedajes.find((h) => h._id === id); // Buscar hospedaje en la lista del store
      if (!encontrado) {
        // Si no está en la lista, hacer petición al backend
        encontrado = await fetchHospedajeById(id);
      }
      setHospedaje(encontrado); // Guardar hospedaje en el estado local
    };

    cargarHospedaje(); // Ejecutar al montar el componente
  }, [id, hospedajes, fetchHospedajeById]);

  if (!hospedaje) {
    return (
      // <div className="h-screen flex flex-col items-center justify-center text-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-6">
      //   <h1 className="text-3xl font-bold mb-4">Hospedaje no encontrado</h1>
      //   <Link
      //     to="/hospedajes"
      //     className="bg-blue-600 dark:bg-yellow-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 dark:hover:bg-yellow-600 transition duration-300"
      //   >
      //     Volver a la lista de hospedajes
      //   </Link>
      // </div>
      <Loading texto="Cargando hospedaje..."></Loading>
    );
  }

  // Configuración del slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (prev, next) => setCurrentSlide(next), // Cambia el slide activo
    customPaging: (i) => (
      <div
        className={`w-3 h-3 mt-2 rounded-full ${
          currentSlide === i ? "bg-yellow-500 scale-125" : "bg-gray-200"
        } hover:bg-yellow-600 transition-all`}
      />
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-6">
      <div className="max-w-5xl mx-auto">
        {/* Título */}
        <h2
          data-aos="fade-up"
          className="text-4xl text-center md:text-start font-bold mb-4"
        >
          {hospedaje.nombre}
        </h2>
        <p
          data-aos="fade-up"
          className="text-lg mb-8 text-center md:text-start"
        >
          {hospedaje.descripcion}
        </p>

        {/* Slider de imágenes */}
        <div data-aos="fade-up" className="mb-8 px-4 sm:px-0">
          {" "}
          {/* Espaciado en los costados en móviles */}
          <div className="slider-container">
            <Slider {...settings}>
              {hospedaje.imagenes.map((imagen, index) => (
                <div key={index} className="px-2">
                  <img
                    src={imagen || "https://via.placeholder.com/400x300"}
                    alt={`Imagen ${index + 1}`}
                    className="rounded-lg shadow-lg w-full h-60 md:h-80 object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Detalles del hospedaje */}
        <div
          data-aos="fade-up"
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 mt-12"
        >
          <h2 className="text-2xl font-semibold mb-4">
            Detalles del Hospedaje
          </h2>
          <p>
            <strong>Tipo de Hospedaje:</strong> {hospedaje.tipo}
          </p>
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
            <strong>Ubicación:</strong> {hospedaje.ubicacion}
          </p>
          <p>
            <strong>Precio por día:</strong> ${hospedaje.precioPorPersona} por
            persona
          </p>
        </div>

        {/* Contenedor de botones */}
        <div
          data-aos="fade-up"
          className="text-center mb-6 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={`https://wa.me/${
              hospedaje.telefono
            }?text=Hola,%20estoy%20interesado%20en%20el%20hospedaje%20${encodeURIComponent(
              hospedaje.nombre
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full shadow-lg transition duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <FaWhatsapp className="text-2xl" />
            Consultar por WhatsApp
          </a>

          <Link
            to="/hospedajes"
            className="bg-blue-600 dark:bg-yellow-500 text-white py-3 px-6 rounded-full hover:bg-blue-700 dark:hover:bg-yellow-600 transition duration-300 w-full sm:w-auto"
          >
            Volver a la lista de hospedajes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetalleHospedaje;
