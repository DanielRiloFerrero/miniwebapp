import axios from 'axios'

import { TMBD_URL } from './const'

export const getFilms = id => axios.get(TMBD_URL, {
  params: {
    api_key: process.env.REACT_APP_API_FILM,
    query: id
  }
})
  .then(function (response) {
    return response.data.results
  })
  .catch(function (error) {
    console.log(error);
  })