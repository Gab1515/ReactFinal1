import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home/Home";
import AboutUs from "./screens/AboutUs/AboutUs";
import MyNav from "./components/MyNav/MyNav";
import Footer from "./components/Footer/Footer";
import Products from "./screens/Products/Products";
import Error404 from "./screens/Error404/Error404";



function App() {
  return (
    <>
      <BrowserRouter>
        <MyNav />

        <Routes>
          <Route path="/" element={<Home />} />
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
