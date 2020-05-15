import React from "react"
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Loading from "../../components/Loading/Loading"

describe('Loading tests', () => {
  it("render", () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot()
  })
})