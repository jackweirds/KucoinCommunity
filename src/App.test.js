// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders KucoinCommunity title', () => {
    render(<App />);
    const titleElement = screen.getByText(/KucoinCommunity/i);
    expect(titleElement).toBeInTheDocument();
});
