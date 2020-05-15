import React, { useState } from 'react'
import {
  Row,
  Container,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from 'reactstrap';

import Loading from '../Loading/Loading'
import FilmCard from '../FilmCard/FilmCard'

import styles from './MainSection.module.scss'

import { getFilms } from '../../_assets/js/services'

const MainSection = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleClickSearchFilms = async () => {
    setLoading(true)
    setError('')
    setList([])

    const searhString = document.querySelector('#search').value
    if (searhString.length === 0) {
      setError('Ningún valor para hacer la búsqueda')
      setLoading(false)
      return
    }

    const ok = await getFilms(searhString)
    if (ok.length === 0) {
      setError('No se encontró ninguna película')
    } else {
      setList(ok)
    }
    setLoading(false)
  }

  return (
    <section className={styles.wrapper}>
      <Container>
        <InputGroup>
          <Input id='search' />
          <InputGroupAddon addonType='append'><Button onClick={() => handleClickSearchFilms()}>Buscar</Button></InputGroupAddon>
        </InputGroup>
      </Container>

      <Container>
        {error && <div>{error}</div>}
        {list.length > 0 && (<Row>{list.map(el => <FilmCard key={el.id} data={el} />)}</Row>)}
      </Container>

      {loading && <Loading />}
    </section>
  )
}

export default MainSection