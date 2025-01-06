import React from "react";

const TerminosYCondiciones = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-6">
      <div
        data-aos="fade-up"
        className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
      >
        <h1 className="text-4xl font-bold text-center mb-6">
          Términos y Condiciones
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Al utilizar nuestra plataforma, aceptas los siguientes términos y
          condiciones de uso. Por favor, léelos detenidamente.
        </p>

        {/* Sección 1 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            1. Aceptación de los Términos
          </h2>
          <p className="text-lg text-justify">
            Al acceder y utilizar nuestro sitio web, aceptas cumplir con estos
            términos y condiciones. Si no estás de acuerdo con alguna parte de
            estos términos, te recomendamos no utilizar nuestra plataforma.
          </p>
        </div>

        {/* Sección 2 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Uso Permitido</h2>
          <p className="text-lg text-justify">
            Esta plataforma está destinada a facilitar la búsqueda de hospedajes
            en El Cadillal. No está permitida la publicación de contenido
            ofensivo, falso o malintencionado. Cualquier uso indebido de la
            plataforma podrá ser motivo de suspensión de la cuenta.
          </p>
        </div>

        {/* Sección 3 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            3. Información de Hospedajes
          </h2>
          <p className="text-lg text-justify">
            La información sobre los hospedajes es proporcionada por los
            propietarios y verificada en la medida de lo posible. Sin embargo,
            no nos hacemos responsables por cambios o errores en la información.
            Recomendamos siempre confirmar los detalles con los propietarios
            antes de concretar una reserva.
          </p>
        </div>

        {/* Sección 4 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            4. Responsabilidades del Usuario
          </h2>
          <p className="text-lg text-justify">
            Como usuario, te comprometes a proporcionar información verdadera y
            precisa en tus solicitudes y reservas. No se tolerarán intentos de
            fraude, suplantación de identidad ni actividades ilícitas.
          </p>
        </div>

        {/* Sección 5 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Modificaciones</h2>
          <p className="text-lg text-justify">
            Nos reservamos el derecho de modificar estos términos y condiciones
            en cualquier momento. Te notificaremos los cambios importantes y te
            recomendamos revisar periódicamente esta página para mantenerte
            informado.
          </p>
        </div>

        {/* Sección 6 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            6. Propiedad Intelectual
          </h2>
          <p className="text-lg text-justify">
            Todo el contenido de la plataforma, incluidos textos, imágenes,
            logotipos y diseño, es propiedad intelectual de nuestra plataforma o
            de terceros autorizados. Queda prohibida su reproducción total o
            parcial sin el consentimiento previo.
          </p>
        </div>

        {/* Sección 7 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Enlaces Externos</h2>
          <p className="text-lg text-justify">
            Nuestro sitio web puede contener enlaces a sitios externos. No somos
            responsables del contenido ni de las políticas de privacidad de
            dichos sitios. Te recomendamos leer los términos y condiciones de
            cada sitio externo que visites.
          </p>
        </div>

        {/* Sección 8 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            8. Limitación de Responsabilidad
          </h2>
          <p className="text-lg text-justify">
            No nos hacemos responsables por daños o pérdidas derivadas del uso
            de nuestra plataforma, incluyendo problemas técnicos, interrupciones
            de servicio o errores en la información proporcionada por terceros.
          </p>
        </div>

        {/* Sección 9 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            9. Cancelaciones y Reembolsos
          </h2>
          <p className="text-lg text-justify">
            Las políticas de cancelación y reembolso pueden variar según cada
            propietario. Es responsabilidad del usuario revisar y aceptar estas
            políticas antes de realizar una reserva.
          </p>
        </div>

        {/* Frase Final */}
        <div className="text-center italic text-blue-500 dark:text-yellow-400 text-lg mb-8">
          "Nuestro compromiso es garantizar la transparencia y la seguridad en
          cada experiencia."
        </div>

        {/* Botón Volver */}
        <div className="text-center">
          <a
            href="/"
            className="bg-blue-600 hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white py-3 px-6 rounded-full shadow-lg transition duration-300"
          >
            Volver al Inicio
          </a>
        </div>
      </div>
    </div>
  );
};

export default TerminosYCondiciones;
