import React from 'react'

import { Container } from 'reactstrap'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        Desarrollado por{' '}<a href='https://www.linkedin.com/in/danielrf/'>Daniel Rilo</a>
      </Container>
    </footer >
  )
}

export default Footer