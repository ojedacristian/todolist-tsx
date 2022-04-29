import { createContext } from "react"
import { Input } from "./components/Input"
import { TaskList } from "./components/TaskList"
import {useState} from 'react';

export const TaskContext = createContext({} as TaskContextProps)
const { Provider } = TaskContext

export interface Task {
  id: number,
  description: string,
  completed: boolean
}

interface TaskContextProps {
  tasks: Task[],
  deleteTask: (id:number)=> void,
  addTask: (task:Task)=> void
}

// const tasks: Task[] = [{
//   id: 1,
//   description: 'limpiar la pieza',
//   completed: false
// },
// {
//   id: 2,
//   description: 'limpiar el cuarto',
//   completed: false
// }]



export const App = () => {
  const [tasks, setTasks] = useState<Task[]>([{
    id: 1,
    description: 'limpiar la pieza',
    completed: false
  },
  {
    id: 2,
    description: 'limpiar el cuarto',
    completed: false
  }])

  const deleteTask = (id: number) => {
    setTasks( prev => prev.filter( task => task.id !== id))
  }

  const addTask = (task: Task) => {
    setTasks(prev => [...prev, task])
  }

  return (
    <Provider value={{
      tasks,
      deleteTask,
      addTask
    }}>

      <section
        className="bg-gradient-to-r from-cyan-500 to-blue-500 
      h-screen w-screen flex items-center p-4 flex-col">
        <h1 className="text-3xl text-white font-bold">
          TODO LIST
        </h1>
        <Input />
        <TaskList />

      </section>
    </Provider>
  )
}