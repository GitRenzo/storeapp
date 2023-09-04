"use client";
import { useState, useEffect, createContext } from "react"
import axios from "axios"
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const StoreContext = createContext()

function StoreProvider({ children }) {
    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState({})
    const [product, setProduct] = useState({})
    const [modal, setModal] = useState(false)
    const [order, setOrder] = useState([])
    const [name, setName] = useState("")
    const [total, setTotal] = useState(0)
    const router = useRouter()

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

    useEffect(()=> {
        const updatedTotal = order.reduce((total, product) => (product.price * product.amount) + total, 0)
        setTotal(updatedTotal)
    }, [order])

    const handleClickCategory = (id) => {
        const category = categories.filter(cat => cat.id === id)
        setCurrentCategory(category[0])
        router.push("/")
    }

    const handleSetProduct = product => {
        setProduct(product)
    }

    const handleChangeModal = modal => {
        setModal(!modal)
    }

    const handleSetOrder = ({ categoryId, ...product }) => {

        if (order.some(orderState => orderState.id === product.id)) {
            const updatedOrder = order.map(orderState => orderState.id === product.id ? product : orderState)
            setOrder(updatedOrder)
            toast.success("Guardado correctamente")
        }
        else {
            setOrder([...order, product]);
            toast.success("Agregado al pedido")
        }

        setModal(false)
    }

    const handleEditQuantity = (id) => {
        const updateProduct = order.filter(productValue => productValue.id === id)
        setProduct(updateProduct[0])
        setModal(!modal)
    }

    const handleDeleteProduct = id => {
        const updatedOrder = order.filter(orderState => orderState.id != id)
        setOrder(updatedOrder)
    }


    const submitOrder = async (e) => {
        e.preventDefault()
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
            handleEditQuantity,
            handleDeleteProduct,
            name,
            setName,
            submitOrder,
            total,
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export {
    StoreProvider
}

export default StoreContext