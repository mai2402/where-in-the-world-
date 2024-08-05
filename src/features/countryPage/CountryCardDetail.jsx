import { useNavigate } from "react-router-dom";
import { useCountries } from "../../contexts/CountryContext";
import CountryCard from "./CountryCard";
import { useDarkMode } from "../../contexts/ThemeContext";

function CountryCardDetails() {
    const { isDarkMode } = useDarkMode();
    const { countries, selectedValue } = useCountries();
    const navigate = useNavigate();
    const selectedCountry = countries.find(country => country.name.common === selectedValue);


    return (
       
            
        <div className={`p-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
             <button  
                onClick={() =>{navigate(-1)
                    console.log('Back button clicked')
                } }
                className={`p-2 mb-4 rounded-md ${isDarkMode ? 'bg-slate-800 hover:bg-gray-500 text-white' : 'text-black hover:bg-gray-200'}`}
            >
                &larr; back
            </button>
            <div className="text-black">
                
                    <CountryCard key={selectedCountry} country={selectedCountry} />
                
            </div>
        </div>
        
    );
}

export default CountryCardDetails;



