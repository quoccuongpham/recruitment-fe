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

// loader
import {
	employer_list_apply_loader,
	home_loader,
	employee_myjob_loader,
} from "./data/loader/index.js";
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
import ListApply from "./pages/Employer/ListApply.jsx";
// Employee
import EmployeeLayout from "./layouts/Employee/EmployeeLayout.jsx";
import Job, { loader as employee_job_loader } from "./pages/Employee/Job.jsx";
import DetailJob, {
	loader as detail_job_loader,
	action as detail_job_action,
} from "./pages/Employee/DetailJob.jsx";
import EmployeeProfile, {
	loader as employee_profile_loader,
} from "./pages/Employee/Profile.jsx";
import EmployeeCreateProfile, {
	action as employee_create_profile_action,
} from "./pages/Employee/create-profile.jsx";
import { action as logout } from "./layouts/Employee/Header.jsx";
import MyJob from "./pages/Employee/my-job.jsx";
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
	{ path: "/auth/logout", action: logout },
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
				element: <EmployerProfile />,
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
			{
				path: "/employer/apply/:id",
				element: <ListApply />,
				loader: employer_list_apply_loader,
			},
		],
	},
	{
		path: "/employee",
		element: <EmployeeLayout />,
		loader: home_loader,
		children: [
			{
				path: "/employee/job",
				element: <Job />,
				loader: employee_job_loader,
			},
			{
				path: "/employee/detail-job/:id",
				element: <DetailJob />,
				loader: detail_job_loader,
				action: detail_job_action,
			},
			{
				path: "/employee/profile",
				element: <EmployeeProfile />,
				loader: employee_profile_loader,
			},
			{
				path: "/employee/create-profile",
				element: <EmployeeCreateProfile />,
				action: employee_create_profile_action,
				loader: employee_profile_loader,
			},
			{
				path: "/employee/my-job",
				element: <MyJob />,
				loader: employee_myjob_loader,
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
