import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import Home from "./pages/Home.jsx";
import ErrorPage from "./pages/error_page.jsx";
const router = createBrowserRouter([
    { path: "/", element: <Home />, errorElement: <ErrorPage /> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CssBaseline />
        <RouterProvider router={router} />
    </React.StrictMode>
);
