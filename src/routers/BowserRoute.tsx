import {createBrowserRouter} from "react-router-dom"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Header from "../components/Headers"

import HomePages from "../layouts/HomePages"
import HomeTemplates from "../modules/HomeTemplates"

export const router = createBrowserRouter([
    {path:"/",element:<HomePages/>,children:[
        {path:"/",element:<HomeTemplates/>}
    ]}
])