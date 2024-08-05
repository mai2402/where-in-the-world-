
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../contexts/ThemeContext";

import { useState } from "react";
import { useCountries } from "../contexts/CountryContext";



function Search() {
    const { isDarkMode } = useDarkMode();
    const [query, setQuery] = useState('');
    const{dispatch,countries} = useCountries()
    const country = 
    countries.find(c => c.name.common.toLowerCase() === query.toLowerCase());
    const navigate = useNavigate()

     const handleSubmit = async (e)=>{
        e.preventDefault();
        dispatch({type:"searchQuery" , payLoad: query})
        navigate(`/country/${country.cca3}`);
    };
     
    

    return (
        <div className={`flex justify-center p-4 ${isDarkMode ? 'bg-slate-800' : ''}`}>
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <input
                    className={`w-full p-2 border rounded-md focus:outline-none transition-all duration-300 ease-in-out ${isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-black border-gray-300'} ${isDarkMode ? 'focus:w-full' : 'focus:w-3/4'}`}
                    placeholder="  Search for a country..."
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </form>
        </div>
    );
}

export default Search;

