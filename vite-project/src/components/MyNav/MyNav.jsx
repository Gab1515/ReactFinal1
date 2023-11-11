import React from "react";
import "./myNavStyles.css";
import { NavLink } from "react-router-dom";

export default function MyNav() {
  return (
    
    <div className="nav-container">
    
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
