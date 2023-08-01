import Image from "next/image"

function Category({ category }) {
    const { id, name, icon } = category
    return (
        <div className={`flex flex-row items-center w-full border p-5 hover:bg-amber-400 ${id === 1 ? "" : "mt-2"}`}>
            <Image
                width={70}
                height={70}
                src={`/assets/img/icono_${icon}.svg`}
                alt="Icon image"
                className="mr-5"
            />

            <button type="button" className="text-2xl font-bold hover:cursor-pointer">
                {name}
            </button>
        </div>
    )
}

export default Category