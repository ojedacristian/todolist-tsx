import { createContext, useEffect } from 'react';
import { Input } from "./components/Input"
import { TaskList } from "./components/TaskList"
import { useState } from 'react';

export const TaskContext = createContext({} as TaskContextProps)
const { Provider } = TaskContext

export interface Task {
  id: number,
  description: string,
  completed: boolean
}

interface TaskContextProps {
  tasks: Task[],
  deleteTask: (id: number) => void,
  addTask: (task: Task) => void,
  completeTask: (id: number) => void
}

export const App = () => {

  const init = () => {
    const tasksStorage = localStorage.getItem('tasksStorage');
    const parsed = tasksStorage !== null ? JSON.parse(tasksStorage) : [];
    return parsed
  }

  const [tasks, setTasks] = useState<Task[]>( init )


  useEffect(() => {
    localStorage.setItem('tasksStorage', JSON.stringify(tasks))
  }, [tasks])




  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  const addTask = (task: Task) => {
    setTasks(prev => [...prev, task])
  }

  const completeTask = (id: number): void => {
    console.log(id)
    setTasks(prev => {
      const state = prev.map(({ ...t }) => {
        if (t.id == id) {
          t.completed = !t.completed;
        }
        return t
      })
      console.log('STATE', state)
      return state
    }
    )
  }

  return (
    <Provider value={{
      tasks,
      deleteTask,
      addTask,
      completeTask
    }}>

      <section
        className="bg-gradient-to-r from-gray-900 to-gray-800 
      h-screen w-screen flex items-center p-4 flex-col text-white">
        <h1 className="text-3xl text-white font-bold">
          TODO LIST
        </h1>
        <Input />
        <TaskList />

      </section>
    </Provider>
  )
}