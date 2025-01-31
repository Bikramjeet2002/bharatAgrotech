import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Product from "../pages/product/Product";
import About from "../pages/about/About";
import ProductDetails from "../pages/product/ProductDetails";
import Contact from "../pages/contact/Contact";
import Testimonial from "../pages/Testimonial/Testimonial";
import ScrollToTop from "../components/ScrollToTop";

function RouteManager() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonial" element={<Testimonial />} />
        </Route>
      </Routes>
    </>
  );
}

export default RouteManager;
