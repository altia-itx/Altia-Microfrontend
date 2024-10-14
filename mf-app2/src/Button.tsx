import React from 'react';
import useCounter from './store';
import { Cross, MinusIcon } from 'lucide-react';
const CounterComponent: React.FC = () => {
    const { count, increase } = useCounter();

    return (
        <div className="flex flex-col items-center justify-center h-screen/2 pt-12 pb-6">
            <h2 className="text-2xl font-bold mb-4">Añadir: {count}</h2>
            <div className="flex space-x-4">
                <button
                    onClick={() => increase(1)}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition"
                >
                    <Cross />
                </button>
                <button
                    onClick={() => increase(-1)}
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition"
                >
                    <MinusIcon />
                </button>
            </div>
        </div>
    );
};

export default CounterComponent;
