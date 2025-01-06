import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaHome,
  FaMapMarkerAlt,
  FaCommentDots,
} from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { BsFillHousesFill } from "react-icons/bs";

const RegistroHospedaje = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    nombreHospedaje: "",
    tipoHospedaje: "",
    direccion: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validarFormulario = () => {
    let nuevosErrores = {};
    if (!formData.nombre.trim())
      nuevosErrores.nombre = "El nombre es obligatorio.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      nuevosErrores.email = "Ingrese un email válido.";
    if (!formData.telefono.trim() || formData.telefono.length < 10)
      nuevosErrores.telefono = "Ingrese un teléfono válido.";
    if (!formData.nombreHospedaje.trim())
      nuevosErrores.nombreHospedaje = "El nombre del hospedaje es obligatorio.";
    if (!formData.tipoHospedaje)
      nuevosErrores.tipoHospedaje = "Seleccione un tipo de hospedaje.";
    if (!formData.direccion.trim())
      nuevosErrores.direccion = "La ubicación es obligatoria.";
    if (!formData.mensaje.trim())
      nuevosErrores.mensaje = "El mensaje es obligatorio.";

    setErrors(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      alert(
        "¡Formulario enviado con éxito! Nos pondremos en contacto contigo pronto."
      );
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        nombreHospedaje: "",
        tipoHospedaje: "",
        direccion: "",
        mensaje: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-6">
      <div
        data-aos="fade-up"
        className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
      >
        <h1 className="text-4xl font-bold text-center mb-6">
          Registro de Hospedaje
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Completa este formulario para que podamos comunicarnos contigo y
          explicarte cómo funciona nuestra plataforma.
        </p>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre del Propietario */}
          <div>
            <label
              htmlFor="nombre"
              className="block font-semibold mb-1 flex items-center gap-2"
            >
              <IoPerson />
              Nombre Completo
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className={`w-full px-4 py-2 bg-white dark:bg-gray-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.nombre ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.nombre && (
              <p className="text-red-500 text-sm">{errors.nombre}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block font-semibold mb-1 flex items-center gap-2"
            >
              <FaEnvelope />
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 bg-white dark:bg-gray-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Teléfono */}
          <div>
            <label
              htmlFor="telefono"
              className="block font-semibold mb-1 flex items-center gap-2"
            >
              <FaPhone />
              Número de Teléfono
            </label>
            <input
              type="text"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className={`w-full px-4 py-2 bg-white dark:bg-gray-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.telefono ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.telefono && (
              <p className="text-red-500 text-sm">{errors.telefono}</p>
            )}
          </div>

          {/* Nombre del Hospedaje */}
          <div>
            <label
              htmlFor="nombreHospedaje"
              className="block font-semibold mb-1 flex items-center gap-2"
            >
              <FaHome />
              Nombre del Hospedaje
            </label>
            <input
              type="text"
              id="nombreHospedaje"
              name="nombreHospedaje"
              value={formData.nombreHospedaje}
              onChange={handleChange}
              className={`w-full px-4 py-2 bg-white dark:bg-gray-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.nombreHospedaje ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.nombreHospedaje && (
              <p className="text-red-500 text-sm">{errors.nombreHospedaje}</p>
            )}
          </div>

          {/* Tipo de Hospedaje */}
          <div>
            <label
              htmlFor="tipoHospedaje"
              className="block font-semibold mb-1 flex items-center gap-2"
            >
              <BsFillHousesFill />
              Tipo de Hospedaje
            </label>
            <select
              id="tipoHospedaje"
              name="tipoHospedaje"
              value={formData.tipoHospedaje}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white dark:bg-gray-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Seleccionar</option>
              <option value="Cabaña">Cabaña</option>
              <option value="Casa">Casa</option>
              <option value="Departamento">Departamento</option>
              <option value="Hostel">Hostel</option>
            </select>
            {errors.tipoHospedaje && (
              <p className="text-red-500 text-sm">{errors.tipoHospedaje}</p>
            )}
          </div>

          {/* Ubicación */}
          <div>
            <label
              htmlFor="direccion"
              className="block font-semibold mb-1 flex items-center gap-2"
            >
              <FaMapMarkerAlt />
              Dirección
            </label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              className={`w-full px-4 py-2 bg-white dark:bg-gray-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.direccion ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.direccion && (
              <p className="text-red-500 text-sm">{errors.direccion}</p>
            )}
          </div>

          {/* Mensaje Adicional */}
          <div>
            <label
              htmlFor="mensaje"
              className="block font-semibold mb-1 flex items-center gap-2"
            >
              <FaCommentDots />
              Mensaje Adicional
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="4"
              value={formData.mensaje}
              onChange={handleChange}
              className={`w-full px-4 py-2 bg-white dark:bg-gray-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.mensaje ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.mensaje && (
              <p className="text-red-500 text-sm">{errors.mensaje}</p>
            )}
          </div>

          {/* Botón de Enviar */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white py-3 px-6 rounded-full shadow-lg transition duration-300"
            >
              Enviar Solicitud
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistroHospedaje;
