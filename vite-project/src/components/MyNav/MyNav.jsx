import React from "react";
import "./myNavStyles.css";
import { NavLink } from "react-router-dom";

export default function MyNav() {
  return (
    
    <div className="nav-container">
     <NavLink to={"/"} >
        <img src="https://media.licdn.com/dms/image/C4E0BAQE81VISLpErpg/company-logo_200_200/0/1630651895782?e=2147483647&v=beta&t=_EaSQSHwMNOiGNwkNbOS78QmhOd7419rrTis2Z4HZKo" alt="Logo de la empresa" />
      
      </NavLink>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "active-btn" : "disabled-btn")}
      >
        {" "}
        {/* isActive => true o false si esta activa */}
        Home
      </NavLink>
      <NavLink
        to={"/productos"}
        className={({ isActive }) => (isActive ? "active-btn" : "disabled-btn")}
      >
        Productos
      </NavLink>
      <NavLink
        to={"/sobrenosotros"}
        className={({ isActive }) => (isActive ? "active-btn" : "disabled-btn")}
      >
        Sobre Nosotros
      </NavLink>
    </div>
  );
}
