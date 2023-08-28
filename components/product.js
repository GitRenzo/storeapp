import Image from "next/image"
import { formatCurrency } from "../helpers"
import useStoreTool from "../hooks/useStoreTool"

function Product({ product }) {
    const { handleSetProduct, handleChangeModal } = useStoreTool()
    const { image, name, price } = product
    return (
        <div className='border p-3'>
            <Image
                src={`/assets/img/${image}.jpg`}
                alt={`Food image ${name}`}
                width={400} height={500} />

            <div className="p-5">
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">
                    {formatCurrency(price)}
                </p>

                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-4 p-3 uppercase font-bold"
                    onClick={() => {
                        handleChangeModal()
                        handleSetProduct(product)
                    }}
                >
                    Add</button>
            </div>
        </div>
    )
}

export default Product