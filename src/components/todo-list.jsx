import styled from 'styled-components'
import TodoItem from './todo-item'

const MainSection = styled.section``

const List = styled.ul``

const TodoList = (props) => {
  const { list } = props
  return (
    <MainSection>
      <List>
        {list &&
          list.map((item) => (
            <TodoItem key={item.id}>item.description</TodoItem>
          ))}
      </List>
    </MainSection>
  )
}

export default TodoList
