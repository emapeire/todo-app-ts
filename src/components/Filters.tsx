import { FOOTER_FILTERS_BUTTONS } from '../constants'
import { FilterValues, FiltersProps } from '../types'

export default function Filters({
  filterSelected,
  onFilterChange
}: FiltersProps) {
  return (
    <ul className='filters'>
      {Object.entries(FOOTER_FILTERS_BUTTONS).map(([key, { label, href }]) => {
        const isSeledted = filterSelected === key
        const className = isSeledted ? 'selected' : ''

        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={(event) => {
                event.preventDefault()
                onFilterChange(key as FilterValues)
              }}
            >
              {label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
