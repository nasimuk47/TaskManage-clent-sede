import React, { useState, useEffect } from "react";
import axios from "axios";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Task = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/AllTask"
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

    const handleDragEnd = async (result) => {
        if (!result.destination) {
            return;
        }

        const updatedTasks = [...tasks];
        const [movedTask] = updatedTasks.splice(result.source.index, 1);
        updatedTasks.splice(result.destination.index, 0, movedTask);

        setTasks(updatedTasks);

        try {
            const response = await axios.put(
                "http://localhost:5000/AllTask/status",
                {
                    taskId: movedTask._id,
                    status: result.destination.droppableId,
                }
            );

            console.log("Task status updated on the server:", response.data);
        } catch (error) {
            console.error("Error updating task status:", error);
        }
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div className="p-6">
                <div className="flex justify-around gap-1">
                    <Droppable droppableId="task-list">
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="w-full border p-2 bg-green-300">
                                <h1 className="text-2xl font-bold mb-3">
                                    To-Do List
                                </h1>

                                <div className="overflow-x-auto">
                                    {loading ? (
                                        <p>Loading tasks...</p>
                                    ) : (
                                        <Draggable
                                            draggableId="task-list"
                                            index={0}>
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                                                        {tasks.map(
                                                            (task, index) => (
                                                                <Draggable
                                                                    key={
                                                                        task._id
                                                                    }
                                                                    draggableId={
                                                                        task._id
                                                                    }
                                                                    index={
                                                                        index
                                                                    }>
                                                                    {(
                                                                        provided
                                                                    ) => (
                                                                        <div
                                                                            ref={
                                                                                provided.innerRef
                                                                            }
                                                                            {...provided.draggableProps}
                                                                            {...provided.dragHandleProps}
                                                                            key={
                                                                                task._id
                                                                            }
                                                                            className="bg-gray-200 border p-2">
                                                                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
                                                                                {
                                                                                    task.title
                                                                                }
                                                                            </h1>
                                                                            <p className="text-sm md:text-base">
                                                                                {
                                                                                    task.description
                                                                                }
                                                                            </p>
                                                                            <p className="text-xs md:text-sm">
                                                                                Deadline:{" "}
                                                                                {
                                                                                    task.deadline
                                                                                }
                                                                            </p>
                                                                            <div className="flex justify-between">
                                                                                <p className="text-xs md:text-sm">
                                                                                    Priority:{" "}
                                                                                    {
                                                                                        task.priority
                                                                                    }
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </Draggable>
                                                            )
                                                        )}
                                                    </div>
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Draggable>
                                    )}
                                </div>
                            </div>
                        )}
                    </Droppable>

                    <Droppable droppableId="ongoing">
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="w-full border bg-blue-300">
                                <h1>Ongoing</h1>
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>

                    <Droppable droppableId="completed">
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="w-full border bg-yellow-300">
                                <h1>Completed</h1>
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>
            </div>
        </DragDropContext>
    );
};

export default Task;
