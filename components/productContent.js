"use client"
import useStoreTool from "../hooks/useStoreTool"
import Product from "./product"

function ProductContent() {
    const { currentCategory, testApi } = useStoreTool()
    return (
        <div>
            <h1 className="text-4xl font-black">{currentCategory?.name}</h1>
            <p className="text-2xl my-10">Choose and customize your orders</p>
            <div className="grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols4">
                {currentCategory?.products?.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductContent