import { useState, useContext } from 'react';
import { Task, TaskContext } from '../App';

export const Input = () => {

    const [formValues, setFormValues] = useState<string>('')
    const { addTask } = useContext(TaskContext)

    const handleSubmit = (e: any): void => {
        e.preventDefault();
        const task: Task = {
            id: new Date().getTime(),
            description: formValues,
            completed: false
        }
        addTask(task)
    }
    const handleChange = (e: any): void => {
        setFormValues(e.target.value)
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={handleChange}
                value={formValues}
            />
            <button
                className='bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-blue-700 py-2 m-4 px-4 border border-white hover:border-transparent rounded'
                type='submit'>+</button>
        </form>
    )
}
