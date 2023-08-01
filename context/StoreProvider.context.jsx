"use client";
import { useState, useEffect, createContext } from "react"
import axios from "axios"

const StoreContext = createContext()

function StoreProvider({ children }) {
    const [categories, setCategories] = useState([])
    
    const getCategories = async () => {
        const { data } = await axios("/api/categories")
        setCategories(data.categories)
    }

    useEffect(() => {
      getCategories()
    }, [])
    

    return (
        <StoreContext.Provider value={{
            categories,
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export {
    StoreProvider
}

export default StoreContext