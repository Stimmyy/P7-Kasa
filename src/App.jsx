import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Singleproduct from "./pages/Singleproduct";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* path="*" permet de renvoyé vers la page 404 ou vers une page prédéfinit
      si l'utilisateur se "perd" */}
        <Route path="*" element={<Error />} />
        <Route path="/about" element={<About />} />
        <Route path="products/:productId" element={<Singleproduct />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
