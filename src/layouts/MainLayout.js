import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import ContactBar from "../components/ContactBar";
import Dashboard from "../components/Dashboard";

const MainLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className="2xl:container mx-auto">
      <ContactBar />
      {pathname == "/" ? <Navbar /> : <Dashboard />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
