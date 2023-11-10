import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
        BIENVENIDO! ESTAMOS EN EL HOME!
      <Link to={"/sobrenosotros"}>
        <button> IR A "SOBRE NOSOTROS"</button>
      </Link>
    </div>
  );
}
