import React from "react"
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from "../../components/Header/Header"

describe('Header tests', () => {
  it("render", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot()
  })
})