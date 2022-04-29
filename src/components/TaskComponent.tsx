import React from 'react'
import { Task, TaskContext } from '../App';
import { useContext } from 'react';

interface Props {
    Task: Task,
}

export const TaskComponent = ({ Task } : Props) => {
    const { deleteTask } = useContext(TaskContext)
    
    return (
        <div>
            { Task?.description}
            <button onClick={ ()=> deleteTask(Task.id) }>Eliminar</button>
        </div>
    )
}
