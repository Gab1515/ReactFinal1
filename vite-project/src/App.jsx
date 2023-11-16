import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home/Home";
import MyNav from "./components/MyNav/MyNav";
import Footer from "./components/Footer/Footer";
import Error404 from "./screens/Error404/Error404";

function App() {
  const [input, setInput] = useState({});

  function handleInput(event) {
  }

  function handleRegister(e) {
    e.preventDefault();
    console.log(input);

    fetch("http://localhost:3001/api/items", { 
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <>
      <BrowserRouter>
        <div>
          <img
            src="https://media.licdn.com/dms/image/C4E0BAQE81VISLpErpg/company-logo_200_200/0/1630651895782?e=2147483647&v=beta&t=_EaSQSHwMNOiGNwkNbOS78QmhOd7419rrTis2Z4HZKo"
            alt="Logo de la empresa"
            width="150"
            centimagewith="0px"
            height="150"
          />
        </div>

        <MyNav />

        <Routes>
          <Route
            path="/"
            element={<Home handleInput={handleInput} handleRegister={handleRegister} />}
          />
          <Route path="*" element={<Error404 />} />
          <Route
    path="/"
    element={<Home handleInput={handleInput} handleRegister={handleRegister} />}
  />
  <Route path="*" element={<Error404 />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;