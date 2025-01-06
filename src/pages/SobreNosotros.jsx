import React from "react";
import { Link } from "react-router-dom";

const SobreNosotros = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-6">
      <div
        data-aos="fade-up"
        className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
      >
        <h2 data-aos="fade-up" className="text-4xl font-bold text-center mb-6">
          Sobre Nosotros
        </h2>
        <p
          data-aos="fade-up"
          className="text-center text-gray-600 dark:text-gray-300 mb-8"
        >
          Una plataforma creada con amor y dedicación para mejorar la
          experiencia de todos los que eligen El Cadillal como su destino
          turístico.
        </p>

        {/* Historia del Proyecto */}
        <div className="mb-12">
          <h2 data-aos="fade-up" className="text-2xl font-semibold mb-4">
            Nuestra Historia
          </h2>
          <p data-aos="fade-up" className="text-lg text-justify mb-4">
            Soy un desarrollador que vive en El Cadillal, un lugar maravilloso
            rodeado de naturaleza, montañas y experiencias únicas. Vi una
            problemática creciente: la falta de seguridad y confianza en los
            alquileres temporales. Muchos visitantes llegaban con dudas y
            algunos propietarios temían ser víctimas de estafas. Con esto en
            mente, decidí crear una plataforma que sirviera como puente de
            confianza entre los dueños de hospedajes y los turistas, para que
            cada experiencia sea segura, auténtica y placentera.
          </p>
          <p data-aos="fade-up" className="text-lg text-justify">
            Hoy en día, seguimos trabajando para hacer crecer esta comunidad,
            agregando cada vez más opciones verificadas y mejorando el sistema
            para brindar la mejor experiencia tanto a los viajeros como a los
            anfitriones.
          </p>
        </div>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div
            data-aos="fade-up"
            className="bg-blue-100 dark:bg-blue-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">Nuestra Misión</h3>
            <p>
              Fomentar la confianza, la seguridad y la tranquilidad en cada
              reserva, conectando a los turistas con los mejores hospedajes de
              El Cadillal, garantizando experiencias inolvidables.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="bg-yellow-100 dark:bg-yellow-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">Nuestra Visión</h3>
            <p>
              Ser la plataforma líder en hospedajes de El Cadillal, conocida por
              su transparencia, compromiso y valor agregado para toda la
              comunidad.
            </p>
          </div>
        </div>

        {/* Frase Inspiradora */}
        <div
          data-aos="fade-up"
          className="text-center italic text-blue-500 dark:text-yellow-400 text-lg mb-12"
        >
          "Un destino increíble merece una experiencia inolvidable, segura y
          confiable."
        </div>

        {/* Equipo */}
        <div className="mb-12">
          <h2 data-aos="fade-up" className="text-2xl font-semibold mb-4">
            Nuestro Equipo
          </h2>
          <p data-aos="fade-up" className="text-lg text-justify">
            Aunque soy un desarrollador independiente, cuento con el apoyo de
            amigos y familiares que me inspiran cada día a mejorar este
            proyecto. Desde revisar cada detalle hasta probar la plataforma,
            todos ellos son parte fundamental de esta iniciativa.
          </p>
        </div>

        {/* Beneficios para los Usuarios */}
        <div
          data-aos="fade-up"
          className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4 text-center">
            ¿Por qué Elegirnos?
          </h3>
          <ul className="list-disc list-inside text-lg">
            <li>Hospedajes verificados para mayor tranquilidad.</li>
            <li>Contacto directo con los propietarios.</li>
            <li>Filtros avanzados para encontrar el hospedaje ideal.</li>
            <li>Transparencia en cada reserva.</li>
            <li>Interfaz fácil de usar y adaptada a todos los dispositivos.</li>
          </ul>
        </div>

        {/* Imagen Representativa */}
        <div data-aos="fade-up" className="text-center mb-12">
          <img
            src="https://www.infoviajera.com/wp-content/uploads/2023/01/El-Cadillal-Tucuman-Yo-Amo.jpg"
            alt="Paisaje de El Cadillal"
            className="rounded-lg shadow-lg w-full md:w-2/3 mx-auto"
          />
        </div>

        {/* Sección de Contacto Rápido */}
        <div className="text-center">
          <h2 data-aos="fade-up" className="text-2xl font-semibold mb-4">
            ¿Tienes Preguntas?
          </h2>
          <p data-aos="fade-up" className="text-lg mb-6">
            Estamos aquí para ayudarte. Si tienes dudas o sugerencias, no dudes
            en contactarnos.
          </p>
          <Link
            data-aos="fade-up"
            to="/contacto"
            className="bg-blue-600 hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white py-3 px-6 rounded-full shadow-lg transition duration-300"
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SobreNosotros;
