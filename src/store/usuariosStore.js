import { create } from "zustand";

const API_USUARIO = import.meta.env.VITE_API_USUARIO;

const useUsuariosStore = create((set) => ({
  usuario: null, // Usuario autenticado
  token: null,

  // Iniciar sesión (POST /api/usuarios/login)
  login: async (nombreUsuario, password) => {
    try {
      const response = await fetch(`${API_USUARIO}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombreUsuario, password }),
      });
      if (response.ok) {
        const data = await response.json();
        set({ usuario: data.nombre, token: data.token });
        console.log("Usuario autenticado:", data);
        return data;
      } else {
        console.error("Credenciales incorrectas");
        return null;
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  },

  // Obtener todos los usuarios (GET /api/usuarios)
  fetchUsuarios: async () => {
    try {
      const response = await fetch(API_USUARIO);
      const usuarios = await response.json();
      return usuarios;
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
      return [];
    }
  },

  // Cerrar sesión
  logout: () => set({ usuario: null, token: null }),
}));

export default useUsuariosStore;
