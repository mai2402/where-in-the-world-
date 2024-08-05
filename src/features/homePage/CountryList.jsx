import { useCountries } from "../../contexts/CountryContext"
import CountryItem from "./CountryItem"

  

function CountryList() {
  const {countries, filteredByRegion,selectedValue } = useCountries()
 
    if(selectedValue) return (
      <div className="container mx-auto p-4">
            <ul  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
           {filteredByRegion.map(country=><CountryItem key={country.cca3} country={country}/>)}
        </ul>
        </div>
    )
    return (

        <div className="container mx-auto p-4">
            <ul  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
           {countries.map(country=><CountryItem key={country.cca3} country={country}/>)}
        </ul>
        </div>
    )
}

export default CountryList
