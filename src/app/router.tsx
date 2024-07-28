import { createBrowserRouter, Outlet } from "react-router-dom";

import Header from "../components/header/header";

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
                element: <h1>popular movies</h1>,
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
