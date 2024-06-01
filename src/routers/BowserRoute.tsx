import {createBrowserRouter} from "react-router-dom"

import HomePages from "../layouts/HomePages"
import HomeTemplates from "../modules/HomeTemplates"

export const router = createBrowserRouter([
    {path:"/",element:<HomePages/>,children:[
        {path:"/",element:<HomeTemplates/>}
    ]}
])