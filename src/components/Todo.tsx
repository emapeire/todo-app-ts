import { TodoFormProps } from '../types'

export default function Todo({
  id,
  title,
  completed,
  onRemoved,
  onCompleted
}: TodoFormProps) {
  return (
    <div className='view'>
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
