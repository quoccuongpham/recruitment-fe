import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import axios from "axios";

import Home from "./pages/Home.jsx";
import Jobs from "./pages/Jobs.jsx";
import Login from "./pages/Auth/Login.jsx";
import Register, { action as registerAction } from "./pages/Auth/Register.jsx";
import ErrorPage from "./pages/error_page.jsx";
import { home_loader } from "./data/loader.js";
// Employer
import Create_Profile from "./pages/Employer/Create_Profile.jsx";
import EmployerLayout from "./layouts/Employer/EmployerLayout.jsx";
import Profile from "./pages/Employer/Profile.jsx";

//* config axios
axios.defaults.baseURL = "http://localhost:3000";
// axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";
axios.defaults.withCredentials = true;

//* router
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
        loader: home_loader,
    },
    { path: "/jobs", element: <Jobs /> },
    { path: "/auth/login", element: <Login /> },
    { path: "/auth/register", element: <Register />, action: registerAction },
    {
        path: "/employer",
        element: <EmployerLayout/>,
        loader: home_loader,
        children: [
            {
                path: "/employer/create-profile",
                element: <Create_Profile/>
            },
            {
                path: "/employer/profile",
                element: <Profile/>
            }
        ]
    },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CssBaseline />
        <RouterProvider router={router} />
    </React.StrictMode>
);
