import {createBrowserRouter} from "react-router-dom"
// eslint-disable-next-line @typescript-eslint/no-unused-vars


import HomePages from "../layouts/HomePages"
import HomeTemplates from "../modules/HomeTemplates"
import AuthenLayouts from "../layouts/AuthenLayouts"
import Authen from "../modules/Auth"
import DetailJob from "../modules/Auth/DetailJob"

export const router = createBrowserRouter([
    {path:"/",element:<HomePages/>,children:[
        {path:"/",element:<HomeTemplates/>}
    ]},
    {path:"/auth",element:<AuthenLayouts/>,children:[
        {path:"/auth/detail",element:<Authen/>},
        {path:"/auth/detail/:id",element:<DetailJob/>}
    ]}
])