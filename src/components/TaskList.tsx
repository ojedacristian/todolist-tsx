import React, { useContext } from 'react'
import { TaskComponent } from './TaskComponent'
import { TaskContext } from '../App';

export const TaskList = () => {
    const { tasks } = useContext(TaskContext)
    return (
        <div>
            <span>
                Lista de Tareas
            </span>
            {
                tasks.map( task => <TaskComponent key={task.id} Task = {task} />)
            }
        </div>
    )
}