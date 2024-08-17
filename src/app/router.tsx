import { createBrowserRouter, Outlet } from "react-router-dom";

import Header from "@/widgets/header";
import HomePage from "@/pages/home";
import MovieDetails from "@/pages/movie-details";


export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div className="container">
                <Header />
                <Outlet />
            </div>
        ),
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/search",
                element: <h1>searched movies</h1>,
            },
            {
                path: "/:movieId",
                element: <MovieDetails/>,
            },
            {
                path: "*",
                element: <h1>404</h1>,
            },
        ],
    },
]);
