
/* eslint-disable */



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCountries } from '../../contexts/CountryContext';

function CountryCard() {
    const { cca3 } = useParams(); // Get the country code from the URL
    const { countries } = useCountries();

    const [borderCountries, setBorderCountries] = useState([]);
    
    const country = countries.find(c => c.cca3 === cca3);

    useEffect(() => {
        const fetchBorderCountries = async () => {
            if (!country) return;
            
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const allCountries = await response.json();
                
                const borderCountryCodes = country.borders || [];
                const borderCountriesList = allCountries.filter(c => borderCountryCodes.includes(c.cca3));
                setBorderCountries(borderCountriesList);
            } catch (error) {
                console.error('Error fetching border countries:', error);
            }
        };

        fetchBorderCountries();
    }, [country]); // Ensure useEffect depends on country

    if (!country) return <div>Loading...</div>; // Show loading state if country is not found
    
    const nativeName = country.name.nativeName 
        ? Object.values(country.name.nativeName)[0].common 
        : "N/A";

    const currencies = country.currencies 
        ? Object.values(country.currencies).map(currency => currency.name).join(", ") 
        : "N/A";

    const languages = country.languages 
        ? Object.values(country.languages).join(", ") 
        : "N/A";

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-5xl mx-auto grid grid-cols-3 gap-4 p-4">
                <div className="col-span-1">
                    <img src={country.flags.png} alt={country.name.common} className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="col-span-2 p-6 grid grid-cols-2 gap-6">
                    <div>
                        <p className="text-gray-800 dark:text-gray-300"><strong>Name:</strong> {country.name.common}</p>
                        <p className="text-gray-800 dark:text-gray-300"><strong>Native Name:</strong> {nativeName}</p>
                        <p className="text-gray-800 dark:text-gray-300"><strong>Population:</strong> {country.population.toLocaleString()}</p>
                        <p className="text-gray-800 dark:text-gray-300"><strong>Region:</strong> {country.region}</p>
                        <p className="text-gray-800 dark:text-gray-300"><strong>Subregion:</strong> {country.subregion}</p>
                    </div>
                    <div>
                        <p className="text-gray-800 dark:text-gray-300"><strong>Capital:</strong> {country.capital}</p>
                        <p className="text-gray-800 dark:text-gray-300"><strong>Top Level Domain:</strong> {country.tld ? country.tld.join(", ") : "N/A"}</p>
                        <p className="text-gray-800 dark:text-gray-300"><strong>Currencies:</strong> {currencies}</p>
                        <p className="text-gray-800 dark:text-gray-300"><strong>Languages:</strong> {languages}</p>
                    </div>
                    <div className="col-span-2 mt-4">
                        <p className="text-gray-800 dark:text-gray-300 font-bold mb-2"><strong>Border Countries:</strong></p>
                        <div className="flex flex-wrap gap-2">
                            {borderCountries.length > 0 
                                ? borderCountries.map(borderCountry => (
                                    <div key={borderCountry.cca3} className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-sm flex items-center justify-center text-gray-800 dark:text-gray-300">
                                        <span className='font-bold text-sm'>{borderCountry.name.common}</span>
                                    </div>
                                ))
                                : <div className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-sm text-gray-800 dark:text-gray-300">
                                    None
                                  </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountryCard;
