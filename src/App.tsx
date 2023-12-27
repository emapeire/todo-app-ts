import { useState } from 'react'
import { mock } from './mock'
import Todos from './components/Todos'
import { TodoId } from './types'

export default function App() {
  const [todos, setTodos] = useState(mock)

  const handleRemove = (todoId: TodoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId.id)
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Todos onRemove={handleRemove} todos={todos} />
    </div>
  )
}
