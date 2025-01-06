import Navbar from "./NavBar";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="pt-16">{children}</div>{" "}
      <Footer />
    </>
  );
};

export default MainLayout;
