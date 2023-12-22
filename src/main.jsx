import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Security/Login.jsx";
import SignUp from "./components/Security/SignUp.jsx";
import About from "./components/Home/About.jsx";
import Contact from "./components/Home/Contact.jsx";
import Layout from "./components/Home/Layout/Layout.jsx";
import AuthProvider from "./components/Security/AuthProvider.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Assign from "./components/Dashboard/Assign.jsx";
import Managetask from "./components/Dashboard/Managetask.jsx";
import Task from "./components/Dashboard/Task.jsx";
import TodoList from "./components/Dashboard/TodoList.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/Login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
            {
                path: "/About",
                element: <About />,
            },
            {
                path: "/Contact",
                element: <Contact />,
            },
        ],
    },
    {
        path: "dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "assigntask",
                element: <Assign />,
            },
            {
                path: "managetask",
                element: <Managetask />,
            },
            {
                path: "todolist",
                element: <TodoList></TodoList>,
            },
            {
                path: "task",
                element: <Task></Task>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
