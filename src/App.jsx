import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom"
import HomePage from"../src/features/homePage/HomePage"
import Layout from './layout/Layout'
// import CountryCardDetails from "./features/countryPage/CountryCardDetail"
import {DarkModeProvider} from "./contexts/ThemeContext"
import { CountryProvider } from "./contexts/CountryContext"
import CountryCardDetails from "./features/countryPage/CountryCardDetail"
// import { SearchProvider } from "./contexts/SearchContext"
function App() {
  return (
    <div >
     <DarkModeProvider>
      <CountryProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<HomePage />} />
              <Route path="/country/:cca3" element={<CountryCardDetails/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CountryProvider>
    </DarkModeProvider>
    </div>
  )
}

export default App
