"use client"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import useStoreTool from "../hooks/useStoreTool"

const steps = [
    { step: 1, name: "Menu", percentage: 10, url: "/" },
    { step: 2, name: "Summary", percentage: 50, url: "/summary" },
    { step: 3, name: "Total", percentage: 100, url: "/total" },
]

function Steps() {
    const { handleChangeStep } = useStoreTool()
    const router = useRouter()
    const pathname = usePathname()
    const progress = () => {
        let currentPercentage = steps.filter(step => step.url === pathname )
        return currentPercentage[0].percentage;
    }
    

    return (
        <>
            <div className="flex justify-between mb-5">
                {steps.map(step => (
                    <button
                        key={step.step}
                        className="text-2xl font-bold"
                        onClick={() => { 
                            router.push(step.url)
                        }}
                    >
                        {step.name}
                    </button>
                ))}
            </div>

            <div className="bg-gray-100 mb-10">
                <div className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white w-10"
                style={{width: `${progress()}%`}}
                >

                </div>
            </div>
        </>
    )
}

export default Steps