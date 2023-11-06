import {render, screen} from '@testing-library/react'
import { Button } from './Button';
import React from 'react';
import { ButtonTheme } from './Button';

describe('button test' , () => {
    test('render button with class clear' , () => {
   render(<Button theme={ButtonTheme.CLEAR} >Test</Button>)
   expect(screen.getByText('Test')).toHaveClass('clear')
    })
      test('render button', () => {
   render(<Button>Test</Button>)
   expect(screen.getByText('Test')).toBeInTheDocument()
  });
})