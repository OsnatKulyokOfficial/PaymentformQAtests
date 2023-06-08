import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

describe('App', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Payment Page/i);
    expect(linkElement).toBeInTheDocument();
  });
});
