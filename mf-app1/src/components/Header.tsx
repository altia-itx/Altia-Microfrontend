import React from "react";
import logo from "@assets/logo.png";
const Header: React.FC = () => {
  return (
    <div
      className="flex items-center justify-between p-4 shadow-lg  ml-4"
      style={{ backgroundColor: "#0284c7" }}
    >
      <div className="flex items-center text-white space-x-6">
        <img
          src={logo}
          style={{ width: 120, height: 55 }}
          alt="Logo"
          className="mr-4 shadow-md rounded-lg"
        />
      </div>
      <div className="flex space-x-6 mr-4  space-x-4">
        <a href="/" className="px-4 py-2 text-white text-lg ">
          Inicio
        </a>
        <a href="/about" className="rounded px-4 py-2 text-white text-lg">
          Sobre mí
        </a>
        <a
          href="/contact"
          className="text-white text-lg transition-colors
         duration-300 rounded px-4 py-2"
        >
          Contacto
        </a>
      </div>
    </div>
  );
};

export default Header;
