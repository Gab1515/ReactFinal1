import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home/Home";
import AboutUs from "./screens/AboutUs/AboutUs";
import MyNav from "./components/MyNav/MyNav";
import Footer from "./components/Footer/Footer";
import Products from "./screens/Products/Products";
import Error404 from "./screens/Error404/Error404";
import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState(null);

  function handleRegister(e) {
    e.preventDefault();
    console.log (input);
    // Lógica para el registro...
  }

  function handleInput(e) {
    setInput ({ ...input, [e.target.name]: e.target.value});
  }

  return (
    <>
    
      <BrowserRouter>
        <div>
          <img src="https://media.licdn.com/dms/image/C4E0BAQE81VISLpErpg/company-logo_200_200/0/1630651895782?e=2147483647&v=beta&t=_EaSQSHwMNOiGNwkNbOS78QmhOd7419rrTis2Z4HZKo" alt="Logo de la empresa" width="350" height="250" />
        </div>

        <MyNav />

        <Routes>
          <Route path="/" element={<Home handleInput={handleInput} handleRegister={handleRegister} />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/sobrenosotros" element={<AboutUs />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;