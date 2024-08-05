import { useDarkMode } from "../contexts/ThemeContext"



function Header() {
   const {isDarkMode,setIsDarkMode} = useDarkMode()
     const headerClass= ` flex justify-between items-center box-border h-32 w-full ${isDarkMode? 'bg-slate-700': 'bg-white'}`
    return (
        <div  className={isDarkMode ? 'dark' : ''}>
        <header className={headerClass}>
          <h2 className="dark:text-white  text-black font-sans font-bold text-2xl "> Where in the world?</h2>

          <button   className="p-2 rounded-md transition-colors duration-300 dark:bg-gray-700 text-black  dark:hover:bg-gray-600 hover:bg-gray-400 font-sans "  
          onClick={()=>setIsDarkMode(!isDarkMode)}> {!isDarkMode ? '🌘 Dark Mode ' : ' ☀ '}</button>
        </header>
        </div>
    )
}

export default Header





