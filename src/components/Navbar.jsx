import useThemeStore from "../store/temaOscuro";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaSun, FaMoon, FaHome, FaBed, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "Inicio", path: "/", icon: <FaHome /> },
    { name: "Hospedajes", path: "/hospedajes", icon: <FaBed /> },
    { name: "Contacto", path: "/contacto", icon: <FaEnvelope /> },
  ];

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

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden text-gray-600 dark:text-yellow-300 hover:text-blue-600 focus:outline-none`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white dark:bg-gray-800 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 translate-y-0" : "max-h-0 -translate-y-5"
        }`}
      >
        <div className="p-6 pt-4">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block flex items-center gap-2 py-2 text-lg font-semibold text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-300 ${
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

          {/* Switch de Modo Oscuro para Mobile */}
          <button
            className="mt-2 p-2 bg-gray-200 dark:bg-yellow-500 rounded-full transition-all duration-300 ease-in-out"
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
    </nav>
  );
};

export default Navbar;
