export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type TodoId = Pick<Todo, 'id'>
export type ToggleRemove = ({ id }: TodoId) => void

export type CompletedProps = Pick<Todo, 'id' | 'completed'>
export type ToggleCompleted = ({ id, completed }: CompletedProps) => void

export interface ToggleCompletedProps {
  onCompleted: ToggleCompleted
}

export interface ToggleRemoveProps {
  onRemove: ToggleRemove
}

export interface TodosProps extends ToggleRemoveProps, ToggleCompletedProps {
  todos: Todo[]
}

export interface TodoFormProps
  extends Todo,
    ToggleRemoveProps,
    ToggleCompletedProps {}
