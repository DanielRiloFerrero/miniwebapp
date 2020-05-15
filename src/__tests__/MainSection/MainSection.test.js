import React from "react"
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import MainSection from "../../components/MainSection/MainSection"

describe('MainSection tests', () => {
  it("render", () => {
    const { container } = render(<MainSection />);
    expect(container).toMatchSnapshot()
  })
})