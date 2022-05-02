import React from 'react'
import { Task, TaskContext } from '../App';
import { useContext } from 'react';

interface Props {
    Task: Task,
}

export const TaskComponent = ({ Task }: Props) => {
    const { completeTask, deleteTask } = useContext(TaskContext)

    return (
        <div className='w-72 flex items-center'>
            <div onClick={ ()=> completeTask(Task.id)}
                // className={ Task.completed ? 'underline' : ''} 
                className={`flex-1 first-letter:capitalize bg-white p-2 mt-6 rounded-md hover:bg-gray-700 hover:text-white text-gray-700 shadow-lg ${Task.completed ? 'bg-green-300' : ''}`}
                style={{ cursor: 'pointer' }}>
                {Task?.description}
            </div>
            <button
                className='bg-red-400 hover:bg-red-500 mt-6 mx-3 p-2 rounded-md text-white'
                onClick={() => deleteTask(Task.id)}>Eliminar</button>
        </div>
    )
}
