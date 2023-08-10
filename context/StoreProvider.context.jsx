"use client";
import { useState, useEffect, createContext } from "react"
import axios from "axios"

const StoreContext = createContext()

function StoreProvider({ children }) {
    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState({})

    const getCategories = async () => {
        const { data } = await axios("/api/categories")
        setCategories(data.categories)
    }

    useEffect(() => {
        getCategories()
    }, [])

    const handleClickCategory = (id) => {
        const category = categories.filter(cat => cat.id === id)
        setCurrentCategory(category[0])
    }

    return (
        <StoreContext.Provider value={{
            categories,
            currentCategory,
            handleClickCategory,
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export {
    StoreProvider
}

export default StoreContext