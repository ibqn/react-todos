import { useState } from 'react'
import styled from 'styled-components'
import Footer from './components/footer'
import GlobalStyles from './components/global-styles'
import TodoList from './components/todo-list'

const Header = styled.header`
  min-width: 230px;
  max-width: 550px;
  margin: 0 auto;
`

const Div = styled.div`
  display: flex;

  *:focus {
    outline: 0;
  }
`

const Box = styled.div`
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`

const H1 = styled.h1`
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
`

const Input = styled.input`
  margin: 0;
  flex-grow: 1;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  color: inherit;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  padding: 16px 16px 16px 46px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);

  &::placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }
`

const CheckBox = styled.input`
  margin: 0;
  appearance: none;
  transform: rotate(90deg);
  border: none; /* Mobile Safari */

  &::before {
    content: '❯';
    font-size: 22px;
    color: #e6e6e6;
  }

  &:checked::before {
    color: #737373;
  }
`

const ENTER_KEY = 13

const App = () => {
  const [list, setList] = useState(() => [
    { id: 1, title: 'one' },
    { id: 2, title: 'two' },
  ])

  const [todo, setTodo] = useState()

  const handleChange = ({ target: { value } }) => setTodo(value)

  const handleNewTodo = ({ keyCode }) => {
    if (keyCode === ENTER_KEY) {
      setList([...list, { id: todo, title: todo }])
    }
  }

  return (
    <>
      <GlobalStyles />
      <Header>
        <H1>todos</H1>

        <Box>
          <Div>
            <CheckBox type="checkbox" />
            <Input
              placeholder="What needs to be done?"
              onKeyDown={handleNewTodo}
              onChange={handleChange}
              autoFocus={true}
            />
          </Div>
          <TodoList list={list}></TodoList>
          <Footer count={list.length} />
        </Box>
      </Header>
    </>
  )
}

export default App
