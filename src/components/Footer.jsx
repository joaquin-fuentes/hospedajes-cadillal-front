import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaHome, FaBed, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Transición suave si ya estamos en la página
    } else {
      navigate(path); // Si no estamos en la página, navegamos y luego hacemos scroll
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100); // Pequeño retraso para garantizar el scroll después de cambiar de página
    }
  };

  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-white py-10 px-4">
      <div className="container mx-auto flex flex-wrap justify-center md:justify-between items-start gap-8">
        {/* Logo y descripción */}
        <div
          data-aos="fade-up"
          className="flex flex-col text-center md:text-left items-center md:items-center flex-1 min-w-[200px]"
        >
          <h2 className="text-2xl font-bold text-blue-600 dark:text-yellow-400 mb-4">
            El Cadillal - Hospedajes
          </h2>
          <p className="max-w-xs text-center">
            Descubre hospedajes confiables y disfruta de tu estadía con
            tranquilidad en El Cadillal.
          </p>
        </div>

        {/* Navegación */}
        <div
          data-aos="fade-up"
          className="flex flex-col items-center text-center flex-1 min-w-[200px]"
        >
          <h3 className="text-lg font-semibold mb-4">Navegación</h3>
          <ul className="space-y-2">
            <li
              className="flex justify-center gap-2 cursor-pointer"
              onClick={() => scrollToTop("/")}
            >
              <FaHome />
              <span className="hover:text-blue-600 dark:hover:text-yellow-300">
                Inicio
              </span>
            </li>
            <li
              className="flex justify-center gap-2 cursor-pointer"
              onClick={() => scrollToTop("/hospedajes")}
            >
              <FaBed />
              <span className="hover:text-blue-600 dark:hover:text-yellow-300">
                Hospedajes
              </span>
            </li>

            <li
              className="flex justify-center gap-2 cursor-pointer"
              onClick={() => scrollToTop("/contacto")}
            >
              <FaEnvelope />
              <span className="hover:text-blue-600 dark:hover:text-yellow-300">
                Contacto
              </span>
            </li>
          </ul>
        </div>

        {/* Información adicional */}
        <div
          data-aos="fade-up"
          className="flex flex-col items-center text-center flex-1 min-w-[200px]"
        >
          <h3 className="text-lg font-semibold mb-4">Información</h3>
          <ul className="space-y-2">
            <li
              onClick={() => scrollToTop("/terminos")}
              className="cursor-pointer"
            >
              <span className="hover:text-blue-600 dark:hover:text-yellow-300">
                Términos y Condiciones
              </span>
            </li>
            <li
              onClick={() => scrollToTop("/politica-privacidad")}
              className="cursor-pointer"
            >
              <span className="hover:text-blue-600 dark:hover:text-yellow-300">
                Política de Privacidad
              </span>
            </li>
            <li
              onClick={() => scrollToTop("/nosotros")}
              className="cursor-pointer"
            >
              <span className="hover:text-blue-600 dark:hover:text-yellow-300">
                Sobre Nosotros
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} El Cadillal - Hospedajes. Todos los
        derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
