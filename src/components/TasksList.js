import React, { useState } from "react";
import '../css/TasksList.css'
import TaskForm from "./TaskForm";
import Tasks from "./Tasks";

function TasksList() {

    const [tasks, setTask] = useState([]);

    const addTask = task => {
        if (task.text.trim()) {
            task.text = task.text.trim();
            const updatedTasks = [task, ...tasks];
            setTask(updatedTasks)
        } else {
            alert("Please enter a task");
        }
    }

    const deleteTask = id => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            const updatedTasks = tasks.filter(task => task.id !== id);
            setTask(updatedTasks);
        }
    };

    const completeTask = id => {
        const updatedTasks = tasks.map(task => task.id === id ? { ...task, completed: true } : task); 	// filter task with id equal
        console.log(updatedTasks)
        setTask(updatedTasks);
    }

    return (
        <>
            <TaskForm onSubmit={addTask} />
            <div className="container-tasks-list">
                {
                    tasks.map((task) =>
                        <Tasks
                            key={task.id}
                            id={task.id}
                            text={task.text}
                            completed={task.completed}
                            deleteTask={deleteTask}
                            completeTask={completeTask}
                        />
                    )
                }

            </div>
        </>

    )
}

export default TasksList;