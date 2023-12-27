export const TODO_FILTERS = {
  ALL: 'all',
  COMPLETED: 'completed',
  ACTIVE: 'active'
} as const

export const FOOTER_FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    label: 'All',
    href: `/?filter=${TODO_FILTERS.ALL}`
  },
  [TODO_FILTERS.ACTIVE]: {
    label: 'Active',
    href: `/?filter=${TODO_FILTERS.ACTIVE}`
  },
  [TODO_FILTERS.COMPLETED]: {
    label: 'Completed',
    href: `/?filter=${TODO_FILTERS.COMPLETED}`
  }
} as const
