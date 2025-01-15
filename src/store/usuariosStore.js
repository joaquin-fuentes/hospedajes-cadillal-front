import { create } from "zustand";

const API_USUARIO = import.meta.env.VITE_API_USUARIO;

const useUsuariosStore = create((set) => ({
  usuario: null, // Usuario autenticado
  token: null,

  // Iniciar sesión (POST /api/usuarios/login)
  login: async (nombreUsuario, password) => {
    try {
      const response = await fetch(`${API_USUARIO}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombreUsuario, password }),
      });
       console.log(response)
      if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem("usuario", JSON.stringify(data)); // Guarda en sessionStorage
        set({ usuario: data.nombre, token: data.token });
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
  logout: () => {
    sessionStorage.removeItem("usuario"); // Limpia sessionStorage al cerrar sesión
    set({ usuario: null, token: null });
  },
}));

export default useUsuariosStore;
