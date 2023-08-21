import Image from "next/image"
import useStoreTool from "../hooks/useStoreTool"


function Category({ category }) {
    const { currentCategory, handleClickCategory } = useStoreTool()
    const { id, name, icon } = category
    return (
        <div className={`${currentCategory?.id === id ? "bg-amber-400": ""} flex flex-row items-center w-full border p-5 hover:bg-amber-400 ${id === 1 ? "" : "mt-2"}`}
            onClick={() => handleClickCategory(id)}
        >
            <Image
                width={70}
                height={70}
                src={`/assets/img/icono_${icon}.svg`}
                alt="Icon image"
                className="mr-5"
            />

            <button type="button" className="text-2xl font-bold hover:cursor-pointer"

            >
                {name}
            </button>
        </div>
    )
}

export default Category