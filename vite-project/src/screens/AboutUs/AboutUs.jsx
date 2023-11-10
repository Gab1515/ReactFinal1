import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div>
        SOBRE NOSOTROS
      <Link to={"/"}>
        <button> IR A "HOME"</button>
      </Link>
    </div>
  );
}
