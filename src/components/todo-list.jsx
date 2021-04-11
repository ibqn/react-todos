import styled from 'styled-components'
import TodoItem from './todo-item'

const MainSection = styled.section`
  z-index: 2;
  border-top: 1px solid #e6e6e6;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
`

const TodoList = (props) => {
  const { list } = props
  return (
    <MainSection>
      <List>
        {list?.map((item) => (
          <TodoItem key={item.id}>item.description</TodoItem>
        ))}
      </List>
    </MainSection>
  )
}

export default TodoList
