import React from "react";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div>
      Error404 - Pagina no encontrada
      <img
        src="https://cdn.dribbble.com/users/15914/screenshots/1302695/media/6c6c5f28f80ef0a96a7c3d02431498b7.png?resize=400x0"
        alt=""
      />
      <Link to={"/"}>Ir al inicio</Link>
    </div>
  );
}
