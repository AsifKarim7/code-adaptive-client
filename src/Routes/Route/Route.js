import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Registration from "../../Pages/Registration/Registration";
import Premium from "../../Pages/Premium/Premium";
import Course from "../../Pages/Course/Course";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`https://code-adaptive-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/premium/:id',
                element: <PrivateRoute><Premium></Premium></PrivateRoute>,
                loader: ({ params }) => fetch(`https://code-adaptive-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            }

        ]
    }
])