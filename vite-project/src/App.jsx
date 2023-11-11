import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home/Home";
import AboutUs from "./screens/AboutUs/AboutUs";
import MyNav from "./components/MyNav/MyNav";
import Footer from "./components/Footer/Footer";
import Products from "./screens/Products/Products";
import Error404 from "./screens/Error404/Error404";




function App() {

  function handleRegister (e){
    e.preventDefault();
   }
  return (
    
    <>
    
        <BrowserRouter>
        
    <div>
      <img src="https://media.licdn.com/dms/image/C4E0BAQE81VISLpErpg/company-logo_200_200/0/1630651895782?e=2147483647&v=beta&t=_EaSQSHwMNOiGNwkNbOS78QmhOd7419rrTis2Z4HZKo" alt="Logo de la empresa"  width="350" height="250" />
    </div>
    
        <MyNav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/sobrenosotros" element={<AboutUs />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <div className="main-container">
      <form className="form-container" action="">
        {/*email*/}

        <section>
          <span>Email</span>
   
   <input type="Email" />
   </section>

    {/*contraseña*/}

    <section>
          <span>Contraseña</span>
   
   <input type="Password" />
        </section>
        
    {/*boton enviar*/}
    <section>
      <button onClick={e=> handleRegister(e)}>Registrar</button>
    </section>

      </form>

    </div>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
