export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type TodoId = Pick<Todo, 'id'>
export type ToggleRemoved = ({ id }: TodoId) => void

export type CompletedProps = Pick<Todo, 'id' | 'completed'>
export type ToggleCompleted = ({ id, completed }: CompletedProps) => void

export interface ToggleCompletedProps {
  onCompleted: ToggleCompleted
}

export interface ToggleRemovedProps {
  onRemoved: ToggleRemoved
}

export interface TodosProps extends ToggleRemovedProps, ToggleCompletedProps {
  todos: Todo[]
}

export interface TodoFormProps
  extends Todo,
    ToggleRemovedProps,
    ToggleCompletedProps {}
