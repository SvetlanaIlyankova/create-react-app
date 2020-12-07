import { render, screen } from '@testing-library/react';
import App from './App';

test('renders headline', () => {
  render(<App />);
  const linkElement = screen.getByText(/Types of components creation:/i);
  expect(linkElement).toBeInTheDocument();
});
