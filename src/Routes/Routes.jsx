import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../Pages/ErrorPage";
import Timeline from "../Pages/Timeline";
import Stats from "../Pages/Stats";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children:[
            {
                index:true,
                Component: HomePage
            },
            {
                path:'/timeline',
                Component:Timeline
            },
            {
                path:'/stats',
                Component:Stats
            }
        
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])