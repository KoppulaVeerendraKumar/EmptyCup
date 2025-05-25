import React from 'react'
import styles from "./Header.module.css"
import Logo from "./logo.svg"
import Dots from "./dots.svg"
import Image from 'next/image'

export default function Header() {
  return (
    <>
    <div className={styles.main}>
      <div className={styles.header}>
          <Image src={Logo} width={31} height={31} alt='ex'/>
          <h1>EmptyCup</h1>
          <Image src={Dots} width={27} height={27}  alt='ex'/>
       </div>
    </div>
    </>
  )
}
