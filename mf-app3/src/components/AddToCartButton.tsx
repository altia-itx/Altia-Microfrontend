import React from "react";
import { ShoppingCart } from "lucide-react";

interface AddToCartButtonProps {
  onClick: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center px-4 py-2 space-x-4 text-white mt-4
       bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 w-full sm:w-auto"
    >
      <ShoppingCart size={22} className="text-white" />
      <span className="hidden sm:inline">Añadir al carrito</span>
    </button>
  );
};

export default AddToCartButton;
