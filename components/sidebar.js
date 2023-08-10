"use client";
import Image from "next/image"
import useStoreTool from "../hooks/useStoreTool"
// components
import Category from "./category";
function Sidebar() {
    const { categories } = useStoreTool()
    return (
        <>
            <Image width={150} height={150} src="/assets/img/logo.svg" alt="sidebar image" />
            <nav className="mt-10">
                {categories.map(category => (
                    <Category
                        key={category.id}
                        category={category}
                    />
                ))}
            </nav>
        </>
    )
}

export default Sidebar