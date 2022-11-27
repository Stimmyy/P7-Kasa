import React from "react";
import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";
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
        <Route path="/about" element={<About />} />
        <Route exact path="products/:productId"  element={<Singleproduct />} />
        <Route path="*"   element={<Error />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};


export default App;