import React from "react";
import './index.scss';

const TaskerForm = ({ handleChange, addTask }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask();
        e.target.task.value = "";
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input required type="text" name="task" onChange={ handleChange } placeholder="Create a task"></input>
        </form>
    )
}

export default TaskerForm;