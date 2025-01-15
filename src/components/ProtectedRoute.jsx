import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const usuarioSession = sessionStorage.getItem("usuario")
    ? JSON.parse(sessionStorage.getItem("usuario"))
    : null; // Parseamos el string a objeto

  // Si no hay usuario o no hay token, redirige al login
  if (usuarioSession) {
    return children; // Si hay sesión válida, renderiza el componente hijo
  }
  
  return <Navigate to="/login" replace />;
};

export default ProtectedRoute;
