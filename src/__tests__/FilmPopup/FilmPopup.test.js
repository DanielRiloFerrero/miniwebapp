import React from "react"
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import FilmPopup from "../../components/FilmPopup/FilmPopup"

const data = {
  'id': 1,
  'backdrop_path': 'dummy',
  'original_title': 'dummy',
  'overview': 'dummy',
  'original_language': 'dummy',
  'release_date': new Date(),
  'vote_average': 9,
  'adult': false,
}

describe('FilmPopup tests', () => {
  it("render", () => {
    const { container } = render(<FilmPopup data={data} />);
    expect(container).toMatchSnapshot()
  })
})