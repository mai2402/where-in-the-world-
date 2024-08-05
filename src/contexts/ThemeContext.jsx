
/* eslint-disable */

import { createContext, useContext, useState } from "react"

const DarkModeContext  = createContext()



function DarkModeProvider({children}) {
    const [isDarkMode , setIsDarkMode]=useState(false)
    return (
        <DarkModeContext.Provider value={{isDarkMode,setIsDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}


function useDarkMode() {
    const darkModeContext = useContext(DarkModeContext);
    if (darkModeContext === undefined) {
        throw new Error("useDarkMode must be used within a DarkModeProvider");
    }
    return darkModeContext;
}

export {DarkModeProvider,useDarkMode}
