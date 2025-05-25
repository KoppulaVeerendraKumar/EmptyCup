import React from 'react'
import styles from "./Sort.module.css"
import Contact from "./contact.svg"
import Clipboard from "./clipboard.svg"
import Photo from "./photo.svg"
import Location from "./location.svg"
import Line from "./line.svg"
import Image from 'next/image'


export default function Sort() {
  return (
   <>
   <div className={styles.main}>
    <div className={styles.ions}>
        <div className={styles.leftions}>
            <div className={styles.Contact}>
                <Image src={Contact} width={15.63} height={11.25} alt="Contact"/>
                <p>Contacts</p>
            </div>
            <div className={styles.Photo}>
                <Image src={Photo} width={24} height={19.5} alt="Gallery"/>
                <p>Gallery</p>
            </div>
            <div className={styles.Location}>
                <Image src={Location} width={17} height={19.95} alt="Map"/>
                <p>Map</p>
            </div>
        </div>
        <div className={styles.rightions}>
            <div className={styles.Clipboard}>
                <Image src={Clipboard} width={29} height={28} alt="Shortlisted"/>
                <p>Shortlisted</p>
            </div>
            <div className={styles.Line}>
                <Image src={Line} width={31} height={25} alt="Sort"/>
                <p>Sort</p>
            </div>
        </div>
        
    </div>
   </div>
   </>
  )
}

