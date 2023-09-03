"use client";
import { useState, useEffect, createContext } from "react"
import axios from "axios"
import { toast } from "react-toastify";

const StoreContext = createContext()

function StoreProvider({ children }) {
    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState({})
    const [product, setProduct] = useState({})
    const [modal, setModal] = useState(false)
    const [order, setOrder] = useState([])

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

    const handleSetOrder = ({image, categoryId, ...product}) => {

        if(order.some(orderState => orderState.id === product.id )){
            const updatedOrder = order.map(orderState => orderState.id === product.id ? product : orderState )
            setOrder(updatedOrder)
            toast.success("Guardado correctamente")
        }
        else{
            setOrder([...order, product]);
            toast.success("Agregado al pedido")
        }

        setModal(false)
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
            order,
            handleSetOrder,
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export {
    StoreProvider
}

export default StoreContext