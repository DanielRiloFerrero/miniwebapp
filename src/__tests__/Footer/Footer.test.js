import React from "react"
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Footer from "../../components/Footer/Footer"

describe('Footer tests', () => {
  it("render", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot()
  })
})