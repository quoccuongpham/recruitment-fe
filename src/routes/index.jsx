import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { home_loader } from "../data/loader/index.js";
import Home from "../pages/Home";
import Jobs from "../pages/Jobs";
import ErrorPage from "../pages/error_page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
        loader: home_loader,
        children: [{ path: "/jobs", element: <Jobs /> }],
    },
]);

const DefinedRouterProvider = () => {
    return <RouterProvider router={router} />;
};

export default DefinedRouterProvider;
