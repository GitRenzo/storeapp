"use client"
import { formatCurrency } from "../../../../helpers";
import { useCallback, useEffect } from "react";
import useStoreTool from "../../../../hooks/useStoreTool";

function Total() {

  const { order, name, setName, submitOrder, total } = useStoreTool()


  const verifyOrder = useCallback(() => {
    return order.length === 0 || name.replace(/\s+/g, '') === ""
  }
    , [order, name])

  useEffect(() => {
    verifyOrder()
  }, [order, verifyOrder])


  return (
    <>
      <h1 className="text-4xl font-black">Total and confirm your order</h1>
      <p className="text-2xl my-10">Confirm your order</p>

      <form onSubmit={submitOrder}>
        <div>
          <label htmlFor="name" className="block uppercase text-slate-500 text-xl font-bold">
            Name
          </label>
          <input type="text" id="name" value={name} onChange={e => { setName(e.target.value) }}
            className="bg-gray-200 w-full mt-3 lg:w-1/3 p-2 rounded"
          />
        </div>

        <div className="mt-10 ">
          <p className="text-2xl">Total to pay {``} <span className="font-bold"> {formatCurrency(total)} </span></p>
        </div>
        <div className="mt-5">
          <input type="submit" disabled={verifyOrder()}
            className={`${verifyOrder() ? "bg-indigo-100" : "bg-indigo-600 hover:bg-indigo-800"} w-full lg:w-auto px-5 py-2 rounded uppercase text-center font-bold text-white hover:cursor-pointer`}
            value="Confirm order"
          />
        </div>
      </form>
    </>
  )
}

export default Total