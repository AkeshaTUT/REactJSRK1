import { render, screen } from '@testing-library/react';
import App from './App';

test('renders course application form', () => {
  render(<App />);
  const titleElement = screen.getByText(/Course Application/i);
  expect(titleElement).toBeInTheDocument();
});
