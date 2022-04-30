import { useState, useContext } from 'react';
import { Task, TaskContext } from '../App';
import './input.css'
export const Input = () => {

    const [formValues, setFormValues] = useState<string>('')
    const { addTask } = useContext(TaskContext)

    const handleSubmit = (e: any): void => {
        e.preventDefault();
        if (!formValues) return;
        const task: Task = {
            id: new Date().getTime(),
            description: formValues,
            completed: false
        }
        addTask(task);
        setFormValues('');
    }
    const handleChange = (e: any): void => {
        setFormValues(e.target.value)
    }


    return (
        <form onSubmit={handleSubmit}>
           
            <div className='flex justify-center items-center'>

                <input
                    className="input border border-gray-400 appearance-none rounded w-full p-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
                    type="text"
                    id='newtask'
                    onChange={handleChange}
                    value={formValues}
                    autoFocus
                    autoComplete='off'
                    placeholder='Agregar nueva tarea...'
                    />
            <button
                className='bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-blue-700 py-2 m-4 px-4 border border-white hover:border-transparent rounded'
                type='submit'>+</button>
                </div>

        </form>
    )
}
