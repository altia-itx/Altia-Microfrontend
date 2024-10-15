import React, { useState } from "react";
import { Search, Trash } from "lucide-react";

interface SearchProps {
    onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchProps> = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSearch}>
            <div className="flex items-center border border-blue-600 rounded-lg px-4 py-2 w-80 mb-8">

                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Buscar..."
                    className="flex-1 outline-none"
                />
                <button type="submit">
                    <Search className="text-blue-600 w-4 h-4 mr-2" />
                </button>
                {query && <button onClick={() => setQuery("")}>
                    <Trash className="text-red-600 w-4 h-4" />
                </button>}
            </div>
        </form>
    );
};

export default SearchInput;