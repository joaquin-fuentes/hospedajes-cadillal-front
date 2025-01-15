import React, { useEffect, useState } from "react";
import { FaEye, FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import useHospedajesStore from "../store/hospedajesStore"; // Importamos el store de Zustand
import ModalDetalle from "../components/administrador/ModalDetalle";
import ModalEditar from "../components/administrador/ModalEditar";
import ModalEliminar from "../components/administrador/ModalEliminar";
import ModalCrear from "../components/administrador/ModalCrear";
import dayjs from "dayjs"; // Para manejar fechas
import useFormatDate from "../hooks/userformatDate";
import useNotificationStore from "../store/notificacionStore";
import useUsuariosStore from "../store/usuariosStore";
import ModalLogout from "../components/login/ModalLogout";
import ModalLogoutSuccess from "../components/login/ModalLogoutSuccess";

const AdminPanel = () => {
  const logout = useUsuariosStore((state) => state.logout);

  const {
    hospedajes,
    fetchHospedajes,
    deleteHospedaje,
    updateHospedaje,
    addHospedaje,
  } = useHospedajesStore(); // Funciones y estado del store
  const { showNotification } = useNotificationStore(); // Función para mostrar notificaciones
  const [search, setSearch] = useState("");
  const [filterBy, setFilterBy] = useState("nombre");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedHospedaje, setSelectedHospedaje] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false); // Estado para abrir/cerrar el modal de logout
  const [isLogoutSuccessModalOpen, setIsLogoutSuccessModalOpen] =
    useState(false); // Estado para abrir/cerrar el modal de éxito

  // Cargar los hospedajes al montar el componente
  useEffect(() => {
    fetchHospedajes();
  }, [fetchHospedajes]);

  useEffect(() => {
    setFilteredData(hospedajes);
  }, [hospedajes]);

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearch(keyword);
    const result = hospedajes.filter((item) =>
      item[filterBy].toLowerCase().includes(keyword)
    );
    setFilteredData(result);
  };
  const handleLogout = () => {
    logout(); // Limpia la sesión
    setIsLogoutModalOpen(false); // Cierra el modal de confirmación
    setIsLogoutSuccessModalOpen(true); // Abre el modal de éxito
  };

  const openEditModal = (hospedaje) => {
    setSelectedHospedaje(hospedaje);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const openDeleteModal = (hospedaje) => {
    setSelectedHospedaje(hospedaje);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  const openModal = (hospedaje) => {
    setSelectedHospedaje(hospedaje);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = async (id) => {
    try {
      await deleteHospedaje(id);
      fetchHospedajes();
      showNotification("success", "El hospedaje fue eliminado con éxito");
    } catch (error) {
      showNotification("error", "Hubo un error al eliminar el hospedaje");
    }
    setIsDeleteModalOpen(false);
  };

  const handleSave = async (updatedHospedaje) => {
    try {
      await updateHospedaje(updatedHospedaje._id, updatedHospedaje);
      fetchHospedajes();
      showNotification("success", "Hospedaje editado con éxito");
      setIsEditModalOpen(false);
    } catch (error) {
      showNotification("error", "Error al editar el hospedaje");
    }
  };

  const handleCreate = async (newHospedaje) => {
    try {
      await addHospedaje(newHospedaje);
      fetchHospedajes();
      showNotification("success", "Hospedaje creado con éxito");
      setIsCreateModalOpen(false);
    } catch (error) {
      showNotification("error", "Error al crear el hospedaje");
    }
  };

  const isPaymentExpired = (fechaUltimoPago) => {
    const today = dayjs();
    const lastPaymentDate = dayjs(fechaUltimoPago);
    const diffInDays = today.diff(lastPaymentDate, "day");
    return diffInDays > 30;
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-6">
      <div className="flex justify-center items-center mb-6">
        <h1 className="text-4xl font-bold">Panel de Administración</h1>
      </div>
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <button
          onClick={() => setIsLogoutModalOpen(true)} // Abre el modal de logout
          className="bg-red-600 text-white py-2 px-4 rounded-lg"
        >
          Cerrar sesión
        </button>

        <div>
          <input
            type="text"
            placeholder={`Buscar por ${filterBy.replace(/([A-Z])/g, " $1")}`}
            value={search}
            onChange={handleSearch}
            className="w-full sm:w-64 px-4 py-2 rounded shadow bg-white dark:bg-gray-800"
          />
          <select
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
            className="px-4 ms-3 py-2 rounded shadow bg-white dark:bg-gray-800"
          >
            <option value="nombre">Nombre del Hospedaje</option>
            <option value="nombreDuenio">Nombre del Dueño</option>
            <option value="tipo">Tipo de Hospedaje</option>
            <option value="ubicacion">Ubicación</option>
          </select>
        </div>
        <button
          onClick={openCreateModal}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <FaPlus /> Crear Hospedaje
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-blue-600 dark:bg-yellow-500 text-white">
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2 text-start">Nombre del Hospedaje</th>
              <th className="px-4 py-2 text-start">Dueño</th>
              <th className="px-4 py-2 text-start">Tipo</th>
              <th className="px-4 py-2 text-start">Ubicación</th>
              <th className="px-4 py-2 text-start">Último Pago</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((hospedaje, index) => (
                <tr
                  key={hospedaje._id || index} // Agregar un "key" único. Se usa `_id` si existe, o `index` como respaldo.
                  className={`border-b hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    isPaymentExpired(hospedaje.fechaUltimoPago)
                      ? "bg-red-200 hover:bg-red-100 dark:bg-red-700 dark:hover:bg-red-900"
                      : ""
                  }`}
                >
                  <td className="px-4 py-2 text-center">{index + 1}</td>
                  <td className="px-4 py-2">{hospedaje.nombre}</td>
                  <td className="px-4 py-2">{hospedaje.nombreDuenio}</td>
                  <td className="px-4 py-2">{hospedaje.tipo}</td>
                  <td className="px-4 py-2">{hospedaje.ubicacion}</td>
                  <td className="px-4 py-2">
                    {useFormatDate(hospedaje.fechaUltimoPago)}
                  </td>
                  <td className="px-4 py-2 flex justify-center gap-4">
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg"
                      onClick={() => openModal(hospedaje)}
                    >
                      <FaEye />
                    </button>
                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-full shadow-lg"
                      onClick={() => openEditModal(hospedaje)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg"
                      onClick={() => openDeleteModal(hospedaje)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-4 text-gray-600 dark:text-gray-300"
                >
                  No se encontraron resultados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <ModalDetalle hospedaje={selectedHospedaje} onClose={closeModal} />
      )}
      {isEditModalOpen && (
        <ModalEditar
          hospedaje={selectedHospedaje}
          onClose={closeEditModal}
          onSave={handleSave}
        />
      )}
      {isDeleteModalOpen && (
        <ModalEliminar
          hospedaje={selectedHospedaje}
          onClose={closeDeleteModal}
          onConfirmDelete={() => handleDelete(selectedHospedaje._id)}
        />
      )}
      {isCreateModalOpen && (
        <ModalCrear onClose={closeCreateModal} onCreate={handleCreate} />
      )}
      {isLogoutModalOpen && (
        <ModalLogout
          onConfirm={handleLogout} // Cierra sesión
          onCancel={() => setIsLogoutModalOpen(false)} // Cancela y cierra el modal
        />
      )}
      {isLogoutSuccessModalOpen && (
        <ModalLogoutSuccess
          onClose={() => setIsLogoutSuccessModalOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminPanel;
