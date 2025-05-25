import React from 'react';
import styles from "./Footer.module.css";
import Image from 'next/image';
import Arrow from "./arrow.svg";

export default function Footer() {
  return (
    <footer className={styles.main}>
      <div className={styles.name}>
        <div className={styles.leftname}>
          <p>House of designs</p>
        </div>
        <div className={styles.rightname}>
          <Image src={Arrow} width={23} height={22} alt="Details" />
          <p>Details</p>
        </div>
      </div>
    </footer>
  );
}
