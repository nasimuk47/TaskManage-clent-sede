/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Security/AuthProvider";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://taskmanagement-server-side.vercel.app/AllTask"
                );
                if (Array.isArray(response.data)) {
                    setTasks(response.data);
                } else {
                    console.error(
                        "Invalid data format received:",
                        response.data
                    );
                }
            } catch (error) {
                console.error("Error fetching tasks:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (taskId) => {
        try {
            console.log("Deleting task with ID:", taskId);
            const response = await axios.delete(
                `https://taskmanagement-server-side.vercel.app/AllTask/${taskId}`
            );

            console.log("Response:", response.data);

            setTasks((prevTasks) =>
                prevTasks.filter((task) => task._id !== taskId)
            );
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    return (
        <div className="p-10">
            <div>
                <div className="overflow-x-auto">
                    {loading ? (
                        <p>Loading tasks...</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                            {tasks.map((task) => (
                                <div
                                    key={task._id}
                                    className="bg-gray-200 border p-4">
                                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
                                        {task.title}
                                    </h1>
                                    <p className="text-sm md:text-base">
                                        {task.description}
                                    </p>
                                    <p className="text-xs md:text-sm">
                                        Deadline: {task.deadline}
                                    </p>
                                    <div className="flex justify-between">
                                        <p className="text-xs md:text-sm">
                                            Priority: {task.priority}
                                        </p>

                                        <div className="flex gap-1">
                                            <button
                                                className="btn"
                                                onClick={() =>
                                                    handleDelete(task._id)
                                                }>
                                                <FaTrash className="text-red-500" />
                                            </button>{" "}
                                            <Link to={`/update/${task._id}`}>
                                                <button className="btn text-red-500">
                                                    <FaRegEdit /> edit
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TodoList;
