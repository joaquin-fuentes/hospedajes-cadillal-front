import React from "react";

const PoliticaPrivacidad = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-6">
      <div
        data-aos="fade-up"
        className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
      >
        <h1 className="text-4xl font-bold text-center mb-6">
          Política de Privacidad
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Tu privacidad es importante para nosotros. A continuación, te
          explicamos cómo manejamos tu información personal y cómo protegemos
          tus datos.
        </p>

        {/* Información general */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            1. Información General
          </h2>
          <p className="text-lg text-justify">
            Esta política de privacidad describe cómo recopilamos, usamos y
            protegemos tu información personal cuando visitas nuestra
            plataforma. Al utilizar nuestro sitio web, aceptas los términos de
            esta política de privacidad.
          </p>
        </div>

        {/* Información que recopilamos */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            2. Información que Recopilamos
          </h2>
          <ul className="list-disc list-inside text-lg">
            <li>Datos de contacto: nombre, email y número de teléfono.</li>
            <li>
              Información de navegación: direcciones IP, ubicación aproximada y
              datos del dispositivo.
            </li>
            <li>
              Datos opcionales que proporciones, como comentarios y mensajes.
            </li>
          </ul>
        </div>

        {/* Uso de la información */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            3. Uso de la Información
          </h2>
          <p className="text-lg text-justify">
            La información que recopilamos se utiliza para:
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>
              Gestionar tus solicitudes de información o reserva de hospedaje.
            </li>
            <li>Mejorar nuestros servicios y personalizar tu experiencia.</li>
            <li>
              Enviarte comunicaciones relevantes relacionadas con tu experiencia
              en El Cadillal.
            </li>
          </ul>
        </div>

        {/* Seguridad de los datos */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            4. Seguridad de los Datos
          </h2>
          <p className="text-lg text-justify">
            Implementamos medidas de seguridad avanzadas para proteger tu
            información personal contra accesos no autorizados, pérdida o
            destrucción. Sin embargo, no podemos garantizar la seguridad total
            debido a la naturaleza de Internet.
          </p>
        </div>

        {/* Compartir información */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            5. Compartir Información con Terceros
          </h2>
          <p className="text-lg text-justify">
            No compartimos tu información personal con terceros, excepto en los
            siguientes casos:
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>
              Cuando es necesario para procesar tus reservas con propietarios.
            </li>
            <li>
              Cuando lo exige la ley o para proteger nuestros derechos legales.
            </li>
          </ul>
        </div>

        {/* Tus derechos */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Tus Derechos</h2>
          <p className="text-lg text-justify">
            Tienes derecho a acceder, modificar o eliminar tus datos personales.
            Si deseas ejercer estos derechos, puedes contactarnos a través de
            nuestro formulario de contacto.
          </p>
        </div>

        {/* Cambios en la política */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            7. Cambios en la Política de Privacidad
          </h2>
          <p className="text-lg text-justify">
            Nos reservamos el derecho de actualizar esta política de privacidad
            en cualquier momento. Te recomendamos revisarla periódicamente para
            estar al tanto de las actualizaciones.
          </p>
        </div>

        {/* Contacto */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">¿Tienes Preguntas?</h2>
          <p className="text-lg mb-6">
            Si tienes alguna pregunta o inquietud sobre esta política de
            privacidad, no dudes en contactarnos.
          </p>
          <a
            href="/contacto"
            className="bg-blue-600 hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white py-3 px-6 rounded-full shadow-lg transition duration-300"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidad;
