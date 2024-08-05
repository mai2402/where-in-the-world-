import { useDarkMode } from "../contexts/ThemeContext"
import Header from "../layout/Header"
import {Outlet} from "react-router-dom"

function Layout() {

    const {isDarkMode} =useDarkMode()
    return (
        <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark' : ''}`}>
           <div className={`flex-1 ${isDarkMode? 'dark:bg-slate-800': 'bg-white'}`}>
            <Header/>
            <Outlet/>
           </div>
        </div>
       
    )
}

export default Layout
