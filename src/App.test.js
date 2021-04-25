import { render, screen } from '@testing-library/react';
import App from './App';

test('Editor', () => {
  render(<App />);

  const editorElement = screen.getByText(/editor/i);

  expect(editorElement).toBeInTheDocument();
});

test('Preview', () => {
  render(<App />);

  const previewElement = screen.getByText(/preview/i);

  expect(previewElement).toBeInTheDocument();
});
