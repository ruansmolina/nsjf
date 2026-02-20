import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";
import { queryClient } from "./queryClient";
import { router } from "./router";

function Providers () {
    return  ( 
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
            
    </QueryClientProvider> );
}

export default Providers ;