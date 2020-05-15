import React, { useState, useEffect } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CardImg, FormGroup, Label, Input } from 'reactstrap';
import { format } from 'date-fns'

import { IMG_URL } from '../../_assets/js/const'
import parentalAd from '../../_assets/images/parental_advisory.svg'
import notAvailable from '../../_assets/images/not_available.svg'
import styles from './FilmPopup.module.scss'

const FilmPopup = props => {
  const [errorRate, setErrorRate] = useState('')
  const [errorTextarea, setErrorTextarea] = useState('')
  const [rateValue, setRateValue] = useState('')
  const [textareaValue, setTextareaValue] = useState('')

  const moveId = props.data.id
  const srcImg = props.data.backdrop_path ? `${IMG_URL}${props.data.backdrop_path}` : props.data.poster_path ? `${IMG_URL}${props.data.poster_path}` : notAvailable
  const originalTitle = props.data.original_title ? props.data.original_title : `Título no disponible`
  const overView = props.data.overview ? props.data.overview : `No disponible`
  const originalLanguage = props.data.original_language ? props.data.original_language : `Desconocido`
  const releaseDate = props.data.release_date ? format(new Date(props.data.release_date), 'dd/MM/yyyy') : 'Desconocida'
  const voteAverage = props.data.vote_average ? props.data.vote_average : null
  const parental = props.data.adult ? props.data.adult : null

  const movieRate = `movie_${moveId}`
  const movieTextarea = `textarea_${moveId}`

  useEffect(() => {
    if (sessionStorage[moveId]) {
      const movieValues = JSON.parse(sessionStorage[moveId])
      setRateValue(movieValues.rate)
      setTextareaValue(movieValues.textarea)
    }
  }, [moveId]);

  const handleSaveButton = () => {
    const myRate = document.querySelector(`#${movieRate}`).value
    const myTextarea = document.querySelector(`#${movieTextarea}`).value

    myRate === '' ? setErrorRate('La nota es obligatoria') : setErrorRate('')
    myTextarea === '' ? setErrorTextarea('El comentario es obligatorio') : setErrorRate('')

    if (myRate === '' || myTextarea === '') return false

    const info = {
      'rate': myRate,
      'textarea': myTextarea
    }

    sessionStorage[moveId] = JSON.stringify(info)
    props.close()
  }

  return (
    <div>
      <Modal isOpen={true} toggle={() => props.close()}>
        <ModalHeader>{originalTitle}</ModalHeader>

        <ModalBody>
          <div className={styles.imgWrapper}>
            <CardImg top width='100%' src={srcImg} alt='Card image cap' />
            {voteAverage && <div className={styles.average}>{voteAverage}</div>}
            {parental && <div className={styles.parental}><img src={parentalAd} alt='+18' /></div>}
          </div>

          <FormGroup><span className={styles.title}>Sinopsis: </span>{' '}<span>{overView}</span></FormGroup>
          <FormGroup><span className={styles.title}>Idioma original: </span>{' '}<span>{originalLanguage}</span></FormGroup>
          <FormGroup><span className={styles.title}>Fecha de esteno: </span>{' '}<span>{releaseDate}</span></FormGroup>

          <FormGroup>
            <Label className={styles.title} for={movieRate}>Mi puntuación:</Label>
            <Input value={rateValue} id={movieRate} type='number' onChange={e => setRateValue(e.target.value)} />
            {errorRate && <p>{errorRate}</p>}
          </FormGroup>
          <FormGroup>
            <Label className={styles.title} for={movieTextarea}>Crítica</Label>
            <Input value={textareaValue} type='textarea' name='text' id={movieTextarea} onChange={e => setTextareaValue(e.target.value)} />
            {errorTextarea && <p>{errorTextarea}</p>}
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color='primary' onClick={() => handleSaveButton()}>Guardar</Button>{' '}
          <Button color='secondary' onClick={() => props.close()}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default FilmPopup