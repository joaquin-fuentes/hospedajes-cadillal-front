import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FaEnvelope, FaPhoneAlt, FaUser, FaCommentAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import ModalConfirmacion from "../components/contacto/ModalConfirmacion";

const Contacto = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [modalInfo, setModalInfo] = useState(null);

  const onSubmit = async (data) => {
    const templateParams = {
      user_name: data.nombre,
      email_id: data.email,
      phone_number: data.telefono,
      message: data.mensaje,
      to_name: "Joaquin",
      subject: `Nuevo mensaje de: ${data.nombre} en web Hospedajes Cadillal`,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setModalInfo({
        tipo: "success",
        mensaje:
          "Tu mensaje fue enviado correctamente. ¡Gracias por contactarnos!",
      });

      reset();
    } catch (error) {
      setModalInfo({
        tipo: "error",
        mensaje:
          "Ocurrió un error al enviar tu mensaje. Por favor, intenta de nuevo.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-6">
      <div
        data-aos="fade-up"
        className="max-w-5xl md:mt-8 mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
      >
        <h1 className="text-4xl font-bold text-center mb-6">Contáctanos</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          ¡Nos encantaría saber de ti! Completa el formulario para enviarnos tu
          mensaje. ¡Estamos aquí para ayudarte!
        </p>

        <div className="text-center text-blue-500 dark:text-yellow-400 italic mb-6">
          "Tu próxima experiencia comienza con un simple mensaje."
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="nombre" className="block font-semibold mb-2">
              <FaUser className="inline mr-2" /> Nombre Completo
            </label>
            <Controller
              name="nombre"
              control={control}
              defaultValue=""
              rules={{ required: "El nombre es obligatorio" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="nombre"
                  className={`w-full px-4 py-2 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 bg-white dark:border-gray-600 ${
                    errors.nombre ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Ingresa tu nombre completo"
                />
              )}
            />
            {errors.nombre && (
              <p className="text-red-500 text-sm mt-1">
                {errors.nombre.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold mb-2">
              <FaEnvelope className="inline mr-2" /> Email
            </label>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: "El email es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email inválido",
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  id="email"
                  className={`w-full px-4 py-2 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 bg-white dark:border-gray-600 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Ingresa tu dirección de correo electrónico"
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="telefono" className="block font-semibold mb-2">
              <FaPhoneAlt className="inline mr-2" /> Teléfono
            </label>
            <Controller
              name="telefono"
              control={control}
              defaultValue=""
              rules={{
                required: "El teléfono es obligatorio",
                pattern: {
                  value: /^\d{10}$/,
                  message: "El teléfono debe tener 10 dígitos",
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="tel"
                  id="telefono"
                  className={`w-full px-4 py-2 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 bg-white dark:border-gray-600 ${
                    errors.telefono ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Ingresa tu número de teléfono (10 dígitos)"
                />
              )}
            />
            {errors.telefono && (
              <p className="text-red-500 text-sm mt-1">
                {errors.telefono.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="mensaje" className="block font-semibold mb-2">
              <FaCommentAlt className="inline mr-2" /> Mensaje
            </label>
            <Controller
              name="mensaje"
              control={control}
              defaultValue=""
              rules={{ required: "El mensaje es obligatorio" }}
              render={({ field }) => (
                <textarea
                  {...field}
                  id="mensaje"
                  className={`w-full px-4 py-2 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 bg-white dark:border-gray-600 ${
                    errors.mensaje ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                  rows="5"
                ></textarea>
              )}
            />
            {errors.mensaje && (
              <p className="text-red-500 text-sm mt-1">
                {errors.mensaje.message}
              </p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white py-3 px-6 rounded-full shadow-lg transition duration-300"
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </div>
        </form>
      </div>

      {modalInfo && (
        <ModalConfirmacion
          mensaje={modalInfo.mensaje}
          tipo={modalInfo.tipo}
          onClose={() => setModalInfo(null)}
        />
      )}
    </div>
  );
};

export default Contacto;
