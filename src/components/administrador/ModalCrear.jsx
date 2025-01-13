import React, { useEffect, useState } from "react";
import { FaTimes, FaPlus } from "react-icons/fa";
import { useForm, useFieldArray } from "react-hook-form";
import ModalNotificacion from "./ModalNotificacion";

const ModalCrear = ({ onClose, onCreate }) => {
  const [notificacion, setNotificacion] = useState(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      nombre: "",
      descripcion: "",
      capacidadMin: 1,
      capacidadMax: 1,
      tipo: "Cabaña",
      piscina: false,
      wifi: false,
      ubicacion: "",
      nombreDuenio: "",
      telefono: "",
      correo: "",
      fechaRegistro: new Date().toISOString().slice(0, 10),
      fechaUltimoPago: "",
      montoPago: 0,
      estadoPago: "Pendiente",
      activo: true,
      precioPorPersona: 0,
      promociones: false,
      imagenes: [""],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "imagenes",
  });

  const handleAddImageInput = () => append("");

  const onSubmit = async (data) => {
    if (data.capacidadMax < data.capacidadMin) {
      setNotificacion({
        tipo: "error",
        mensaje:
          "La capacidad máxima debe ser mayor o igual a la capacidad mínima",
      });
      return;
    }

    // Convertir las fechas al formato "YYYY-MM-DDTHH:mm:ss.sssZ"
    data.fechaRegistro = new Date(data.fechaRegistro).toISOString();
    data.fechaUltimoPago = new Date(data.fechaUltimoPago).toISOString();

    try {
      await onCreate(data);
      setNotificacion({
        tipo: "success",
        mensaje: "Hospedaje creado con éxito",
      });
      onClose();
    } catch (error) {
      setNotificacion({
        tipo: "error",
        mensaje: "Error al crear el hospedaje",
      });
    }
  };

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [onClose]);

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={(e) => e.target.id === "modal-overlay" && onClose()}
    >
      <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-lg w-full max-w-4xl max-h-screen overflow-y-auto p-8">
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-2xl font-bold">Crear Hospedaje</h2>
          <button
            onClick={onClose}
            className="text-red-500 text-2xl hover:text-red-600"
          >
            <FaTimes />
          </button>
        </div>

        <form className="mt-6 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Fila 1: Nombre del Dueño y Nombre del Hospedaje / Descripción */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <div>
                <label className="block font-semibold mb-1">Dueño</label>
                <input
                  {...register("nombreDuenio", {
                    required: "El nombre del dueño es obligatorio",
                    minLength: {
                      value: 2,
                      message: "Debe tener al menos 2 caracteres",
                    },
                    maxLength: { value: 100, message: "Máximo 100 caracteres" },
                  })}
                  className="w-full px-4 py-2 rounded shadow bg-gray-100 dark:bg-gray-700"
                />
                {errors.nombreDuenio && (
                  <p className="text-red-500 text-sm">
                    {errors.nombreDuenio.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block font-semibold mb-1">Hospedaje</label>
                <input
                  {...register("nombre", {
                    required: "El nombre del hospedaje es obligatorio",
                    minLength: {
                      value: 2,
                      message: "Debe tener al menos 2 caracteres",
                    },
                    maxLength: { value: 100, message: "Máximo 100 caracteres" },
                  })}
                  className="w-full px-4 py-2 rounded shadow bg-gray-100 dark:bg-gray-700"
                />
                {errors.nombre && (
                  <p className="text-red-500 text-sm">
                    {errors.nombre.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label className="block font-semibold mb-1">Descripción</label>
              <textarea
                {...register("descripcion", {
                  required: "La descripción es obligatoria",
                  minLength: {
                    value: 10,
                    message: "Debe tener al menos 10 caracteres",
                  },
                  maxLength: { value: 500, message: "Máximo 500 caracteres" },
                })}
                className="w-full h-[calc(100%-2rem)] px-4 py-2 rounded shadow bg-gray-100 dark:bg-gray-700 resize-none"
              ></textarea>
              {errors.descripcion && (
                <p className="text-red-500 text-sm">
                  {errors.descripcion.message}
                </p>
              )}
            </div>
          </div>

          {/* Fila 2: Capacidad, Tipo y Piscina */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block font-semibold mb-1">
                Capacidad Mínima
              </label>
              <input
                type="number"
                {...register("capacidadMin", {
                  required: "Capacidad mínima es obligatoria",
                  min: { value: 1, message: "Debe ser al menos 1" },
                })}
                className="w-full px-4 py-2 rounded shadow bg-gray-100 dark:bg-gray-700"
              />
              {errors.capacidadMin && (
                <p className="text-red-500 text-sm">
                  {errors.capacidadMin.message}
                </p>
              )}
            </div>
            <div>
              <label className="block font-semibold mb-1">
                Capacidad Máxima
              </label>
              <input
                type="number"
                {...register("capacidadMax", {
                  required: "Capacidad máxima es obligatoria",
                  min: { value: 1, message: "Debe ser mayor a 0" },
                })}
                className="w-full px-4 py-2 rounded shadow bg-gray-100 dark:bg-gray-700"
              />
              {errors.capacidadMax && (
                <p className="text-red-500 text-sm">
                  {errors.capacidadMax.message}
                </p>
              )}
            </div>
            <div>
              <label className="block font-semibold mb-1">Tipo</label>
              <select
                {...register("tipo", { required: "El tipo es obligatorio" })}
                className="w-full px-4 py-2 rounded shadow bg-gray-100 dark:bg-gray-700"
              >
                <option value="">Seleccionar tipo</option>
                <option value="Cabaña">Cabaña</option>
                <option value="Departamento">Departamento</option>
                <option value="Casa">Casa</option>
                <option value="Hostel">Hostel</option>
              </select>
              {errors.tipo && (
                <p className="text-red-500 text-sm">{errors.tipo.message}</p>
              )}
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register("piscina")}
                className="w-5 h-5"
              />
              <label className="font-semibold">Piscina</label>
              <input
                type="checkbox"
                {...register("wifi")}
                className="w-5 h-5"
              />
              <label className="font-semibold">Wifi</label>
            </div>
          </div>

          {/* Fila 3: Ubicación, Teléfono, Correo Electrónico */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block font-semibold mb-1">Ubicación</label>
              <input
                {...register("ubicacion", {
                  required: "La ubicación es obligatoria",
                  minLength: {
                    value: 5,
                    message: "Debe tener al menos 5 caracteres",
                  },
                  maxLength: { value: 100, message: "Máximo 100 caracteres" },
                })}
                className="w-full px-4 py-2 rounded shadow bg-gray-100 dark:bg-gray-700"
              />
              {errors.ubicacion && (
                <p className="text-red-500 text-sm">
                  {errors.ubicacion.message}
                </p>
              )}
            </div>
            <div>
              <label className="block font-semibold mb-1">Teléfono</label>
              <input
                type="text"
                {...register("telefono", {
                  required: "El teléfono es obligatorio",
                  pattern: {
                    value: /^[0-9]{7,15}$/,
                    message: "Debe tener entre 7 y 15 dígitos",
                  },
                })}
                className="w-full px-4 py-2 rounded shadow bg-gray-100 dark:bg-gray-700"
              />
              {errors.telefono && (
                <p className="text-red-500 text-sm">
                  {errors.telefono.message}
                </p>
              )}
            </div>
            <div>
              <label className="block font-semibold mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                {...register("correo", {
                  required: "El correo es obligatorio",
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Formato de correo inválido",
                  },
                })}
                className="w-full px-4 py-2 rounded shadow bg-gray-100 dark:bg-gray-700"
              />
              {errors.correo && (
                <p className="text-red-500 text-sm">{errors.correo.message}</p>
              )}
            </div>
          </div>

          {/* Fila 4: Fechas y Pago */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">
                Fecha de Registro
              </label>
              <input
                type="date"
                {...register("fechaRegistro", {
                  required: "La fecha de registro es obligatoria",
                })}
                className="w-full px-4 py-2 rounded shadow bg-gray-100 dark:bg-gray-700"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">
                Fecha de Último Pago
              </label>
              <input
                type="date"
                {...register("fechaUltimoPago", {
                  required: "La fecha de último pago es obligatoria",
                })}
                className="w-full px-4 py-2 rounded shadow bg-gray-100 dark:bg-gray-700"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block font-semibold mb-1">Monto de Pago</label>
              <input
                type="number"
                {...register("montoPago", {
                  required: "El monto de pago es obligatorio",
                  min: { value: 0, message: "Debe ser al menos 0" },
                })}
                className="w-full px-4 py-2 rounded shadow bg-gray-100 dark:bg-gray-700"
              />
              {errors.montoPago && (
                <p className="text-red-500 text-sm">
                  {errors.montoPago.message}
                </p>
              )}
            </div>
            <div>
              <label className="block font-semibold mb-1">Estado de Pago</label>
              <select
                {...register("estadoPago", {
                  required: "El estado de pago es obligatorio",
                })}
                className="w-full px-4 py-2 rounded shadow bg-gray-100 dark:bg-gray-700"
              >
                <option value="Pagado">Pagado</option>
                <option value="Pendiente">Pendiente</option>
              </select>
              {errors.estadoPago && (
                <p className="text-red-500 text-sm">
                  {errors.estadoPago.message}
                </p>
              )}
            </div>
            <div>
              <label className="block font-semibold mb-1">
                Precio por Persona
              </label>
              <input
                type="number"
                {...register("precioPorPersona", {
                  required: "El precio es obligatorio",
                  min: { value: 0, message: "Debe ser al menos 0" },
                })}
                className="w-full px-4 py-2 rounded shadow bg-gray-100 dark:bg-gray-700"
              />
              {errors.precioPorPersona && (
                <p className="text-red-500 text-sm">
                  {errors.precioPorPersona.message}
                </p>
              )}
            </div>
          </div>

          {/* Fila 5: Imágenes */}
          <div>
            <label className="block font-semibold mb-1">Imágenes</label>
            {fields.map((field, index) => (
              <div key={field.id} className="flex gap-2 mb-2">
                <input
                  {...register(`imagenes.${index}`, {
                    required: "La URL de la imagen es obligatoria",
                  })}
                  className="w-full px-4 py-2 rounded shadow bg-gray-100 dark:bg-gray-700"
                  placeholder={`URL de la imagen ${index + 1}`}
                />
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="text-red-500 hover:text-red-600"
                >
                  Quitar
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddImageInput}
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex justify-center items-center"
            >
              <FaPlus /> <span className="ms-1">Agregar Imagen</span>
            </button>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-gray-300 dark:bg-gray-600 text-black dark:text-white rounded-lg hover:bg-gray-400 dark:hover:bg-gray-700"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Crear Hospedaje
            </button>
          </div>
        </form>

        {notificacion && (
          <ModalNotificacion
            mensaje={notificacion.mensaje}
            tipo={notificacion.tipo}
            onClose={() => setNotificacion(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ModalCrear;
