import {createBrowserRouter} from "react-router-dom"
import Header from "../components/Headers"

export const router = createBrowserRouter([
    {path:"/",element:<Header/>}
])