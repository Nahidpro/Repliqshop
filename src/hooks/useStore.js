import { useContext } from "react";
import storeContext from "../contexts/StoreContext";
const useStore = ( )=> {
    
    return useContext(storeContext)
}
export default useStore