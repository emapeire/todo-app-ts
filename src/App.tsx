import { useState } from 'react'
import { mock } from './mock'
import Todos from './components/Todos'
import { CompletedProps, FilterValues, TodoId } from './types'
import { TODO_FILTERS } from './constants'
import Footer from './components/Footer'

export default function App() {
  const [todos, setTodos] = useState(mock)
  const [filterSelected, setFilterSelected] = useState<FilterValues>(
    TODO_FILTERS.ALL
  )

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

  const handleFilterChange = (filter: FilterValues) => {
    setFilterSelected(filter)
  }

  const activeCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.filter((todo) => todo.completed).length

  return (
    <div className='todoapp'>
      <Todos
        onCompleted={handleCompleted}
        onRemoved={handleRemoved}
        todos={todos}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        onClearCompleted={() => {}}
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
    </div>
  )
}
