import { useState } from 'react'
import { CreateTodoProps } from '../types'

export default function CreateTodo({ onAddTodo }: CreateTodoProps) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onAddTodo({ title: inputValue })
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='new-todo'
        value={inputValue}
        placeholder='What needs to be done?'
        autoFocus={true}
      ></input>
    </form>
  )
}
