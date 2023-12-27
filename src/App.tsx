import { useState } from 'react'
import { mock } from './mock'
import Todos from './components/Todos'
import { CompletedProps, TodoId } from './types'

export default function App() {
  const [todos, setTodos] = useState(mock)

  const handleRemoved = ({ id }: TodoId) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: CompletedProps) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Todos
        onCompleted={handleCompleted}
        onRemoved={handleRemoved}
        todos={todos}
      />
    </div>
  )
}
