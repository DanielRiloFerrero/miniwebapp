import React from "react"
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import FilmCard from "../../components/FilmCard/FilmCard"

const data = {
  'poster': 'dummy',
  'release_date': new Date()
}

describe('FilmCard tests', () => {
  it("render", () => {
    const { container } = render(<FilmCard data={data} />);
    expect(container).toMatchSnapshot()
  })
})