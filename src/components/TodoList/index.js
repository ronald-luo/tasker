import React from "react";
import './index.scss';

const TaskerList = ({ tasks, deleteTask }) => {

    return (
        <ul>
            {
                tasks.tasks.map(task => {
                    return(
                        <li className="task" key={task[0]} onClick={() => {deleteTask(task[0])} }>
                            <span className="task-text">
                                {task[1]}
                            </span>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default TaskerList;