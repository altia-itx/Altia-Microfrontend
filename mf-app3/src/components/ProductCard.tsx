import React, { useEffect, useState } from "react";
import AddToCartButton from "@/components/AddToCartButton";
import { Product } from "@/api/queries/types";


const ProductCard: React.FC<{ product: Product, onClick: (product: Product) => void }> = ({ product, onClick }) => {

    const [cart, setCart] = useState<Product[]>([]);
    const handleAddToCart = () => {
        setCart((prevCart) => [...prevCart, product]);
      };

    return (
        <>
            <li
                key={product?.id}
                className="flex flex-col p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
                <div className="flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-800">
                        {product?.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{product?.description.substring(0, 100)}</p>
                </div>
                <img
                    src={product?.images[0]}
                    alt={product?.title}
                    className="mt-4 w-full h-48 object-cover rounded-lg"
                />
                <span className="block mt-4 text-lg font-semibold text-black text-right">
                    Precio: {product?.price} €
                </span>
                <AddToCartButton onClick={() => onClick(product)} />
            </li>
        </>
    );
};

export default ProductCard;