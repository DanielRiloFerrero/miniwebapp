import React from 'react'

import { Container } from 'reactstrap'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <a href='/'>Miniwebapp</a>
      </Container>
    </header>
  )
}

export default Header