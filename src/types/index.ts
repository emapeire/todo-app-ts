import { TODO_FILTERS } from '../constants'

// Todo types
export interface Todo {
  id: string
  title: string
  completed: boolean
}

// TodoId type
export type TodoId = Pick<Todo, 'id'>
// ToggleRemoved type
export type ToggleRemoved = ({ id }: TodoId) => void

// CompletedProps type
export type CompletedProps = Pick<Todo, 'id' | 'completed'>
// ToggleCompleted type
export type ToggleCompleted = ({ id, completed }: CompletedProps) => void

// ToggleCompletedProps interface
export interface ToggleCompletedProps {
  onCompleted: ToggleCompleted
}

// ToggleRemovedProps interface
export interface ToggleRemovedProps {
  onRemoved: ToggleRemoved
}

// TodosProps interface
export interface TodosProps extends ToggleRemovedProps, ToggleCompletedProps {
  todos: Todo[]
}

// TodoProps interface
export interface TodoProps
  extends Todo,
    ToggleRemovedProps,
    ToggleCompletedProps {}

// FilterValues type
export type FilterValues = (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS]

// FiltersProps interface
export interface FiltersProps {
  filterSelected: FilterValues
  onFilterChange: (filter: FilterValues) => void
}
