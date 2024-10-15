import React from 'react';
import useCounter from './store';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';

const CounterComponent: React.FC = () => {
  const { pagination, nextPage, previousPage } = useCounter();

  return (
    <div className="flex flex-col items-center justify-center h-screen/2 pt-8 pb-12 border-2">
      <div className="text-xl font-semibold mb-4">
        Página {pagination.offset / pagination.limit + 1}
      </div>
      <div className="flex space-x-24">
        {pagination.offset > -1 && (
          <button
            onClick={previousPage}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded 
                    hover:bg-blue-700 transition">
            <ArrowBigLeft />
          </button>
        )}
        <button
          onClick={nextPage}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded
                         hover:bg-blue-700 transition"
        >
          <ArrowBigRight />
        </button>
      </div>
    </div>
  );
};

export default CounterComponent;