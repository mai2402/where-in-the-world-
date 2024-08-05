
/* eslint-disable */
import { createContext, useContext, useEffect, useReducer } from "react"




const CountryContext = createContext()

const initialState= {
    isLoading: false,
    countries: [],
    error:null,
    query:'',
    filteredCountries:[],
    filteredByRegion:[],
    selectedValue: '',
}



const BASE_URL = 'https://restcountries.com/v3.1/all';

function reducer(state,action){
    switch(action.type){
        case "loading" :
            return{
              ...state,  isLoading:true
            }
        case "fetched":
            return{
                ...state, 
                isLoading:false,
                countries: action.payLoad
            }    
        case "error":
            return{
                ...state,
                isLoading:false,
                error: action.payLoad
            }
        case "searchQuery":
            return{
                ...state,
                query: action.payLoad,
                filteredCountries: state.countries.filter(country=> 
                    country.name.common.toLowerCase().includes (action.payLoad.toLowerCase()))

            }   
        case "filteredByRegion":
            return{
                ...state,
                selectedValue:action.payLoad,
                filteredByRegion: state.countries.filter(country=>country.region.toLowerCase().includes( action.payLoad.toLowerCase()))
            }     
            default:
                throw new Error("Unknown Action!!")
    }

}



function CountryProvider({children}) {

    const [{selectedValue,filteredByRegion,isLoading,countries,error,query,filteredCountries},dispatch] = useReducer(reducer,initialState)
    console.log(filteredByRegion,"mkmkm")
    useEffect(()=>{
        const fetchCountries = async ()=>{

            dispatch({type:"loading"})
            try{
                  const response =  await fetch(BASE_URL)
                  if (!response.ok) {
                    throw new Error("Network response was not ok.");
                }
                  const countries = await response.json()
                 console.log(countries,"wow")
                  dispatch({type:"fetched", payLoad: countries})
            }
                 
            catch(e){
                dispatch({type:"error", payLoad: error})
                console.error(e)
            }
        }
        fetchCountries();
    },[])



    return (
        <CountryContext.Provider value={{selectedValue,countries,isLoading,error,filteredCountries,filteredByRegion,dispatch}}>
            {children}
        </CountryContext.Provider>
    )
}


function useCountries(){

    const countryContext = useContext(CountryContext)
    if (countryContext=== undefined) throw new Error( "country context is being used outside its provider")
    return countryContext;
}    

export  {CountryProvider,useCountries}
