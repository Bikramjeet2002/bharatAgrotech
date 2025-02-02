import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import ContactBar from "../components/ContactBar";
import Dashboard from "../components/Dashboard";
import AOS from "aos";
import Whatsapp from "../components/Whatsapp";

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out", // Easing function for the animation
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="2xl:container mx-auto">
      <ContactBar />
      {pathname == "/" ? <Navbar /> : <Dashboard />}
      <main>
        <Outlet />
        {/* <div className="z-50"> 
              <Whatsapp/>
            </div> */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
