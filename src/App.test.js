import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Ninguém é tão grande que não pode aprender, nem tão pequeno que não possa ensinar.');
  expect(linkElement).toBeInTheDocument();
});
