export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type TodoId = Pick<Todo, 'id'>
export type RemoveTodo = ({ id }: TodoId) => void

export interface RemoveTodoProps {
  onRemove: RemoveTodo
}

export interface TodosProps extends RemoveTodoProps {
  todos: Todo[]
}

export interface TodoFormProps extends Todo, RemoveTodoProps {}
