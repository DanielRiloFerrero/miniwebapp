import React, { useState } from 'react'

import {
  Col,
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import { format } from 'date-fns'

import FilmPopup from '../FilmPopup/FilmPopup'

import notAvailable from '../../_assets/images/not_available.svg'
import { IMG_URL } from '../../_assets/js/const'
import styles from './FilmCard.module.scss'

const FilmCard = props => {
  const [openPopup, setOpenPopup] = useState(false)

  const srcImg = props.data.poster_path ? `${IMG_URL}${props.data.poster_path}` : notAvailable
  const releaseDate = props.data.release_date ? format(new Date(props.data.release_date), 'dd/MM/yyyy') : 'Desconocida'

  const handleOnClick = () => setOpenPopup(true)
  const handleClosePopup = () => setOpenPopup(false)

  return (
    <>
      <Col sm='4' className={styles.card}>
        <Card onClick={() => handleOnClick()}>
          <CardImg top width="100%" src={srcImg} alt="Card image cap" />
          <CardBody>
            <CardTitle>{props.data.title}</CardTitle>
            <CardSubtitle>{releaseDate}</CardSubtitle>
          </CardBody>
        </Card>
      </Col>

      {openPopup && <FilmPopup data={props.data} close={() => handleClosePopup()} />}
    </>
  )
}

export default FilmCard