import { useContext } from "react"
import StoreContext from "../context/StoreProvider.context"

const useStoreTool = () => {
    return (
        useContext(StoreContext)
    )
}

export default useStoreTool