import {createBrowserRouter} from "react-router-dom"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ReactNode } from 'react';
import HomePages from "../layouts/HomePages"
import HomeTemplates from "../modules/HomeTemplates"
import AdminLayout from "../layouts/Admin"
import Work from "../modules/Admin/Work";
import Typework from "../modules/Admin/TypeofWork";
import UserManagement from "../modules/Admin/UserManagement";
import AccountSetting from "../modules/Admin/AccountSetting";
import ServiceManagement from "../modules/Admin/ServicesManagement";
import AuthenLayouts from "../layouts/AuthenLayouts";
import Authen from "../modules/Auth";
import DetailJob from "../modules/Auth/DetailJob";

interface CustomRouteType {
    path: string;
    element: ReactNode;
    children?: CustomRouteType[];
}

// Define the routes array with the custom type
const routes: CustomRouteType[] = [
    {
        path: "/",
        element: <HomePages />,
        children: [
            {
                path: "/",
                element: <HomeTemplates />
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                path: '/admin/Work',
                element: <Work/>
            },
            {
                path: '/admin/Type-work',
                element: <Typework/>
            },
            {
                path: '/admin/user-management',
                element: <UserManagement/>
            },

            {
                path: '/admin/services-management',
                element: <ServiceManagement/>
            },
            {
                path: '/admin/account-settings',
                element: <AccountSetting/>
            },
            
        ]
    },
    {
        path:"/auth",element:<AuthenLayouts/>,children:[
        {path:"/auth/detail/:derc",element:<Authen/>},
        {path:"/auth/detail/description/:id",element:<DetailJob/>}
    ]}
];

// Create the router with the defined routes
export const router = createBrowserRouter(routes);
