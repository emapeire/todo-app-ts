export interface TodosProps {
  todos: Todo[]
  onRemove: (id: number) => void
}

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export interface TodoFormProps extends Todo {
  onRemove: (id: number) => void
}
