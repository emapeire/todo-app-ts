import { useState } from 'react'
import { mock } from './mock'
import Todos from './components/Todos'

export default function App() {
  const [todos, setTodos] = useState(mock)

  return <Todos todos={todos} />
}
