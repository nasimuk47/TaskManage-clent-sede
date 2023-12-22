/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const { taskId } = useParams();
    const [taskData, setTaskData] = useState({
        title: "",
        description: "",
        deadline: "",
        priority: "low",
    });

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await axios.get(
                    `https://taskmanagement-server-side.vercel.app/AllTask/${taskId}`
                );
                setTaskData(response.data);
            } catch (error) {
                console.error("Error fetching task:", error);
            }
        };

        fetchTask();
    }, [taskId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTaskData({
            ...taskData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(
                `https://taskmanagement-server-side.vercel.app/AllTask/${taskId}`,
                taskData
            );
            console.log("Update Response:", response.data);

            // Use SweetAlert to show a success message
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "Task updated successfully!",
            });
        } catch (error) {
            console.error("Error updating task:", error);

            // Use SweetAlert to show an error message
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to update task",
            });
        }
    };

    return (
        <div>
            <div className="bg-gray-100 p-6 rounded-md shadow-md">
                <h2 className="text-2xl font-bold mb-4">Update Task</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-600">
                            Title:
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={taskData.title}
                            onChange={handleInputChange}
                            className="input input-bordered w-full max-w-xs"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-600">
                            Description:
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={taskData.description}
                            onChange={handleInputChange}
                            className="textarea textarea-bordered w-full"
                            required></textarea>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="deadline"
                            className="block text-sm font-medium text-gray-600">
                            Deadline:
                        </label>
                        <input
                            type="date"
                            id="deadline"
                            name="deadline"
                            value={taskData.deadline}
                            onChange={handleInputChange}
                            className="input input-bordered w-full max-w-xs"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="priority"
                            className="block text-sm font-medium text-gray-600">
                            Priority:
                        </label>
                        <select
                            id="priority"
                            name="priority"
                            value={taskData.priority}
                            onChange={handleInputChange}
                            className="select select-bordered w-full max-w-xs"
                            required>
                            <option value="low">Low</option>
                            <option value="moderate">Moderate</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Update Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Update;
