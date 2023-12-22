/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Security/AuthProvider";
import { BiTask } from "react-icons/bi";
import { FaTasks, FaHome, FaEnvelope } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdTask } from "react-icons/md";
import { MdOutlineTaskAlt } from "react-icons/md";

const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch((error) => console.log(error));
    };

    return (
        <div className="flex">
            <div className="w-72 min-h-screen bg-blue-400">
                <ul className="menu p-4">
                    <div className="flex justify-center items-center mb-5">
                        <li>
                            {user && user.photoURL && (
                                <img
                                    className="w-[60%] h-[100%]"
                                    src={user.photoURL}
                                    alt=""
                                />
                            )}
                        </li>
                        <li>
                            <h1 className="text-xl flex items-center font-bold">
                                {user?.displayName || "Guest"}
                            </h1>
                        </li>
                    </div>
                    <li>
                        <NavLink to="/dashboard/assigntask">
                            <BiTask /> Assign Task
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/task">
                            <MdTask />
                            AllTask
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/todolist">
                            <MdOutlineTaskAlt />
                            To-doList
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/managetask">
                            <FaTasks /> Manage Task
                        </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome /> Home
                        </NavLink>
                    </li>
                    <li>
                        <button onClick={handleLogOut}>
                            <FiLogOut></FiLogOut> LogOut
                        </button>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-3">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
