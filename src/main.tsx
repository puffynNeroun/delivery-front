import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Catalog from "./pages/Catalog.tsx";
import MoreAbout from "./components/MoreAbout.tsx";
import BasketList from "./pages/BasketList.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            { path: "", element: <Home /> },
            { path: "catalog", element: <Catalog /> },
            { path: "more", element: <MoreAbout /> },
            { path: "basket", element: <BasketList /> },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />;
    </Provider>
  </StrictMode>
);
