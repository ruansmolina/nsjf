import { createBrowserRouter } from "react-router";

import MainLayout from "../components/layout/MainLayout";


export const  router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
               
            }
        
        ]
        
    }
]);