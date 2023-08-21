"use client"
import useStoreTool from "../hooks/useStoreTool"

function ProductContent() {
    const { currentCategory } = useStoreTool()
    return (
        <div>
            <h1 className="text-4xl font-black">{currentCategory?.name}</h1>
            <p className="text-2xl my-10">Choose and customize your orders</p>
        </div>
    )
}

export default ProductContent