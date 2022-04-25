import React, { useEffect, useState } from 'react'
import yayJpg from '../assets/yay.jpg'
import styles from './index.less'

export default function HomePage() {
  const [msg, setMag] = useState('')

  useEffect(() => {
    console.log(window.API.dirname())
    window.API.readMainJs().then((mainJs) => {
      console.log('mainJs:', mainJs)
    })
  }, [])

  function handleClick() {
    const res = window.API.helloPreload('render page')
    setMag(res)
  }

  return (
    <div className={styles.wrap}>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width='388' />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
      <button onClick={handleClick}>say hello</button>
      <div>{msg}</div>
    </div>
  )
}
