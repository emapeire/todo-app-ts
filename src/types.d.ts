export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type RemoveTodo = (id: Pick<Todo, 'id'>) => void

export interface RemoveTodoProps {
  onRemove: RemoveTodo
}

export interface TodosProps extends RemoveTodoProps {
  todos: Todo[]
}

export interface TodoFormProps extends Todo, RemoveTodoProps {}
