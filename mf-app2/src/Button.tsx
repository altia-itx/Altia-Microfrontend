import React from 'react';
import useCounter from './store';

const CounterComponent: React.FC = () => {
    const { count, increase } = useCounter();

    return (
        <div className="flex flex-col items-center justify-center h-screen/2  border-2">
            <h2 className="text-2xl font-bold mb-4">Contador: {count}</h2>
            <div className="flex space-x-4">
                <button
                    style={{ backgroundColor: 'blue', color: 'white', fontWeight: 'bold', padding: '10px 20px', borderRadius: '5px' }}
                    onClick={() => increase(1)}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition"
                >
                    Incrementar
                </button>
                <button
                    onClick={() => increase(-1)}
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition"
                >
                    Decrementar
                </button>
            </div>
        </div>
    );
};

export default CounterComponent;
