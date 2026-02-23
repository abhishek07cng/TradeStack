import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import ProductPage from "./landing_page/products/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import AboutPage from "./landing_page/about/AboutPage";
import SupportPage from "./landing_page/support/SupportPage";
import Notfound from "./landing_page/Notfound";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/products" element={<ProductPage/>} />
        <Route path="/Pricing" element={<PricingPage/>} />
        <Route path="/Support" element={<SupportPage/>} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
);
