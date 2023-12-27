import { TodoFormProps } from '../types'

export default function Todo({
  id,
  title,
  completed,
  onRemove
}: TodoFormProps) {
  return (
    <div className='view'>
      <input
        className='toggle'
        type='checkbox'
        checked={completed}
        onChange={() => {}}
      />
      <label>{title}</label>
      <button
        className='destroy'
        onClick={() => {
          onRemove(id)
        }}
      />
    </div>
  )
}
