import { useMemo } from 'react'
import styled from 'styled-components'

const Li = styled.li`
  font-size: 24px;
  background: #fff;
  border-bottom: 1px solid #ededed;

  &::last-child {
    border-bottom: none;
  }
`

const TodoItem = ({ item }) => {
  const { editing, completed, title, id } = item

  const htmlFor = useMemo(() => `checkbox-${id}`, [id])

  return (
    <Li>
      <div>
        <input id={htmlFor} type="checkbox" checked={completed} />
        <label htmlFor={htmlFor}>{title}</label>
      </div>
    </Li>
  )
}

export default TodoItem
