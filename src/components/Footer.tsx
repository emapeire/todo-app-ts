import Filters from './Filters'
import { FooterProps } from '../types'

export default function Footer({
  activeCount = 0,
  completedCount = 0,
  onClearCompleted,
  filterSelected,
  onFilterChange
}: FooterProps) {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{activeCount}</strong> item left
      </span>

      <Filters
        filterSelected={filterSelected}
        onFilterChange={onFilterChange}
      />
    </footer>
  )
}
