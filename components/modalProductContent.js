"use client"
import { useState } from "react"
import useStoreTool from "../hooks/useStoreTool"
import Image from "next/image"
// formatCurrency helper
import { formatCurrency } from "../helpers"
function ModalProductContent() {
  const { product, handleChangeModal } = useStoreTool()
  const [amount, setAmount] = useState(1)
  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image src={`/assets/img/${product.image}.jpg`} width={300} height={400} alt={`Image product ${product.name}`}></Image>
      </div>

      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button onClick={handleChangeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

          </button>
        </div>
        <h1 className="text-3xl font-bold mt-5">{product.name}</h1>
        <p className="mt-5 font-black text-5xl text-amber-500">
          {formatCurrency(product.price)}
        </p>

        <div className="flex  mt-5 gap-4">


          <button type="button"
            onClick={() => {
              if(amount <= 1) return
              setAmount(amount - 1)
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>

          <p className="text-3xl">{amount}</p>

          <button type="button"
            onClick={() => {
              setAmount(amount + 1)
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalProductContent