import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../Pages/ErrorPage";
import Timeline from "../Pages/Timeline";
import Stats from "../Pages/Stats";
import FriendDetails from "../Pages/FriendDetails";

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
            },
            {
                path:'/friendDetails/:id',
                loader: ()=> fetch('/friends.json'),
                Component:FriendDetails
            }        
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])