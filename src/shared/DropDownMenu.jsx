import { useState } from "react";
import { useCountries } from "../contexts/CountryContext";
import { useDarkMode } from "../contexts/ThemeContext";

function DropDownMenu() {
    const { isDarkMode } = useDarkMode();
    const {dispatch}= useCountries();
    const [ selectedValue, setSelectedValue]= useState('');


    function handleSelectedValue(e){
        const value= e.target.value;
        setSelectedValue(value)
        dispatch({type:"filteredByRegion", payLoad:value})

    }
    return (
        <div className={`flex justify-center p-4 ${isDarkMode ? 'bg-slate-800' : ''}`}>
            <select
                className={`w-full p-2 border rounded-md focus:outline-none transition-colors duration-300 ease-in-out ${isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-black border-gray-300'}`}
                onChange={handleSelectedValue}
                value={selectedValue}
            >
                <option value="" disabled>Select a region</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                <option value="Americas">Americas</option>
            </select>
        </div>
    );
}

export default DropDownMenu;

