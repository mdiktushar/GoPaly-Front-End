import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/shared/Footer/Footer";
import NavBar from "../../pages/shared/NavBar/NavBar";

const MainLayout = () => {
  return (
    <div style={{maxWidth: 1250}} className="m-auto">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
