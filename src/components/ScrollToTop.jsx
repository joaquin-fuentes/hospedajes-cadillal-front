import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza al tope superior de la página
  }, [pathname]);

  return null; // No renderiza nada en pantalla
};

export default ScrollToTop;
