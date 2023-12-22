/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import swal from "sweetalert";
import axios from "axios";

const Assign = () => {
    const [taskData, setTaskData] = useState({
        title: "",
        description: "",
        deadline: "",
        priority: "low",
    });

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
            const response = await axios.post(
                "https://taskmanagement-server-side.vercel.app/AllTask",
                taskData
            );

            swal({
                title: "Success",
                text: "Task added successfully!",
                icon: "success",
            });

            console.log("Task Data:", response.data);
        } catch (error) {
            swal({
                title: "Error",
                text: "Failed to add task. Please try again later.",
                icon: "error",
            });

            console.error("Error adding task:", error);
        }
    };

    return (
        <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Create New Task</h2>
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
                <div>
                    <button type="submit" className="btn btn-primary">
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Assign;
