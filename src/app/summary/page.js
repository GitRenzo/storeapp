"use client"
import useStoreTool from "../../../hooks/useStoreTool"
import OrderSummary from "../../../components/orderSumary"

function Summary() {
    const { order } = useStoreTool()
    return (
        <>
            <h1 className="text-4xl font-black">Summary</h1>
            <p className="text-2xl my-10">Review your order</p>
            {order.length === 0 ?
                (<p className="text-center text-2xl">There are no items selected</p>)
                :
                (order.map((product) => (
                    <OrderSummary key={product.id} product={product} />
                )))
            }
        </>
    )
}

export default Summary