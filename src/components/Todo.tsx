import { TodoFormProps } from '../types'

export default function Todo({
  id,
  title,
  completed,
  onRemove,
  onCompleted
}: TodoFormProps) {
  return (
    <div className='view'>
      <input
        className='toggle'
        type='checkbox'
        checked={completed}
        onChange={() => {
          onCompleted({ id, completed })
        }}
      />
      <label>{title}</label>
      <button
        className='destroy'
        onClick={() => {
          onRemove({ id })
        }}
      />
    </div>
  )
}
