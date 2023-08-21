import { useContext } from "react"
import StoreContext from "../context/StoreProvider.context"

const useStoreTool = () => useContext(StoreContext)



export default useStoreTool