import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
describe('App.js' , () => {
    test('App render correctly', () => {
        const component = render(<App />);
        console.log(component);
    });
});