import { create } from "zustand";

// Endpoint de la API desde la variable de entorno
const API_HOSPEDAJE = import.meta.env.VITE_API_HOSPEDAJE;

const useHospedajesStore = create((set, get) => ({
  hospedajes: [], // Lista de hospedajes

  // **Obtener todos los hospedajes**
  fetchHospedajes: async () => {
    try {
      const response = await fetch(API_HOSPEDAJE);
      const data = await response.json();
      set({ hospedajes: data });
    } catch (error) {
      console.error("Error al obtener los hospedajes:", error);
    }
  },

  // **Obtener un hospedaje por ID**
  fetchHospedajeById: async (id) => {
    try {
      const response = await fetch(`${API_HOSPEDAJE}/${id}`);
      if (!response.ok) {
        throw new Error("No se pudo encontrar el hospedaje");
      }
      const hospedaje = await response.json();
      return hospedaje;
    } catch (error) {
      console.error(`Error al buscar el hospedaje con ID ${id}:`, error);
      return null;
    }
  },

  // **Crear un hospedaje (POST)**
  addHospedaje: async (nuevoHospedaje) => {
    console.log(nuevoHospedaje);
    try {
      const response = await fetch(API_HOSPEDAJE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoHospedaje),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Errores de validación:", errorData.errores);
        return;
      }
      const hospedajeAgregado = await response.json();
      set((state) => ({
        hospedajes: [...state.hospedajes, hospedajeAgregado],
      }));
    } catch (error) {
      console.error("Error al crear el hospedaje:", error);
    }
  },

  // **Eliminar un hospedaje (DELETE)**
  deleteHospedaje: async (id) => {
    try {
      const response = await fetch(`${API_HOSPEDAJE}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("No se pudo eliminar el hospedaje");
      }
      set((state) => ({
        hospedajes: state.hospedajes.filter((h) => h._id !== id),
      }));
      console.log("Hospedaje eliminado correctamente");
    } catch (error) {
      console.error(`Error al eliminar el hospedaje con ID ${id}:`, error);
    }
  },

  // **Editar un hospedaje (PUT)**
  updateHospedaje: async (id, hospedajeEditado) => {
    try {
      const response = await fetch(`${API_HOSPEDAJE}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hospedajeEditado),
      });
      if (!response.ok) {
        throw new Error("No se pudo actualizar el hospedaje");
      }
      const data = await response.json();
      set((state) => ({
        hospedajes: state.hospedajes.map((hospedaje) =>
          hospedaje._id === id
            ? { ...hospedaje, ...hospedajeEditado }
            : hospedaje
        ),
      }));
      console.log("Hospedaje actualizado correctamente:", data);
    } catch (error) {
      console.error(`Error al actualizar el hospedaje con ID ${id}:`, error);
    }
  },
}));

export default useHospedajesStore;
