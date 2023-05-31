import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import '../css/TaskForm.css'

function TaskForm(props) {

    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();

        const newTask = {
            id: uuidv4(),
            text: input,
            completed: false,
        }
        props.onSubmit(newTask);
        //delete text from  input text box when form is submitted.
        setInput('');
    }

    return (
        <form className='task-form' onSubmit={handleSubmit}>
            <input className='task-input' type='text' placeholder='Enter a task' name='text' value={input} onChange={handleChange} />
            <button className='add-task-btn'>Add Task</button>
        </form>
    )
}

export default TaskForm;