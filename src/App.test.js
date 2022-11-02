import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button test', () => {
  render(<App />);
  // const buttonElement = fireEvent.getByTestId(/button/i);
  const paragraphElement = screen.getByText(/Is Clicked: false/i)
  const buttonElement = screen.getByRole("button", {name: /Increment Button/i})
  fireEvent.click(buttonElement)
  expect(paragraphElement.textContent).toBe('Is Clicked: true');
});
