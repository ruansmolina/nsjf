import { createBrowserRouter } from "react-router-dom";
import ProductPage from "../features/product/pages/ProductPage";
import { queryClient } from "./queryClient";
import { productsQuery } from "../features/product/queries/productsQuery";
import MainLayout from "../components/layout/MainLayout";


export const  router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'products',
                loader: async ()=> {
                    try{
                        await queryClient.ensureQueryData(productsQuery());
                    }catch{
                        return null;// Page resolve
                    }
                    
                },
                element:<ProductPage/>
            }
        
        ]
        
    }
]);