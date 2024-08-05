/* eslint-disable */

import { Link } from "react-router-dom"


function CountryItem({country}) {
    return (
        
      <Link to={`/country/${country.cca3}`} className="block bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
          <img src={country.flags.png} alt={country.name.common} className="w-full h-auto" />
          <h3 className="text-xl font-bold mb-2">{country.name.common}</h3>
          <p className="text-gray-700 dark:text-gray-300"><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p className="text-gray-700 dark:text-gray-300"><strong>Region:</strong> {country.region}</p>
          <p className="text-gray-700 dark:text-gray-300"><strong>Capital:</strong> {country.capital}</p>
      </div>
  </Link>
    
    )
}



export default CountryItem
