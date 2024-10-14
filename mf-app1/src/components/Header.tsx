import React from 'react';
import logo from '@assets/logo.png';
const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-blue-600 shadow-lg" >
      <div className="flex items-center ml-4 text-white">
        <img src={logo} style={{ width: 120, height: 60 }} alt="Logo"
          className="mr-4 shadow-md rounded-lg" />
        <span className="text-2xl font-bold tracking-wide">Demo Microfront</span>
      </div>
      <nav className="flex space-x-6 mr-4">
        <a href="/" className="hover:bg-white hover:text-blue-600 transition-colors 
        duration-300 rounded px-4 py-2">
          Inicio
        </a>
        <a href="/about" className="hover:bg-white hover:text-blue-600 transition-colors
         duration-300 rounded px-4 py-2">
          Sobre mí
        </a>
        <a href="/contact" className="hover:bg-white hover:text-blue-600 transition-colors
         duration-300 rounded px-4 py-2">
          Contacto
        </a>
      </nav>
    </div>
  );
};

export default Header;
