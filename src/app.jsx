import styled from 'styled-components'
import GlobalStyles from './components/global-styles'

const Div = styled.div`
  min-width: 230px;
  max-width: 550px;
  margin: 0 auto;
  display: flex;

  background: #fff;
  /* margin: 130px 0 40px 0; */
  /* position: relative; */
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);

  *:focus {
    outline: 0;
  }
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
  /* border: 0; */
  color: inherit;
  /* padding: 6px; */
  /* border: 1px solid #999; */
  /* box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2); */
  /* box-sizing: border-box; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  padding: 16px 16px 16px 46px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);

  /* &::input-placeholder { */
  &::-webkit-input-placeholder {
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
    /* padding: 10px 6px; */
  }

  &:checked::before {
    color: #737373;
  }
`

const App = () => (
  <>
    <GlobalStyles />
    <header>
      <H1>todos</H1>
      <Div>
        <CheckBox type="checkbox" />
        <Input
          className="new-todo"
          placeholder="What needs to be done?"
          // value={this.state.newTodo}
          // onKeyDown={this.handleNewTodoKeyDown}
          // onChange={this.handleChange}
          autoFocus={true}
        />
      </Div>
    </header>
  </>
)

export default App
