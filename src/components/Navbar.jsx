import useThemeStore from "../store/temaOscuro";
import useUsuariosStore from "../store/usuariosStore"; // Importación del store de usuarios
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FaSun,
  FaMoon,
  FaHome,
  FaBed,
  FaEnvelope,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import ModalLogout from "./login/ModalLogout";
import ModalLogoutSuccess from "./login/ModalLogoutSuccess";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();
  const { logout } = useUsuariosStore(); // Función para cerrar sesión
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [usuario, setUsuario] = useState(null); // Estado para guardar el usuario de sessionStorage
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false); // Estado del ModalLogout
  const [isLogoutSuccessModalOpen, setIsLogoutSuccessModalOpen] =
    useState(false); // Estado del ModalLogoutSuccess

  const links = [
    { name: "Inicio", path: "/", icon: <FaHome /> },
    { name: "Hospedajes", path: "/hospedajes", icon: <FaBed /> },
    { name: "Contacto", path: "/contacto", icon: <FaEnvelope /> },
  ];

  // Efecto para obtener el usuario de la sesión
  useEffect(() => {
    const storedUser = sessionStorage.getItem("usuario");
    if (storedUser) {
      setUsuario(JSON.parse(storedUser));
    }
  }, []);

  const handleOpenLogoutModal = () => {
    setIsLogoutModalOpen(true); // Abre el modal de confirmación de logout
  };

  const handleConfirmLogout = () => {
    setIsLogoutModalOpen(false); // Cierra el modal de confirmación
    logout(); // Limpia el estado de sesión
    setUsuario(null); // Limpia el usuario del estado
    setIsLogoutSuccessModalOpen(true); // Abre el modal de éxito
  };

  const handleCloseLogoutSuccess = () => {
    setIsLogoutSuccessModalOpen(false); // Cierra el modal de éxito
    window.location.href = "/"; // Redirige al home
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-lg transition-colors duration-300 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 dark:text-white">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            El Cadillal - Hospedajes
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-6 items-center">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-2 text-lg font-semibold transition-colors duration-300 dark:hover:text-yellow-300 hover:text-blue-600 ${
                location.pathname === link.path
                  ? "text-blue-600 dark:text-yellow-300"
                  : "text-gray-600 dark:text-gray-300"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}

          {/* Si hay un usuario en sesión, mostrar link al Panel de Admin y botón de Logout */}
          {usuario && (
            <>
              <Link
                to="/admin"
                className="flex items-center gap-2 text-lg font-semibold text-blue-600 dark:text-yellow-300 hover:underline"
              >
                <FaUser /> Panel de Administración
              </Link>
              <button
                onClick={handleOpenLogoutModal}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg"
              >
                <FaSignOutAlt /> Cerrar sesión
              </button>
            </>
          )}

          {/* Switch de Modo Oscuro */}
          <button
            className="ml-4 p-2 bg-gray-200 dark:bg-yellow-500 rounded-full transition-all duration-300 ease-in-out"
            onClick={toggleTheme}
            aria-label="Cambiar modo de tema"
          >
            <div className="flex items-center justify-center">
              {isDarkMode ? (
                <FaSun className="text-white text-2xl" />
              ) : (
                <FaMoon className="text-blue-600 text-2xl" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Modales */}
      {isLogoutModalOpen && (
        <ModalLogout
          onConfirm={handleConfirmLogout}
          onCancel={() => setIsLogoutModalOpen(false)}
        />
      )}
      {isLogoutSuccessModalOpen && (
        <ModalLogoutSuccess onClose={handleCloseLogoutSuccess} />
      )}
    </nav>
  );
};

export default Navbar;
