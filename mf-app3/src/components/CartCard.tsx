import React, { useState } from "react";
import { Product } from "@/api/queries/types";

interface CartCardProps {
    product: Product;
}

const CartCard: React.FC<CartCardProps> = ({ product }) => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center w-full p-4 border rounded-lg
                shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* <button onClick={closePopup}>X</button> */}
                <img
                    src={product?.images[0]}
                    alt={product?.title}
                    className="w-24 h-24 object-cover rounded-lg"
                />

                <h3 className="mt-4 text-xl font-bold text-gray-800">
                    {product?.title}
                </h3>

                <p className="mt-2 text-gray-600">
                    Precio: {product?.price} €
                </p>

                <p className="mt-2 text-gray-600">
                    Cantidad
                </p>

                <p className="mt-2 text-gray-600">
                    Total: {product?.price} €
                </p>
            </div>

        </div>
    );
};

export default CartCard;
