// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Spinner from './Spinner'

test('sanity', () => {
  expect(true).toBe(true)
})

test("Please wait displays", () => {
  render(<Spinner setSpinnerOn={true}/>)

  let text = screen.queryByText(/please wait/i)
  expect(text).toBeInTheDocument
})