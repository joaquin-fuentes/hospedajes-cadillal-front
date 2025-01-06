import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DetalleHospedaje from "./components/hospedajes/DetalleHospedaje";
import AdminPanel from "./pages/AdminPanel";
import Error404 from "./pages/Error404";
import Contacto from "./pages/Contacto";
import Hospedajes from "./pages/Hospedajes";
import SobreNosotros from "./pages/SobreNosotros";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import TerminosYCondiciones from "./pages/TerminosYCondiciones";
import RegistroHospedaje from "./pages/RegistroHospedaje";
import ScrollToTop from "./components/ScrollToTop";
import MainLayout from "./components/MainLayout";
import useNotificationStore from "./store/notificacionStore";
import ModalNotificacion from "./components/administrador/ModalNotificacion";

function App() {
  const { notification, closeNotification } = useNotificationStore();

  return (
    <Router>
      <ScrollToTop />
      {notification && (
        <ModalNotificacion
          mensaje={notification.mensaje}
          tipo={notification.tipo}
          onClose={closeNotification}
        />
      )}
      <Routes>
        {/* Rutas con el layout principal */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/hospedaje/:id"
          element={
            <MainLayout>
              <DetalleHospedaje />
            </MainLayout>
          }
        />
        <Route
          path="/contacto"
          element={
            <MainLayout>
              <Contacto />
            </MainLayout>
          }
        />
        <Route
          path="/hospedajes"
          element={
            <MainLayout>
              <Hospedajes />
            </MainLayout>
          }
        />
        <Route
          path="/nosotros"
          element={
            <MainLayout>
              <SobreNosotros />
            </MainLayout>
          }
        />
        <Route
          path="/politica-privacidad"
          element={
            <MainLayout>
              <PoliticaPrivacidad />
            </MainLayout>
          }
        />
        <Route
          path="/terminos"
          element={
            <MainLayout>
              <TerminosYCondiciones />
            </MainLayout>
          }
        />
        <Route
          path="/registro-hospedaje"
          element={
            <MainLayout>
              <RegistroHospedaje />
            </MainLayout>
          }
        />
        <Route
          path="/admin"
          element={
            <MainLayout>
              <AdminPanel />
            </MainLayout>
          }
        />
        {/* Ruta de Error 404 sin Layout */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
