import { HeaderProps } from '../types'
import CreateTodo from './CreateTodo'

export default function Header({ onAddTodo }: HeaderProps) {
  return (
    <header className='header'>
      <h1>
        todo
        <img
          style={{ width: '60px', height: 'auto' }}
          src='https://raw.githubusercontent.com/tastejs/todomvc-app-css/master/app-icon.png'
        />
      </h1>

      <CreateTodo onAddTodo={onAddTodo} />
    </header>
  )
}
