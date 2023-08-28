'use client'
import { createContext, useContext, useEffect ,useReducer} from "react";
import reducer from "../reducer/FilterReducer"
import axios from "axios";
import { useAppContext } from "./AppContext";

const initialState:any={
    products:[],
    filterProducts:[],
    uniqueColors:[],
    unique_types:[],
    uniqueCompanies:[],
    uniqueSizes:[],
    uniqueCategories:[],
    filters:{
        color:"",
        type:"",
        company:"",
        size:"",
        price:0
    },
    minimum_price:0,
    maximum_price:0
}
const FilterContext=createContext(initialState)


const FilterProvider=({children}:any)=>{
    const [state, dispatch]:any = useReducer(reducer, initialState)
    const {products}=useAppContext()


    const updateFilterValue=(e:any)=>{
       console.log(e)
       console.log(e.target)
       console.log(e.target.name)
        const name=e.target.name;
        const value=e.target.value;

        // console.log(name)
        console.log(value)
        dispatch({type:"UPDTAE_FILTER",payload:{name,value}})
    }

    const clearFilter=()=>{
        dispatch({type:"ClEAR_FILTER"})
    }

    useEffect(()=>{
        dispatch({type:"SET_FILTER_PRODUCTS",payload:products})
        dispatch({type:"GET_UNIQUE_COLORS",payload:products})
        dispatch({type:"GET_UNIQUE_TYPES",payload:products})
        dispatch({type:"GET_UNIQUE_COMPANIES",payload:products})
        dispatch({type:"GET_UNIQUE_SIZES",payload:products})
        dispatch({type:"GET_MIN_MAX_PRICE",payload:products})
        dispatch({type:"GET_UNIQUE_CATEGORIES",payload:products})
    
    },[products])
   
   

    useEffect(()=>{
        dispatch({type:"FILTER_PRODUCTS"})
    },[state.filters])

   
    return(
        <FilterContext.Provider value={{...state,updateFilterValue,clearFilter}}>{children}</FilterContext.Provider>
    )
}

const useFilterContext=()=>{
    return useContext(FilterContext)
}

export {FilterContext,FilterProvider,useFilterContext}