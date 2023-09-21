import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import axios from "axios";

import Home from "./pages/Home.jsx";
import Jobs from "./pages/Jobs.jsx";
import Login, { action as LoginAction } from "./pages/Auth/Login.jsx";
import Register, { action as registerAction } from "./pages/Auth/Register.jsx";
import ErrorPage from "./pages/error_page.jsx";
import { home_loader } from "./data/loader.js";
// Employer
import Create_Profile from "./pages/Employer/Create_Profile.jsx";
import EmployerLayout from "./layouts/Employer/EmployerLayout.jsx";
import Profile from "./pages/Employer/Profile.jsx";
import PostJob, {
    action as PostJobAction,
} from "./pages/Employer/Post_Job.jsx";
import FindWorker, {
    action as FindWorkerAction,
} from "./pages/Employer/FindWorker.jsx";
import JobPosted, {
    loader as JobPostedLoader,
} from "./pages/Employer/JobPosted.jsx";
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
        children: [{ path: "/jobs", element: <Jobs /> }],
    },
    { path: "/auth/login", element: <Login />, action: LoginAction },
    { path: "/auth/register", element: <Register />, action: registerAction },
    {
        path: "/employer",
        element: <EmployerLayout />,
        loader: home_loader,
        children: [
            {
                path: "/employer/create-profile",
                element: <Create_Profile />,
            },
            {
                path: "/employer/profile",
                element: <Profile />,
            },
            {
                path: "/employer/post-job",
                action: PostJobAction,
                element: <PostJob />,
            },
            {
                path: "/employer/find-worker",
                action: FindWorkerAction,
                element: <FindWorker />,
            },
            {
                path: "/employer/job-posted",
                loader: JobPostedLoader,
                element: <JobPosted />,
            },
        ],
    },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CssBaseline />
        <RouterProvider router={router} />
    </React.StrictMode>
);
