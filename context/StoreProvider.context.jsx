"use client";
import { useState, useEffect, createContext } from "react"
import axios from "axios"

const StoreContext = createContext()

function StoreProvider({ children }) {
    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState({})
    const [product, setProduct] = useState({})
    const [modal, setModal] = useState(false)

    const getCategories = async () => {
        const { data } = await axios("/api/categories")
        setCategories(data.categories)
    }

    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        setCurrentCategory(categories[0])
    }, [categories])

    const handleClickCategory = (id) => {
        const category = categories.filter(cat => cat.id === id)
        setCurrentCategory(category[0])
    }

    const handleSetProduct = product => {
        setProduct(product)
    }

    const handleChangeModal = modal => {
        setModal(!modal)
    }
    return (
        <StoreContext.Provider value={{
            categories,
            currentCategory,
            handleClickCategory,
            product,
            handleSetProduct,
            modal,
            handleChangeModal,
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export {
    StoreProvider
}

export default StoreContext