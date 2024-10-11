import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-blue-500 text-white">
      <div className="flex items-center">
        <img src="../" alt="Logo" className="h-8 w-8 mr-4" />
        <span className="text-xl font-bold">Demo Microfront</span>
      </div>
      <nav className="flex space-x-4">
        <a href="/" className="hover:underline">
          Inicio
        </a>
        <a href="/about" className="hover:underline">
          Sobre mi 
        </a>
        <a href="/contact" className="hover:underline">
          Contacto
        </a>
      </nav>
    </header>
  );
};

export default Header;
