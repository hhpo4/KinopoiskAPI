import { createBrowserRouter, Outlet } from "react-router-dom";

import { Header } from "@/widgets/header/ui";
import { PopularMovies } from "@/pages/home";

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
                element: <PopularMovies />,
            },
            {
                path: "/search",
                element: <h1>searched movies</h1>,
            },
            {
                path: "/:movieId",
                element: <h1>movie details</h1>,
            },
            {
                path: "*",
                element: <h1>404</h1>,
            },
        ],
    },
]);
