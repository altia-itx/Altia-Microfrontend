import React from "react";
import { useQuery } from "@tanstack/react-query";
import "./index.css";
import { fetchData, filterProducts } from "@/api/queries/products";
import { Product } from "@/api/queries/types";
import AddToCartButton from "@/components/AddToCartButton";
import SearchInput from "@/components/SearchInput";
import useCounter from "remote/useCounter";
import ProductCard from "@/components/ProductCard";
const QueryComponent: React.FC = () => {
  const { pagination } = useCounter();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filteredProducts, setFilteredProducts] = React.useState<Product[] >([]);

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

  return (
    <div className="max-w-5xl mx-auto p-6">
      <SearchInput onSearch={handleSearch} />
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.length > 0 ? (
          filteredProducts.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          data?.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </ul>
    </div>
  );
};

export default QueryComponent;
