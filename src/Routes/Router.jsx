import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SingUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/SignUp",
        element: <SignUp />
    }
]);

export default router;