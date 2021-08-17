import React from 'react';
import { render } from '@testing-library/react';
import Player from './Player';

describe('Player.js' , () => {
    test('Score will be zero', () => {
       const {getByTestId }= render(
       <player name="Nadie" score="0" index="0"></player>
       );
       expect(getByTestId('score'.textContent).toBe('0'));
    });
});