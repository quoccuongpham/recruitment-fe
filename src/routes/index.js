import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {CssBaseline} from "@mui/material";
import axios from "axios";

import Home from "./pages/Home.jsx";
import Jobs from "./pages/Jobs.jsx";
import Login, {action as LoginAction} from "./pages/Auth/Login.jsx";
import Register, {action as registerAction} from "./pages/Auth/Register.jsx";
import ErrorPage from "./pages/error_page.jsx";
import {home_loader} from "./data/loader.js";
// Employer
import Create_Profile from "./pages/Employer/Create_Profile.jsx";
import EmployerLayout from "./layouts/Employer/EmployerLayout.jsx";
import EmployerProfile from "./pages/Employer/Profile.jsx";
import PostJob, {
    action as PostJobAction,
} from "./pages/Employer/Post_Job.jsx";
import FindWorker, {
    action as FindWorkerAction,
} from "./pages/Employer/FindWorker.jsx";
import JobPosted, {
    loader as JobPostedLoader,
} from "./pages/Employer/JobPosted.jsx";
// Employee
import EmployeeLayout from "./layouts/Employee/EmployeeLayout.jsx";
import Job, {loader as employee_job_loader} from "./pages/Employee/Job.jsx";
import DetailJob, {
    loader as detail_job_loader,
    action as detail_job_action
} from "./pages/Employee/DetailJob.jsx";
import EmployeeProfile from "./pages/Employee/Profile.jsx";
import {action as logout} from "./layouts/Employee/Header.jsx";

const router = {}

export default router;