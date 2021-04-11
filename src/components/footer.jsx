import { Trans, useTranslation } from 'react-i18next'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background: #fff;
  color: #777;
  padding: 10px 15px;
  height: 50px;
  /* text-align: center; */
  border-top: 1px solid #e6e6e6;
  position: relative;
  /* display: flex;
  flex-direction: row;
  justify-content: center; */
  /* align-items: flex-start; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 5px;
  /* justify-items: center; */

  *:focus {
    outline: 0;
  }

  &:after {
    content: '';
    z-index: -1;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
      0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
      0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }
`

const Count = styled.span`
  align-self: center;
`

const Filters = styled.ul`
  align-self: center;

  margin: 0;
  padding: 0;
  list-style: none;

  & li {
    display: inline;
  }

  & li a {
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
  }

  & li a:hover {
    border-color: rgba(175, 47, 47, 0.1);
  }

  & li a.selected {
    border-color: rgba(175, 47, 47, 0.2);
  }
`

const Button = styled.button`
  /* grid-column-start: 3; */
  margin-left: auto;
  margin-right: 0;

  appearance: none;
  border: none;
  background: none;

  line-height: 20px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const Footer = (props) => {
  const { t, i18n } = useTranslation()

  const { count, nowShowing } = props

  return (
    <StyledFooter>
      <Count>
        <Trans t={t} i18nKey="itemsCount" count={count}>
          <strong>{{ count }}</strong> item left
        </Trans>
      </Count>

      <Filters>
        <li>
          <a>All</a>
        </li>
        <li>
          <a>Active</a>
        </li>
        <li>
          <a>Completed</a>
        </li>
      </Filters>

      <Button>Clear all</Button>
    </StyledFooter>
  )
}

export default Footer
