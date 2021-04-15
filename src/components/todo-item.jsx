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
  const { editing, completed, title } = item
  return (
    <Li>
      <div>
        <input type="checkbox" />
        {title}
      </div>
    </Li>
  )
}

export default TodoItem
