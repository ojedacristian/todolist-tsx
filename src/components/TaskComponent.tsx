import React from 'react'
import { Task, TaskContext } from '../App';
import { useContext } from 'react';

interface Props {
    Task: Task,
}

export const TaskComponent = ({ Task }: Props) => {
    const { completeTask, deleteTask } = useContext(TaskContext)

    return (
        <div>
            <span onDoubleClick={ ()=> completeTask(Task.id)}
                className={ Task.completed ? 'underline' : ''} 
                style={{ cursor: 'pointer' }}>
                {Task?.description}
            </span>
            <button
                className='bg-red-600 hover:bg-red-500 m-2 w-8 h-8 rounded-full text-white'
                onClick={() => deleteTask(Task.id)}>X</button>
        </div>
    )
}
