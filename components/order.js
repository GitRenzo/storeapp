import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify"
import { formatCurrency } from "../helpers";
function Order({ order }) {
    const { id, name, total, clientOrder } = order
    const completeOrder = async () => {

        try {
            await axios.post(`/api/orders/${id}`, { id })
            toast.success("Order completed", { position: "bottom-left", }
            )
        } catch (error) {
            toast.error("there was an error", {
                position: "bottom-left",
            })
        }
    }
    return (
        <div className="border p-20 space-y-5">
            <h3 className="text-2xl font-bold">Order: {id}</h3>
            <p className="text-lg font-bold">Client: {name}</p>
            <div>
                {clientOrder.map(food => (
                    <div
                        className="py-3 flex border-b last-of-type:border-0 items-center"
                        key={food.id}>
                        <div className="w-32">
                            <Image
                                width={400}
                                height={500}
                                src={`/assets/img/${food.image}.jpg`}
                                alt={`Image food ${food.name}`}
                            />
                        </div>

                        <div className="p-5 space-y-2">
                            <h4 className="text-xl font-bold text-amber-500">{food.name}</h4>
                            <p className="text-lg font-bold">Quantity: {food.amount}</p>

                        </div>
                    </div>
                ))}
            </div>
            <div className="md:flex md:items-center md:justify-between my-10">
                <p className="mt-5 font-black text-4xl text-amber-500">Total to pay: {formatCurrency(total)}</p>
                <button
                    className="bg-indigo-600 hover:bg-indigo-800  text-white mt-5 md:mt-0 py-3 px-10 rounded-lg uppercase font-bold"
                    onClick={completeOrder}
                >
                    Order Completed
                </button>
            </div>
        </div>
    )
}

export default Order