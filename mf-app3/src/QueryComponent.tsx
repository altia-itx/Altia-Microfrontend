import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import "./index.css";
import { fetchData } from "@/api/queries/products";
import { Product } from "@/api/queries/types";
import SearchInput from "@/components/SearchInput";
import useCounter from "remote/useCounter";
import ProductCard from "@/components/ProductCard";
import CartCard from "./components/CartCard";
import { ShoppingBasket } from 'lucide-react';
const QueryComponent: React.FC = () => {
  const { pagination } = useCounter();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filteredProducts, setFilteredProducts] = React.useState<Product[]>([]);
  const [cart, setCart] = React.useState<Product[]>([]);
  const [open, setOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCart([...cart, product]);
  };
  const { data, isLoading, isError, error } = useQuery<Product[]>({
    queryKey: ["products", pagination.offset, pagination.limit],
    queryFn: () => fetchData(pagination.offset, pagination.limit),
  });

  if (isLoading) {
    return <p className="text-center text-blue-600">Loading...</p>;
  }
  if (isError) {
    return <p className="text-center text-red-600">Error fetching data</p>;
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filteredProducts = data?.filter((product: any) => {
      return product.title.toLowerCase().includes(query.toLowerCase());
    });

    if (filteredProducts) {
      setFilteredProducts(filteredProducts);
    }
  }
  const openPopup = () => {
    setOpen(!open);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex justify-between ">
        <SearchInput onSearch={handleSearch} />
        {open && (
          <div>
            {cart.length > 0 ? (
              cart.map((product) => (
                <CartCard key={product.id} product={product} />
              ))
            ) : (
              <p>No products in the cart</p>
            )}
          </div>
        )}
        <button onClick={openPopup} ><ShoppingBasket className="w-12 h-12 text-blue-600" />{cart.length > 0 ? (
          <p className="mb-4">{cart.length}</p>
        ) : (
          <p className="mb-4">¡Añade productos!</p>
        )}</button>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product: any) => (
            <ProductCard key={product.id} product={product} onClick={handleAddToCart} />
          ))
        ) : (
          data?.map((product: any) => (
            <ProductCard key={product.id} product={product} onClick={handleAddToCart} />
          ))
        )}
      </ul>
    </div>
  );
};

export default QueryComponent;
