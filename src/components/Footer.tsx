export default function Footer({ todos, activeCount, onClearCompleted }) {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{todos.length}</strong> item left
      </span>

      <Filters filterSelected={} onFilterChange={} />
    </footer>
  )
}
