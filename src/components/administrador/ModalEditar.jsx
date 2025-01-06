import React, { useEffect, useState } from "react";
import { FaTimes, FaPlus } from "react-icons/fa";
import { useForm, useFieldArray } from "react-hook-form";
import ModalNotificacion from "./ModalNotificacion";

const formatDateToInput = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const ModalEditar = ({ hospedaje, onClose, onSave }) => {
  const [notificacion, setNotificacion] = useState(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...hospedaje,
      fechaRegistro: formatDateToInput(hospedaje.fechaRegistro),
      fechaUltimoPago: formatDateToInput(hospedaje.fechaUltimoPago),
      imagenes: hospedaje.imagenes || [""],
    },
  });

  const { fields, append } = useFieldArray({ control, name: "imagenes" });

  const handleAddImageInput = () => append("");

  const onSubmit = async (data) => {
    console.log("Datos del formulario enviados:", data);
    try {
      await onSave(data);
      setNotificacion({
        tipo: "success",
        mensaje: "Hospedaje editado con éxito",
      });
    } catch (error) {
      setNotificacion({
        tipo: "error",
        mensaje: "Error al editar el hospedaje",
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
    <>
      {notificacion && (
        <ModalNotificacion
          mensaje={notificacion.mensaje}
          tipo={notificacion.tipo}
          onClose={() => setNotificacion(null)}
        />
      )}
      <div
        id="modal-overlay"
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        onClick={(e) => e.target.id === "modal-overlay" && onClose()}
      >
        <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-lg w-full max-w-4xl max-h-screen overflow-y-auto p-8 animate-modal-slide-in">
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-2xl font-bold">Editar Hospedaje</h2>
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
                    })}
                    className="w-full px-4 py-2 rounded shadow bg-gray-100 dark:bg-gray-700"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Hospedaje</label>
                  <input
                    {...register("nombre", {
                      required: "El nombre del hospedaje es obligatorio",
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

            {/* Fila 2: Capacidad Mínima, Capacidad Máxima, Tipo, Piscina */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block font-semibold mb-1">
                  Capacidad Mínima
                </label>
                <input
                  type="number"
                  {...register("capacidadMin", {
                    required: "Capacidad mínima es obligatoria",
                  })}
                  className="w-full px-4 py-2 rounded shadow bg-gray-100 dark:bg-gray-700"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">
                  Capacidad Máxima
                </label>
                <input
                  type="number"
                  {...register("capacidadMax", {
                    required: "Capacidad máxima es obligatoria",
                  })}
                  className="w-full px-4 py-2 rounded shadow bg-gray-100 dark:bg-gray-700"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Tipo</label>
                <select
                  {...register("tipo", { required: "El tipo es obligatorio" })}
                  className="w-full px-4 py-2 rounded shadow bg-gray-100 dark:bg-gray-700"
                >
                  <option value="">Selecciona un tipo</option>
                  <option value="Cabaña">Cabaña</option>
                  <option value="Departamento">Departamento</option>
                  <option value="Casa">Casa</option>
                  <option value="Hostel">Hostel</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  {...register("piscina")}
                  className="w-5 h-5"
                />
                <label className="font-semibold">Piscina</label>
              </div>
            </div>

            {/* Fila 3: Ubicación, Teléfono, Correo Electrónico */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block font-semibold mb-1">Ubicación</label>
                <input
                  {...register("ubicacion", {
                    required: "La ubicación es obligatoria",
                  })}
                  className="w-full px-4 py-2 rounded shadow bg-gray-100 dark:bg-gray-700"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Teléfono</label>
                <input
                  type="text"
                  {...register("telefono", {
                    required: "El teléfono es obligatorio",
                  })}
                  className="w-full px-4 py-2 rounded shadow bg-gray-100 dark:bg-gray-700"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  {...register("correo", {
                    required: "El correo electrónico es obligatorio",
                  })}
                  className="w-full px-4 py-2 rounded shadow bg-gray-100 dark:bg-gray-700"
                />
              </div>
            </div>

            {/* Fila 4: Monto Pago, Estado de Pago, Precio por Persona */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block font-semibold mb-1">
                  Monto de Pago
                </label>
                <input
                  type="number"
                  {...register("montoPago", {
                    required: "El monto de pago es obligatorio",
                  })}
                  className="w-full px-4 py-2 rounded shadow bg-gray-100 dark:bg-gray-700"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">
                  Estado de Pago
                </label>
                <select
                  {...register("estadoPago", {
                    required: "El estado de pago es obligatorio",
                  })}
                  className="w-full px-4 py-2 rounded shadow bg-gray-100 dark:bg-gray-700"
                >
                  <option value="">Selecciona el estado</option>
                  <option value="Pagado">Pagado</option>
                  <option value="Pendiente">Pendiente</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold mb-1">
                  Precio por Persona
                </label>
                <input
                  type="number"
                  {...register("precioPorPersona", {
                    required: "El precio es obligatorio",
                  })}
                  className="w-full px-4 py-2 rounded shadow bg-gray-100 dark:bg-gray-700"
                />
              </div>
            </div>

            {/* Fila 5: Fecha de Registro y Último Pago */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1">
                  Fecha de Registro
                </label>
                <input
                  type="date"
                  {...register("fechaRegistro")}
                  className="w-full px-4 py-2 rounded shadow bg-gray-100 dark:bg-gray-700"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">
                  Fecha de Último Pago
                </label>
                <input
                  type="date"
                  {...register("fechaUltimoPago")}
                  className="w-full px-4 py-2 rounded shadow bg-gray-100 dark:bg-gray-700"
                />
              </div>
            </div>

            {/* Fila 6: Imágenes */}
            <div>
              <label className="block font-semibold mb-1">Imágenes</label>
              {fields.map((field, index) => (
                <input
                  key={field.id}
                  {...register(`imagenes.${index}`)}
                  className="w-full px-4 py-2 rounded shadow bg-gray-100 dark:bg-gray-700 mb-2"
                  placeholder={`URL de la imagen ${index + 1}`}
                />
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
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Guardar Cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalEditar;
