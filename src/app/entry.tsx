import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { router } from "./router.tsx";
import { store } from "./store.ts";
import "@/shared/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
            <RouterProvider router={router} />
    </Provider>
);
