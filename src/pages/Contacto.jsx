import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaUser,
  FaCommentAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio";
    }
    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }
    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es obligatorio";
    } else if (!/^\d{10}$/.test(formData.telefono)) {
      newErrors.telefono = "El teléfono debe tener 10 dígitos";
    }
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es obligatorio";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Mensaje enviado correctamente");
      setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
      setErrors({});
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

        {/* Frase motivacional */}
        <div className="text-center text-blue-500 dark:text-yellow-400 italic mb-6">
          "Tu próxima experiencia comienza con un simple mensaje."
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre */}
          <div>
            <label htmlFor="nombre" className="block font-semibold mb-2">
              <FaUser className="inline mr-2" /> Nombre Completo
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 bg-white dark:border-gray-600 ${
                errors.nombre ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Ingresa tu nombre completo"
            />
            {errors.nombre && (
              <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-semibold mb-2">
              <FaEnvelope className="inline mr-2" /> Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 bg-white dark:border-gray-600 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Ingresa tu dirección de correo electrónico"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Teléfono */}
          <div>
            <label htmlFor="telefono" className="block font-semibold mb-2">
              <FaPhoneAlt className="inline mr-2" /> Teléfono
            </label>
            <input
              type="number"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 bg-white dark:border-gray-600 ${
                errors.telefono ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Ingresa tu número de teléfono (10 dígitos)"
            />
            {errors.telefono && (
              <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>
            )}
          </div>

          {/* Mensaje */}
          <div>
            <label htmlFor="mensaje" className="block font-semibold mb-2">
              <FaCommentAlt className="inline mr-2" /> Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 bg-white dark:border-gray-600 ${
                errors.mensaje ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Cuéntanos en qué podemos ayudarte..."
              rows="5"
            ></textarea>
            {errors.mensaje && (
              <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>
            )}
          </div>

          {/* Botón de Enviar */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white py-3 px-6 rounded-full shadow-lg transition duration-300"
            >
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
