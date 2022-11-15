import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />                {/* path="*" permet de renvoyé vers la page 404 ou vers une page prédéfinit si l'utilisateur se "perd" */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
