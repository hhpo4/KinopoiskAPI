import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./router.tsx";
import { MoviesProvider } from "@/shared/context.tsx";
import "@/shared/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <MoviesProvider>
        <RouterProvider router={router} />
    </MoviesProvider>
);
