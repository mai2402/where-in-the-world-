import DropDownMenu from "../../shared/DropDownMenu"
import Search from "../../shared/Search"
import CountryList from "./CountryList"


function HomePage() {
    return (
        <div>
            <div className="flex justify-between items-center">
            <Search/>
           <DropDownMenu/>
            </div>
           <CountryList/>
        </div>
    )
}

export default HomePage
