import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Registration/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DashboardLayout from "../Layouts/DashboardLayout";
import AddClass from "../Pages/Dashboard/AddClass";
import Classes from "../Pages/Classes/Classes";
import AllUser from "../Components/AllUser/AllUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard/add-class",
        element: <AddClass></AddClass>,
      },
      {
        path: "/dashboard/all-user",
        element: <AllUser></AllUser>,
      },
    ],
  },
]);
