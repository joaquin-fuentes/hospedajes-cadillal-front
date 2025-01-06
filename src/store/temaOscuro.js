import { create } from "zustand";

const useThemeStore = create((set) => {
  // Obtener el valor inicial desde localStorage o aplicar "dark" por defecto
  const initialTheme = localStorage.getItem("theme") || "dark"; // Ahora es "dark" por defecto

  // Aplicar la clase "dark" si el tema inicial es oscuro
  if (initialTheme === "dark") {
    document.documentElement.classList.add("dark");
  }

  return {
    isDarkMode: initialTheme === "dark",
    toggleTheme: () => {
      set((state) => {
        const newTheme = state.isDarkMode ? "light" : "dark";
        localStorage.setItem("theme", newTheme); // Guardar en localStorage
        if (newTheme === "dark") {
          document.documentElement.classList.add("dark"); // Agregar clase "dark"
        } else {
          document.documentElement.classList.remove("dark"); // Quitar clase "dark"
        }
        return { isDarkMode: newTheme === "dark" };
      });
    },
  };
});

export default useThemeStore;
