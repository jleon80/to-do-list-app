import React from 'react'
import '../css/Tasks.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tasks({ id, text, completed, completeTask, deleteTask }) {
    
    return (
        <div className={completed?'task-container completed':'task-container'}>
            <div className='task-text' onClick={() => completeTask(id)}>
                {text}
            </div>
            <div className='task-icon' onClick={() => deleteTask(id)}>
                <AiOutlineCloseCircle  />
            </div>
        </div>
    )
}

export default Tasks;