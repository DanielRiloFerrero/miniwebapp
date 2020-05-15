import React from 'react'
import ReactLoading from 'react-loading'

import styles from './Loading.module.scss'

const Loading = () => {
  return (
    <div className={styles.loading}>
      <ReactLoading type='balls' color='#fff' />
    </div>
  )
}

export default Loading