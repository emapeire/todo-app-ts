import { TodoProps } from '../types'

export default function Todo({
  id,
  title,
  completed,
  onRemoved,
  onCompleted
}: TodoProps) {
  return (
    <div className='view invert'>
      <input
        className='toggle'
        type='checkbox'
        checked={completed}
        onChange={(event) => {
          onCompleted({ id, completed: event.target.checked })
        }}
      />
      <label>{title}</label>
      <button
        className='destroy'
        onClick={() => {
          onRemoved({ id })
        }}
      />
    </div>
  )
}
