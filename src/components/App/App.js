import React from 'react'

import Header from '../Header/Header'
import MainSection from '../MainSection/MainSection'
import Footer from '../Footer/Footer'

import styles from './App.module.scss'

const App = () => {
  return (
    <>
      <div className={styles.flexApp}>
        <Header />
        <MainSection />
      </div>
      <Footer />
    </>
  );
}

export default App
