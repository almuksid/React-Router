import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Root from "../pages/Root";
import Product from "../pages/Product";

export const ourRouter = createBrowserRouter([
    {path:"/", 
        element: <Root/>, 
        children:[
            {path: "/about", element: <About/> },
            {path: "/", element: <Home/> },
            {path: "/product", element:<Product/>}
    ]},
    
])