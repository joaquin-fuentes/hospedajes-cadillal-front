import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";

const Error404 = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-6 md:p-0 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white relative">
      {/* Animación grande del 404 */}
      <div className="text-center text-[10rem] lg:text-[12rem] font-extrabold text-gray-700 dark:text-gray-400 animate-pulse select-none">
        404
      </div>

      <div className="flex flex-col items-center text-center animate-fade-in">
        {/* Icono animado de error */}
        <MdErrorOutline className="text-red-600 dark:text-yellow-400 text-8xl mb-4 animate-bounce" />

        <h1 className="text-5xl font-bold mb-4">¡Oops! Página no encontrada</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Parece que la página que buscas ya no existe o fue movida.
        </p>

        <p className="text-md font-semibold mb-8">
          No te preocupes, puedes volver al inicio y seguir disfrutando de tu
          experiencia.
        </p>

        {/* Botón para regresar al inicio */}
        <Link
          to="/"
          className="flex items-center gap-2 text-white bg-blue-600 dark:bg-yellow-400 px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 dark:text-gray-700 dark:hover:bg-yellow-500 transition duration-300 transform hover:scale-105"
        >
          <FaHome className="text-lg" />
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default Error404;
