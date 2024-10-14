import React from 'react';
import { useQuery } from '@tanstack/react-query';
import './index.css';
import { fetchData } from '@/api/queries/products';
import { Product } from '@/api/queries/types';

const QueryComponent: React.FC = () => {
    const { data, error, isLoading } = useQuery<Product[]>({
        queryKey: ['products'],
        queryFn: fetchData,
    });

    if (isLoading) return <p className="text-center text-blue-600">Loading...</p>;
    if (error) return <p className="text-center text-red-600">Error fetching data</p>;
    console.log(data);

    return (
        <div className="max-w-5xl mx-auto p-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data?.map((product: any) => (
                    <li key={product.id} className="flex flex-col p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-gray-800">{product.title}</h3>
                            <p className="mt-2 text-gray-600">{product.description}</p>
                        </div>
                        <img
                            src={product.images[0]}
                            alt={product.title}
                            className="mt-4 w-full h-48 object-cover rounded-lg"
                        />
                        <span className="block mt-4 text-lg font-semibold text-blue-600 text-right">
                            Precio: {product.price} €
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QueryComponent;
