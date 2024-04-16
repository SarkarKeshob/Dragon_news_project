import { createBrowserRouter } from "react-router-dom";
import Roots from "../Components/Roots/Roots";
import Home from "../Pages/Home/Home";
import NewsList from "../Pages/Home/NewsList/NewsList";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";


const router=createBrowserRouter([
    {
        path:'/',
        element:<Roots></Roots>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                children:[
                    {
                        path:'/',
                        element:<NewsList></NewsList>
                    },
                    {
                        path:`/categories/:id`,
                        element:<NewsList></NewsList>
                    },
                    
                ]
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/news-details/:id',
                element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
            },
            {
                path:'/contact',
                element:<Contact></Contact>

            },
            {
                path:'/about',
                element:<About></About>
            }
        ]
    }
])

export default router;