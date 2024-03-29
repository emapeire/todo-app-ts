import { TodosProps } from '../types'
import Todo from './Todo'

export default function Todos({ todos, onRemoved, onCompleted }: TodosProps) {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoved={onRemoved}
            onCompleted={onCompleted}
          />
        </li>
      ))}
    </ul>
  )
}
