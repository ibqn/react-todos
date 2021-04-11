import styled from 'styled-components'

const TodoItem = (props) => {
  const { editing, completed, title } = props
  return (
    <li>
      <div>
        <input type="checkbox" />
        {title}
      </div>
    </li>
  )
}

export default TodoItem
