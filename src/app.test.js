import { render, screen } from '@testing-library/react'
import App from './app'

test('renders react todos list', () => {
  render(<App />)
  const linkElement = screen.getByText(/todos/i)
  expect(linkElement).toBeInTheDocument()
})
