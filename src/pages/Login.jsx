import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import useUsuariosStore from "../store/usuariosStore";
import ModalSuccess from "../components/login/ModalSuccess";
import ModalError from "../components/login/ModalError";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const login = useUsuariosStore((state) => state.login);
  const navigate = useNavigate();

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const onSubmit = async (data) => {
    const { nombreUsuario, password } = data;
    const result = await login(nombreUsuario, password);

    if (result) {
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
        navigate("/admin"); // Redirige al panel admin
      }, 2000);
    } else {
      setShowErrorModal(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-md"
      >
        <h2 className="text-3xl font-extrabold text-center mb-6 text-yellow-400">
          Iniciar Sesión
        </h2>
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-100 flex items-center">
            <AiOutlineUser className="text-gray-400 mr-2" />
            Usuario
          </label>
          <div className="flex items-center border rounded-lg">
            <input
              type="text"
              placeholder="Ingresa tu usuario"
              {...register("nombreUsuario", {
                required: "El nombre de usuario es obligatorio",
                minLength: {
                  value: 4,
                  message: "Debe tener al menos 4 caracteres",
                },
              })}
              className={`w-full py-2  px-4 ${
                errors.nombreUsuario ? "text-red-500" : "text-gray-100"
              }`}
            />
          </div>
          {errors.nombreUsuario && (
            <p className="text-red-600 text-sm mt-1">
              {errors.nombreUsuario.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-100 flex items-center">
            <AiOutlineLock className="text-gray-400 mr-2" />
            Contraseña
          </label>
          <div className="flex items-center border rounded-lg">
            <input
              type="password"
              placeholder="Ingresa tu contraseña"
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 6,
                  message: "Debe tener al menos 6 caracteres",
                },
              })}
              className={`w-full py-2 px-4 ${
                errors.password ? "text-red-500" : "text-gray-100"
              }`}
            />
          </div>
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-400 text-gray-800 hover:text-white py-3 rounded-lg font-bold hover:bg-yellow-700 transition duration-300"
        >
          Iniciar Sesión
        </button>
        <p className="text-center mt-4 text-sm text-gray-400">
          ¿Olvidaste tu contraseña?{" "}
          <Link
            to={"/contacto"}
            className="text-yellow-400 cursor-pointer hover:underline"
          >
            Contáctate con el administrador
          </Link>
        </p>
      </form>

      {/* Modal de éxito */}
      {showSuccessModal && (
        <ModalSuccess
          mensaje="Has iniciado sesión con éxito. ¡Bienvenido al panel administrador!"
          onClose={() => setShowSuccessModal(false)}
        />
      )}

      {/* Modal de error */}
      {showErrorModal && (
        <ModalError
          mensaje="Credenciales incorrectas. Por favor, inténtalo de nuevo."
          onClose={() => setShowErrorModal(false)}
        />
      )}
    </div>
  );
};

export default Login;
